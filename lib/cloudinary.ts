import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default cloudinary;

export interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  format: string;
  width: number;
  height: number;
  resource_type: string;
  created_at: string;
}

/**
 * Fetches all folders and gets the first image of each as a thumbnail
 */
export async function getGalleryFolders() {
  try {
    const result = await cloudinary.api.root_folders();
    let folders: any[] = result.folders || [];

    // Fetch the first image for each folder to use as a thumbnail
    const foldersWithThumbnails = await Promise.all(
      folders.map(async (folder) => {
        try {
          const assets = await cloudinary.search
            .expression(`folder:${folder.name}`)
            .max_results(1)
            .execute();
          
          return {
            ...folder,
            thumbnail: assets.resources[0]?.secure_url || null
          };
        } catch (err) {
          return { ...folder, thumbnail: null };
        }
      })
    );

    return foldersWithThumbnails;
  } catch (error: any) {
    console.error('Detailed Cloudinary Error:', error);
    return [];
  }
}

/**
 * Fetches all images and videos from a specific folder
 */
export async function getGalleryAssets(folderName: string) {
  try {
    const result = await cloudinary.search
      .expression(`folder:${folderName}`)
      .sort_by('created_at', 'desc')
      .max_results(100)
      .execute();

    return result.resources as CloudinaryResource[];
  } catch (error) {
    console.error(`Error fetching assets for folder ${folderName}:`, error);
    return [];
  }
}

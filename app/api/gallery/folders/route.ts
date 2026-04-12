import { NextResponse } from 'next/server';
import { getGalleryFolders } from '@/lib/cloudinary';

export async function GET() {
  try {
    const folders = await getGalleryFolders();
    return NextResponse.json(folders);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch folders' }, { status: 500 });
  }
}

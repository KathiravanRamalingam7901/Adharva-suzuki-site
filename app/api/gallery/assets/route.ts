import { NextResponse } from 'next/server';
import { getGalleryAssets } from '@/lib/cloudinary';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get('folder');

  if (!folder) {
    return NextResponse.json({ error: 'Folder name is required' }, { status: 400 });
  }

  try {
    const assets = await getGalleryAssets(folder);
    return NextResponse.json(assets);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch assets' }, { status: 500 });
  }
}

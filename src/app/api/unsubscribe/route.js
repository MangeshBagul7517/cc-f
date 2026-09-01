import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
import { unSubscribeController } from '@/app/backend/controllers/unSubscribeController';
export async function POST(request) {
  try {
    const data = await request.json();
    console.log('data after going', data)

    const response = await unSubscribeController(data);
    return NextResponse.json({ success: true, message: response });
  } catch (error) {
    console.error('Error in API:', error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

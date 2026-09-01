import { NextResponse } from 'next/server';
import connectDb from '../../backend/db/connect';
import { unSubscribeController } from '@/app/backend/controllers/unSubscribeController';
export async function POST(request) {
  try {

    await connectDb();
    console.log('after connection')
    const data = await request.json();
    console.log('data after going', data)

    const response = await unSubscribeController(data);
    return NextResponse.json({ success: true, message: response });
  } catch (error) {
    console.error('Error in API:', error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

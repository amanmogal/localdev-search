import { NextResponse } from 'next/server';

export async function GET() {
  const environmentStatus = {
    LOCALDEV_API_KEY: !!process.env.LOCALDEV_API_KEY,
    GOOGLE_API_KEY: !!process.env.GOOGLE_API_KEY,
  };

  return NextResponse.json({ environmentStatus });
} 
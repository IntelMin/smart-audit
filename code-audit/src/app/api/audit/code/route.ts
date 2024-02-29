import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest, res: NextResponse) {
  const request = await req.json();
  const source = request.data.source;
  console.log('fetch audit for: ', source.length);

  try {
    const response = await axios.post(`${process.env.AEGIS_SRV}/audit/code`, {
      source: source,
    });

    return NextResponse.json(response.data);
  } catch (error) {
    if (error) {
      console.log(error);
      return NextResponse.json(error, { status: 404 });
    } else {
      return NextResponse.error();
    }
  }
}

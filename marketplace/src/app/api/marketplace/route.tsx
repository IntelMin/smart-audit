import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {

  try {
    const body = await req.json();

    const existingUser = await db.findmany();

    return NextResponse.json(
      { user: existingUser, message: ` Successful ! ` , status: 201 }
    );

  } catch (error) {

    return NextResponse.json(
      { message: `Error !` },
      { status: 201 }
    );

  }
}

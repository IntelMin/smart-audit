import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {

  const request = await req.json();

  try {

    const FindContract = await db.contract.findFirst({
      where:{
        title:request.data.title
      }
    });


    if (FindContract !== null && request.data.title === FindContract.title) {

      return NextResponse.json(
        { message: `Error !` },
        { status: 410 }
      );

    }

    const createdContract = await db.contract.create(request);
    
    return NextResponse.json(
      { user: createdContract, message: `Success !` },
      { status: 200 }
    );

  } catch (error) {
    console.log('Error : ', error)
    return NextResponse.json(
      { message: error },
      { status: 500 }
    );
  }
}

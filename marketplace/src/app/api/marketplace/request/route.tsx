import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from "../../../../../prisma/generated/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {

  console.log(`searchParams:`);

  try {

    const result = await prisma.listedcontracts.findMany();
    console.log('result :' , result)
    return NextResponse.json({data:result}, {status:200});

  } catch (error) {

    console.error(error);
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });

  }
}

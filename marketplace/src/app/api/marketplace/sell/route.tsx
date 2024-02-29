import { PrismaClient } from "../../../../../prisma/generated/client";
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();


export async function POST(req:NextRequest) {

  const request = await req.json();
  
  try {

    const createdContract = await prisma.sellContract.create(request);
    
    console.log('sell :', createdContract)

    return NextResponse.json(
      { user: createdContract, message: `Success !` },
      { status: 200 }
    );

  } catch (error) {

    console.log("Save Successfull", error)
    return NextResponse.json(
      { message: error },
      { status: 500 }
    );
    
  }
 
}
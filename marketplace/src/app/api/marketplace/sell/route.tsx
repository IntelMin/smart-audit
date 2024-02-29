import { db } from "@/lib/db";
import { PrismaClient } from "../../../../../prisma/generated/client";
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

const generateHash = async (code:string) => {
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(code);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);

    return Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  } catch (error) {
    console.error('Hash generation failed:', error);
    return '';
  }
};

export async function POST(req:NextRequest) {

  const request = await req.json();
  const {sourcecode, name ,price,contract,user_address,description} = request
  const user_exists = await prisma.users.findUnique({
    where: {
      address: user_address
    }
  })
  if(!user_exists){
    const createdUser = await prisma.users.create({
      data: {
        address: user_address
      }
    })
  }
  const generate_hash  = await generateHash(sourcecode)




  try {
    const createdContract = await prisma.listedcontracts.create({
      data: {
        code_hash: generate_hash,
        name: name,
        description: description,
        price: price,
        address: user_address,
        contract: contract,
        code:sourcecode,
        user: {
          connect: {
            address: user_address
          }
        }
      }
    })
    

    return NextResponse.json(
      { user: createdContract, message: `Success !` },
      { status: 200 }
    );

  } catch (error) {

    console.log("Save error", error)
    return NextResponse.json(
      { message: error },
      { status: 500 }
    );
    
  }
 
}
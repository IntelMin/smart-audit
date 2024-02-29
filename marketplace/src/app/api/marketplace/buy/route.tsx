import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from "../../../../../prisma/generated/client";

const prisma = new PrismaClient();


export async function POST(req: NextRequest, res: NextResponse) {

  const request = await req.json();
  const { contract } = request;

  try {

    // const session = await getServerSession(authOptions);
    // console.log('session :')
    // console.log(session)
    // if (!session || !session.user) {

    //   return NextResponse.json({
    //     status: 'error',
    //     message: 'User not logged in.',
    //   });

    // }


    let contractId = contract;

    const userItem = await prisma.user.findUnique({
      where: {
        id: 3
        // id: session.user.id
      },
    });

    if (!userItem || !Array.isArray(userItem.contract)) {
      throw new Error("IDK");
    }
    return NextResponse.json({
      status: 'requested',
      message: 'Report requested successfully.',
    });
    const updatedData = [...userItem.contract, contractId];

    const updatedUser = await prisma.user.update({
      where: {
        id: 3
        // id: session.user.id,
      },
      data: {
        contract: updatedData,
      },
    });

    console.log("Updated user: ", updatedUser);


    return NextResponse.json({
      status: 'requested',
      message: 'Report requested successfully.',
    });

  } catch (error) {
    console.log('error :')
    console.log(error);

    return NextResponse.json({
      status: 500,
      message: 'Error requesting report',
    });
  }
}

export async function GET(req: NextRequest, res: NextResponse) {

  try {

    const users = await prisma.contract.findMany();
    console.log("Users: ", users);
    return NextResponse.json({
      status: 200,
      data: users,
    });

  } catch (error) {

    console.error("Error: ", error.message);
    return NextResponse.json({
      status: 500,
      message: error.message,
    });

  }
}

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from "../../../../../prisma/generated/client";
import { createPublicClient, formatUnits, http } from 'viem';
import { sepolia } from 'viem/chains';

const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(),
});

const prisma = new PrismaClient();


export async function POST(req: NextRequest, res: NextResponse) {

  const request = await req.json();
  const {contractId ,user_address,hash } = request;
  let user_exists = await prisma.users.findUnique({
    where: {
      address: user_address
    }
  })
  if(!user_exists){
    user_exists = await prisma.users.create({
      data: {
        address: user_address
      }
    })
  }
  try {

    const pre_owned = await prisma.ownedcontracts.findUnique({
      where: {
        user_id_contract_id: {
          user_id: user_exists.id,
          contract_id: Number(contractId)
        }
      },
    });
    if(pre_owned) {
      return(
        NextResponse.json(
          {
            message:"contract already bought"
          },{
            status:500
          }
        )
      )
    }
    const contract = await prisma.listedcontracts.findUnique({
      where:{
        id:contractId
      }
    })
    const txn = await publicClient.getTransaction({
      hash: hash,
    });
    if(!txn || !contract){
      return NextResponse.json({
        message:"txn faied"
      },
      { status:500}
      )
    }
    const txnr = await publicClient.waitForTransactionReceipt({
      hash: hash,
    });
    if (txnr.status != 'success') {
      return NextResponse.json({
        message:"txn faied"
      },
      { status:500}
      )
    }
    const { from, to, value } = txn;
    const amount = formatUnits(value,18)
    if(from != user_exists.address || to != contract.address || amount != contract.price){
      return NextResponse.json({
        message:"txn faied"
      },
      { status:500}
      )
    }
    const addOwnership = await prisma.ownedcontracts.create({
      data:{
        name:contract.name,
        contract_id:contract.id,
        user:{
          connect:{
            id:user_exists.id
          }
        }
      }
    })
    if(!addOwnership){
    return NextResponse.json({
      message:"purchase faied"
    },
    { status:500}
    )
  
  }
  return NextResponse.json(
    {
      message:"purchase success"
    },
    {
      status:200
    }
  )


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

  } catch (error:any) {

    console.error("Error: ", error.message);
    return NextResponse.json({
      status: 500,
      message: error.message,
    });

  }
}

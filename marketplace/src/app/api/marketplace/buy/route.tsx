import { NextRequest, NextResponse } from 'next/server';
import { createPublicClient, formatUnits, http } from 'viem';
import { sepolia } from 'viem/chains';
import { db } from "@/lib/db";
import qs from 'qs'

const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(),
});


export async function POST(req: NextRequest, res: NextResponse) {

  const request = await req.json();
  let userId = 0;
  const {name, contract_id ,address,txhash} = request.data
  const txn = await publicClient.getTransaction({
    hash: txhash,
  });
  console.log(txn)
  
  if(!txn){
    return NextResponse.json({
      status: 500,
      message: 'Error requesting report 1',
    });
  }

  const { from, to, value } = txn;

  const amount = formatUnits(value,18)
  const contract = await db.listedcontracts.findUnique({
    where:{
      id:contract_id
    }})
    if(!contract){
      return NextResponse.json({
        status: 500,
        message: 'Error requesting report  3',
      });
    }
  if(amount != contract.price){
    return NextResponse.json({
      status: 500,
      message: 'Error requesting report 4',
    });
  }
  if(to?.toLowerCase() != contract.address?.toLowerCase() || from?.toLowerCase() != address?.toLowerCase()){
    return NextResponse.json({
      status: 500,
      message: 'Error requesting report 5',
    });
  }
  const txnr = await publicClient.waitForTransactionReceipt({
    hash: txhash,
  });
  console.log(txnr)

    try {

      const findUser = await db.users.findFirst({
        where: {
          address: address
        }
      });


      if (findUser === null || request.data.address != findUser.address) {

        const saveUserData = { address: request.data.address }
        const newUser = await db.users.create({ data: saveUserData });
        userId = newUser.id

      } else {

        userId = findUser.id

      }
      
      const updatedUser = await db.ownedcontracts.create({data:{
        name:name, contract_id:contract_id, user:{connect:{id:userId}}
      }});
      
      return NextResponse.json({
        status: 200,
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

// export async function POST(req: NextRequest, res: NextResponse) {

//   const request = await req.json();
//   const {contractId ,user_address,hash } = request;
//   let user_exists = await db.users.findUnique({
//     where: {
//       address: user_address
//     }
//   })
//   if(!user_exists){
//     user_exists = await db.users.create({
//       data: {
//         address: user_address
//       }
//     })
//   }
//   try {

//     const pre_owned = await db.ownedcontracts.findUnique({
//       where: {
//         user_id_contract_id: {
//           user_id: user_exists.id,
//           contract_id: Number(contractId)
//         }
//       },
//     });
//     if(pre_owned) {
//       return(
//         NextResponse.json(
//           {
//             message:"contract already bought"
//           },{
//             status:500
//           }
//         )
//       )
//     }
//     const contract = await db.listedcontracts.findUnique({
//       where:{
//         id:contractId
//       }
//     })
//     const txn = await publicClient.getTransaction({
//       hash: hash,
//     });
//     if(!txn || !contract){
//       return NextResponse.json({
//         message:"txn faied"
//       },
//       { status:500}
//       )
//     }
//     const txnr = await publicClient.waitForTransactionReceipt({
//       hash: hash,
//     });
//     if (txnr.status != 'success') {
//       return NextResponse.json({
//         message:"txn faied"
//       },
//       { status:500}
//       )
//     }
//     const { from, to, value } = txn;
//     const amount = formatUnits(value,18)
//     if(from != user_exists.address || to != contract.address || amount != contract.price){
//       return NextResponse.json({
//         message:"txn faied"
//       },
//       { status:500}
//       )
//     }
//     const addOwnership = await db.ownedcontracts.create({
//       data:{
//         name:contract.name,
//         contract_id:contract.id,
//         user:{
//           connect:{
//             id:user_exists.id
//           }
//         }
//       }
//     })
//     if(!addOwnership){
//     return NextResponse.json({
//       message:"purchase faied"
//     },
//     { status:500}
//     )
  
//   }
//   return NextResponse.json(
//     {
//       message:"purchase success"
//     },
//     {
//       status:200
//     }
//   )


//   } catch (error) {
//     console.log('error :')
//     console.log(error);

//     return NextResponse.json({
//       status: 500,
//       message: 'Error requesting report',
//     });
//   }
// }

// export async function GET(req: NextRequest, res: NextResponse) {

//   try {

//     const users = await db.contract.findMany();
//     console.log("Users: ", users);
//     return NextResponse.json({
//       status: 200,
//       data: users,
//     });

//   } catch (error:any) {

//     console.error("Error: ", error.message);
//     return NextResponse.json({
//       status: 500,
//       message: error.message,
//     });

//   }
// }


export async function GET(req: NextRequest, res: NextResponse) {

  const rawParams = req.url.split('?')[1];
  const params = qs.parse(rawParams);
  const walletAddress = req.nextUrl.searchParams.get('search') ?? ''
  
  try {

    const userItem = await db.users.findUnique({
      where: {
        address: walletAddress
      },
      include: {
        ownedcontracts: true,
        listedcontracts: true
      }
    });
   
    return NextResponse.json({
      status: 200,
      data: userItem,
    });

  } catch (error) {

    console.error("Error: ", error);
    return NextResponse.json({
      status: 500,
      message: error,
    });

  }
}


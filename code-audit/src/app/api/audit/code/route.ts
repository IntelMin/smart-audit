import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { db } from '@/lib/db';

export async function POST(req: NextRequest, res: NextResponse) {
  const request = await req.json();
  const source = request.data.source;
  const hash = request.data.hash;
  console.log('fetch audit for: ', source.length);
  const db_exist = await db.code_audit.findFirst({
    where: {
      hash: hash,
    },
  });
  if(db_exist){
    console.log('audit exist');
    return NextResponse.json(db_exist);
  }
  const enterdb = await db.code_audit.create({
    data: {
      hash: hash,
    },
  })

  try {
    const response = await axios.post(`${process.env.AEGIS_SRV}/audit/code`, {
      source: source,
      hash: hash,
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
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const hash = url.searchParams.get('hash');
  console.log('fetch audit status for: ', hash);
  const db_exist = await db.code_audit.findFirst({
    where: {
      hash: hash as string,
    },
  });
  if(!db_exist){
    return NextResponse.json({message: 'No audit found'}, { status: 404 });
  }
  if(db_exist.status === 'pending' || db_exist.status === 'processing' ){
    console.log('audit exist');
    return NextResponse.json({message: 'Audit pending'}, { status: 202 });

  }
  return NextResponse.json(db_exist);

}

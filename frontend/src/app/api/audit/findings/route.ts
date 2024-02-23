import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const address = searchParams.get('address');
    console.log({address});
    const url = `${process.env.AEGIS_SRV}/info/summary/${address}`;

    try {
        const res = await fetch(url, {
            next: {
                revalidate: 30,
            },
        });
        console.log(res.body);
        if (!res.ok) {
            throw new Error('Failed to fetch findings');
        }


        const findings = await res.json();


        
        const med = findings.table.number_of_medium_severity_issues
        const high = findings.table.number_of_high_severity_issues
        const low = findings.table.number_of_low_severity_issues


    
        return NextResponse.json({high,med,low}, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(error, { status: 404 });
    }
}

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
        const text = findings.text
<<<<<<< HEAD


    
        return NextResponse.json({high,med,low,text}, { status: 200 });
=======
        const info = findings.table.total_findings
        console.log({findings});


    
        return NextResponse.json({high,med,low,info,text}, { status: 200 });
>>>>>>> 1f8a41f327c25547ff4786ee099e217e7546385d
    } catch (error) {
        console.error(error);
        return NextResponse.json(error, { status: 404 });
    }
}

import { Link } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

function socialIcons({scanData}:any) {
    // if(!scanData) return (
    //     <>
    //     </>
    // )
    const socialIcons = [
        {
            name: "twitter",
            url: "/socialIcons/dis.svg"
            
        },
        {
            name: "discord",
            url: "/socialIcons/x.svg"
            
        },
        {
            name: "telegram",
            url: "/socialIcons/tele.svg"
        },
        {
            name: "website",
            url: "/socialIcons/block.svg"
            
        },
        
    ];

  return (
    <div className='flex space-x-8'>
        {
            socialIcons.map((icon, index) => (
                <button key={index} className=" rounded-full  border-neutral-400" >
                    <a key={index} href=''>
                    <Image src={icon.url
                    } width={40} height={40} alt="icon" className='w-[40px] h-[40px]'/>
                    </a>
                </button>
            ))
        }
    </div>
  )
}

export default socialIcons
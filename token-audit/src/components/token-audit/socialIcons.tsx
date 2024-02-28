import { Link } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

function socialIcons({scanData}:any) {
    // if(!scanData) return (
    //     <>
    //     </>
    // )
    console.log("scan dtaa",scanData)
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
      {socialIcons.map((icon, index) => (
        <button
          key={index}
          className=' rounded-full  border-neutral-400'
        >
          <div key={index}>
            <Image
              src={icon.url}
              width={80}
              height={80}
              alt='icon'
              className='w-[80px] h-[80px]'
            />
          </div>
        </button>
      ))}
    </div>
  );
}

export default socialIcons
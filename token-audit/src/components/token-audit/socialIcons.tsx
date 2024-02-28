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
<<<<<<< HEAD
            url: "/icons/tokenaudit/devicon_twitter.svg"
        },
        {
            name: "discord",
            url: "/icons/tokenaudit/dis.svg"
        },
        {
            name: "telegram",
            url: "/icons/tokenaudit/tl.svg"
        },
        {
            name: "website",
            url: "/icons/tokenaudit/global.png"
=======
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
            
>>>>>>> 1f8a41f327c25547ff4786ee099e217e7546385d
        },
        
    ];

  return (
    <div className='flex space-x-8'>
        {
            socialIcons.map((icon, index) => (
                <button key={index} className=" rounded-full  border-neutral-400" >
                    <a key={index} href=''>
                    <Image src={icon.url
<<<<<<< HEAD
                    } width={24} height={24} alt="icon" className='w-[24px] h-[24px]'/>
=======
                    } width={40} height={40} alt="icon" className='w-[40px] h-[40px]'/>
>>>>>>> 1f8a41f327c25547ff4786ee099e217e7546385d
                    </a>
                </button>
            ))
        }
    </div>
  )
}

export default socialIcons
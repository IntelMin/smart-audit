import Image from 'next/image';
import React from 'react'

function socialIcons() {
    const socialIcons = [
        {
            name: "twitter",
            url: "/icons/tokenaudit/devicon_twitter.svg"
        },
        {
            name: "discord",
            url: "/icons/tokenaudit/dis.svg"
        },
        {
            name: "facebook",
            url: "/icons/tokenaudit/tl.svg"
        },
        {
            name: "facebook",
            url: "/icons/tokenaudit/global.png"
        },
        
    ];

  return (
    <div className='flex space-x-8'>
        {
            socialIcons.map((icon, index) => (
                <button key={index} className=" rounded-full  border-neutral-400">
                    <Image src={icon.url
                    } width={24} height={24} alt="icon" className='w-[24px] h-[24px]'/>
                </button>
            ))
        }
    </div>
  )
}

export default socialIcons
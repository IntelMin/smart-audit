import Link from "next/link";
import Image from "next/image";
import React from "react";

function socialIcons({ scanData }: any) {
  const {
    discord,
    facebook,
    github,
    linkedin,
    medium,
    reddit,
    twitter,
    website,
    telegram,
  } = scanData;
  const socialIcons = [
    {
      name: "discord",
      url: "/socialIcons/discord.svg",
      link: discord,
    },
    {
      name: "facebook",
      url: "/socialIcons/facebook.svg",
      link: facebook,
    },
    {
      name: "github",
      url: "/socialIcons/github.svg",
      link: github,
    },
    {
      name: "linkedin",
      url: "/socialIcons/linkedin.svg",
      link: linkedin,
    },
    {
      name: "medium",
      url: "/socialIcons/medium.svg",
      link: medium,
    },
    {
      name: "reddit",
      url: "/socialIcons/reddit.svg",
      link: reddit,
    },
    {
      name: "twitter",
      url: "/socialIcons/twitter.svg",
      link: twitter,
    },
    {
      name: "website",
      url: "/socialIcons/website.svg",
      link: website,
    },
    {
      name: "telegram",
      url: "/socialIcons/telegram.svg",
      link: telegram,
    },
  ];

  return (
    <div className="flex flex-grow gap-2">
      {socialIcons.map((icon, index) => (
        icon.link.length > 0 ? (
          <Link
            key={index}
            href={icon.link}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-80'
          >
            <Image
              src={icon.url}
              alt={icon.name}
              width={50}
              height={50}
            />
          </Link>
        ) : null
      ))}
        
    </div>
  );
}

export default socialIcons;

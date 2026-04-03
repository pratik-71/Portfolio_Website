import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
  const contacts = [
    {
      name: "WHATSAPP",
      image: "/icons/whatsapp.png",
      link: "https://wa.me/9146032029", 
    },
    {
      name: "GMAIL",
      image: "/icons/gmail.png",
      link: "mailto:prtikdabhade66344@gmail.com",
    },
    {
      name: "INSTAGRAM",
      image: "/icons/hackerank.png", 
      link: "https://www.instagram.com/pratik___dabhade/", 
    },
    {
      name: "LINKEDIN",
      image: "/icons/linkedin.png",
      link: "https://www.linkedin.com/in/pratik-dabhade-a9a600175/", 
    },
  ];

  return (
    <div className="flex flex-col items-center py-24 px-4 relative">
      <div className="ambient-glow bottom-0 left-1/2 -translate-x-1/2 opacity-10" />

      <div className="text-center space-y-4 mb-16">
        <h2 className="text-primary-500 font-bold tracking-widest uppercase">Get In Touch</h2>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-950 uppercase sm:leading-none">Direct <span className="text-primary-500">Channels</span></h1>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 max-w-5xl mx-auto w-full">
        {contacts.map((con, index) => (
          <Link href={con.link} target="_blank" rel="noopener noreferrer" key={index} className="flex-1 min-w-[200px]">
            <div className="glass-card rounded-[3rem] p-10 flex flex-col items-center justify-center text-center transition-all duration-500 interactive-element group">
              <div className="w-16 h-16 relative mb-6 transition-all duration-500">
                <Image src={con.image} fill className="object-contain" alt={con.name} />
              </div>
              <p className="text-slate-950 font-bold tracking-widest uppercase text-sm group-hover:text-primary-500 transition-colors">{con.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Contact;

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
  const contacts = [
    {
      name: "WhatsApp",
      image: "/icons/whatsapp.png",
      link: "https://wa.me/9146032029", 
    },
    {
      name: "Gmail",
      image: "/icons/gmail.png",
      link: "mailto:prtikdabhade66344@gmail.com",
    },
    {
      name: "Instagram",
      image: "/icons/hackerank.png", 
      link: "https://www.instagram.com/pratik___dabhade/", 
    },
    {
      name: "LinkedIn",
      image: "/icons/linkedin.png",
      link: "https://www.linkedin.com/in/pratik-dabhade-a9a600175/", 
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#440b45] to-[#021f3c] flex flex-col items-center py-10">
      <h1 className="text-white text-4xl font-extrabold mb-6">Contact Me</h1>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {contacts.map((con, index) => (
          <Link href={con.link} target="_blank" rel="noopener noreferrer" key={index}>
            <div className="min-w-[140px] max-w-[200px] min-h-[140px] max-h-[200px] bg-white/10 backdrop-blur-lg border border-gray-700 rounded-xl p-4 flex flex-col items-center justify-center text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
              <Image src={con.image} height={50} width={50} alt={con.name} className="mb-2" />
              <p className="text-white text-lg font-semibold">{con.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Contact;

import Image from 'next/image'
import React from 'react'

const Skills = () => {
  const frontend = [
    {
      image: "/icons/html.png",
      name: "HTML",
    },
    {
      image: "/icons/css.png",
      name: "Css",
    },
    {
      image: "/icons/js.png",
      name: "Javascript",
    },
    {
      image: "/icons/tailwind.png",
      name: "Tailwind Css",
    },
    {
      image: "/icons/boostrap.png",
      name: "Bootstrap",
    },
    {
      image: "/icons/react.png",
      name: "React Js",
    },
    {
      image: "/icons/next js.png",
      name: "Next Js",
    },
  ];
  const backend = [
    {
      image: "/icons/node.png",
      name: "Node Js",
    },
    {
      image: "/icons/exress.png",
      name: "Express Js",
    },
    {
      image: "/icons/golang.png",
      name: "Golang",
    },
    {
      image: "/icons/api.png",
      name: "REST API",
    },
    {
      image: "/icons/api.png",
      name:"Third Party API",
    }
  ];
  const database = [
    {
      image: "/icons/mongodb.png",
      name: "MongoDB",
    },
    {
      image: "/icons/mysql.png",
      name: "MY-SQL",
    },
    {
      image: "/icons/postgresql.png",
      name: "Postgre-SQL",
    },
    {
      image: "/icons/firebase.png",
      name: "Firebase",
    },
  ];
  const languages = [
    {
      image: "/icons/java.png",
      name: "Java",
    },
    {
      image: "/icons/python.png",
      name: "Python",
    },
  ];
  const tools = [
    {
      image: "/icons/figma.png",
      name: "Figma",
    },
    {
      image: "/icons/git.png",
      name: "Git",
    },
    {
      image: "/icons/github.png",
      name: "Github",
    },
    {
      image: "/icons/docker.png",
      name: "Docker",
    },
    {
      image: "/icons/postman.png",
      name: "Postman",
    },
  ];

  return (
    <div className="flex flex-col items-center py-10 px-2">
      <h1 className=" text-4xl font-extrabold mb-8 text-purple-400" >- Skills -</h1>
      <div className="flex flex-wrap justify-center gap-8 items-stretch w-full max-w-7xl">
        {/* Card generator */}
        {[
          { title: 'Frontend', skills: frontend },
          { title: 'Backend', skills: backend },
          { title: 'Database', skills: database },
          { title: 'Languages', skills: languages },
          { title: 'Tools', skills: tools },
        ].map((section, idx) => (
          <div
            key={section.title}
            className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl shadow-2xl flex flex-col items-center px-6 py-8 w-full max-w-[350px] min-h-[280px] mb-4 transition-all duration-300 hover:shadow-purple-700/30 hover:border-purple-400/40 hover:-translate-y-2 group"
          >
            <p className="text-2xl font-bold text-white pb-4 tracking-wide group-hover:text-purple-300 transition-colors duration-300">{section.title}</p>
            <div className="flex flex-wrap justify-center items-center gap-3">
              {section.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-[#2a0a3c] to-[#0a1a2f] flex items-center justify-center gap-2 px-4 py-2 rounded-full shadow-md border border-white/10 hover:scale-110 hover:shadow-purple-500/30 transition-all duration-200 cursor-pointer"
                >
                  <Image src={skill.image} height={28} width={28} alt={skill.name} />
                  <span className="text-white text-sm font-medium tracking-wide">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

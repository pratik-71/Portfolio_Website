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
    <div className="bg-gradient-to-r from-[#440b45] to-[#021f3c] flex flex-col items-center py-5">
      <h1 className="text-white text-4xl font-extrabold">- Skills -</h1>
      <div className="flex flex-wrap justify-center gap-5 items-stretch mx-2 mt-10">
        {/* Frontend */}
        <div className="bg-gray-900 rounded-xl shadow-xl border-2 border-black flex flex-col items-center px-2 md:px-5 py-5 w-full max-w-[400px] md:min-h-[300px] hover:translate-y-[-10px] hover:shadow-2xl  cursor-pointer duration-150">
          <p className="text-2xl font-bold text-white pb-4">Frontend</p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {frontend.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#3c0f52] to-[#07325d] flex items-center justify-center gap-2 px-3 py-2 border-2 border-black rounded-xl hover:scale-110 cursor-pointer duration-150"
              >
                <Image src={skill.image} height={30} width={30} alt={skill.name} />
                <p className="text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="bg-gray-900 rounded-xl  shadow-xl border-2 border-black flex flex-col items-center px-2 md:px-5 py-5 w-full max-w-[400px] md:min-h-[300px] hover:translate-y-[-10px] hover:shadow-2xl  cursor-pointer duration-150">
          <p className="text-2xl font-bold text-white pb-4">Backend</p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {backend.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#3c0f52] to-[#07325d] flex items-center justify-center gap-2 px-3 py-2 border-2 border-black rounded-xl hover:scale-110 cursor-pointer duration-150"
              >
                <Image src={skill.image} height={30} width={30} alt={skill.name} />
                <p className="text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Database */}
        <div className="bg-gray-900 rounded-xl shadow-xl border-2 border-black flex flex-col items-center px-2 md:px-5 py-5 w-full max-w-[400px] md:min-h-[300px] hover:translate-y-[-10px] hover:shadow-2xl  cursor-pointer duration-150">
          <p className="text-2xl font-bold text-white pb-4">Database</p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {database.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#3c0f52] to-[#07325d] flex items-center justify-center gap-2 px-3 py-2 border-2 border-black rounded-xl hover:scale-110 cursor-pointer duration-150"
              >
                <Image src={skill.image} height={30} width={30} alt={skill.name} />
                <p className="text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-gray-900 rounded-xl shadow-xl border-2 border-black flex flex-col items-center px-2 md:px-5 py-5 w-full max-w-[400px] md:min-h-[300px] hover:translate-y-[-10px] hover:shadow-2xl  cursor-pointer duration-150">
          <p className="text-2xl font-bold text-white pb-4 ">Languages</p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {languages.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#3c0f52] to-[#07325d] flex items-center justify-center gap-2 px-3 py-2 border-2 border-black rounded-xl hover:scale-110 cursor-pointer duration-150"
              >
                <Image src={skill.image} height={30} width={30} alt={skill.name} />
                <p className="text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="bg-gray-900 rounded-xl shadow-xl border-2 border-black flex flex-col items-center px-2 md:px-5 py-5 w-full max-w-[400px] md:min-h-[300px] hover:translate-y-[-10px] hover:shadow-2xl  cursor-pointer duration-150">
          <p className="text-2xl font-bold text-white pb-4">Tools</p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {tools.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#3c0f52] to-[#07325d] flex items-center justify-center gap-2 px-3 py-2 border-2 border-black rounded-xl hover:scale-110 cursor-pointer duration-150"
              >
                <Image src={skill.image} height={30} width={30} alt={skill.name} />
                <p className="text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

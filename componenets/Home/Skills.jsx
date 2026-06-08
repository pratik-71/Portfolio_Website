import Image from 'next/image'
import React from 'react'

const Skills = () => {
  const skills_data = {
    "FRONTEND": [
      { image: "/icons/html.png", name: "HTML" },
      { image: "/icons/css.png", name: "CSS" },
      { image: "/icons/js.png", name: "JAVASCRIPT" },
      { image: "/icons/tailwind.png", name: "TAILWIND CSS" },
      { image: "/icons/react.png", name: "REACT JS" },
      { image: "/icons/next js.png", name: "NEXT JS" },
      { image: "/icons/typescript.png", name: "TYPESCRIPT" },
      { image: "/icons/react.png", name: "REACT NATIVE" },
    ],
    "BACKEND": [
      { image: "/icons/python.png", name: "PYTHON" },
      { image: "/icons/python.png", name: "DJANGO" },
      { image: "/icons/node.png", name: "NODE JS" },
      { image: "/icons/exress.png", name: "EXPRESS JS" },
      { image: "/icons/socket.svg", name: "SOCKET.IO" },
      { image: "/icons/api.png", name: "REST API" },
      { image: "/icons/redis.png", name: "REDIS" },
      { image: "/icons/microservice.png", name: "MICROSERVICES" },
      { image: "/icons/LLM.png", name: "LLM INTEGRATION" },
    ],
    "DATABASE": [
      { image: "/icons/mongodb.png", name: "MONGODB" },
      { image: "/icons/mysql.png", name: "MYSQL" },
      { image: "/icons/postgresql.png", name: "POSTGRESQL" },
      { image: "/icons/firebase.png", name: "FIREBASE" },
      { image: "/icons/supabase.png", name: "SUPABASE" },
    ],
    "LANGUAGES": [
      { image: "/icons/java.png", name: "JAVA" },
      { image: "/icons/python.png", name: "PYTHON" },
      { image: "/icons/api.png", name: "C LANGUAGE" },
    ],
    "TOOLS": [
      { image: "/icons/figma.png", name: "FIGMA" },
      { image: "/icons/docker.png", name: "DOCKER" },
      { image: "/icons/git.png", name: "GIT" },
      { image: "/icons/github.png", name: "GITHUB" },
      { image: "/icons/postman.png", name: "POSTMAN" },
      { image: "/icons/data-pipeline.png", name: "CI/CD" },
      { image: "/icons/aws.png", name: "AWS" },
      { image: "/icons/agentic-ai.png", name: "AGENTIC AI" },
    ]
  };

  const getCategoryIcon = (category) => {
    return <div className="w-8 h-8 bg-gold rounded-full" />;
  };

  return (
    <div className="flex flex-col items-center py-12 px-4 min-h-screen relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="text-center space-y-3 mb-12">
        <h2 className="text-gold font-bold tracking-widest capitalize lowercase text-xs">Expertise</h2>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white capitalize lowercase">MASTERY & <span className="text-gold">STACKS</span></h1>
      </div>

      <div className="w-full max-w-7xl">
        <div className="flex flex-wrap justify-center gap-8">
          {Object.entries(skills_data).map(([category, skills]) => (
            <div
              key={category}
              className="w-full flex flex-col items-center text-center group mb-8"
            >
              <h2 className="text-xl font-black tracking-widest text-gold mb-6 capitalize lowercase leading-tight border-b-2 border-gold/20 pb-2 px-8">
                {category}
              </h2>

              <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
                {skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 px-5 py-2.5 bg-black rounded-full border border-white/20 hover:border-gold hover:bg-black transition-all duration-500 hover:-translate-y-1 hover:shadow-gold-glow group/skill"
                  >
                    <div className="relative w-7 h-7 flex items-center justify-center  rounded-full shadow-inner overflow-hidden">
                       <Image src={skill.image} fill alt={skill.name} className="object-contain p-1" />
                    </div>
                    <span className="text-[11px] font-bold tracking-widest text-white/90 group-hover/skill:text-gold transition-colors text-center leading-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

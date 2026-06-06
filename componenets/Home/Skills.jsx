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
        <h2 className="text-gold font-bold tracking-widest uppercase text-xs">Expertise</h2>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase">Mastery & <span className="text-gold">Stacks</span></h1>
      </div>

      <div className="w-full max-w-7xl">
        <div className="flex flex-wrap justify-center gap-8">
          {Object.entries(skills_data).map(([category, skills]) => (
            <div
              key={category}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] glass-card rounded-[3.5rem] p-8 flex flex-col items-center text-center group interactive-element"
            >
              <h2 className="text-2xl font-bold tracking-tighter text-white mb-6 uppercase leading-tight group-hover:text-gold transition-colors duration-300">
                {category}
              </h2>

            <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center gap-2 p-2 bg-white/5 rounded-2xl border border-white/10 hover:border-gold/50 hover:bg-gold/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-gold-glow group/skill w-[80px] h-[80px]"
                  >
                    <div className="relative w-8 h-8 flex items-center justify-center transition-transform duration-500 group-hover/skill:scale-110 group-hover/skill:rotate-3">
                       <Image src={skill.image} fill alt={skill.name} className="object-contain" />
                    </div>
                    <span className="text-[8px] font-black tracking-widest text-white/70 group-hover/skill:text-gold transition-colors text-center leading-tight">{skill.name}</span>
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

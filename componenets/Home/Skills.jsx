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
    return <div className="w-8 h-8 bg-primary-500 rounded-full" />;
  };

  return (
    <div className="flex flex-col items-center py-24 px-4 min-h-screen relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="text-center space-y-4 mb-16">
        <h2 className="text-primary-500 font-bold tracking-widest uppercase">Expertise</h2>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-950 uppercase">Mastery & <span className="text-primary-500">Stacks</span></h1>
      </div>

      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(skills_data).map(([category, skills]) => (
            <div
              key={category}
              className="glass-card rounded-[3.5rem] p-10 flex flex-col items-center text-center group interactive-element"
            >
              <h2 className="text-3xl font-bold tracking-tighter text-slate-950 mb-8 uppercase leading-tight group-hover:text-primary-500 transition-colors duration-300">
                {category}
              </h2>

              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-3 p-4 bg-white rounded-3xl border border-slate-100 hover:border-primary-500/30 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="relative w-12 h-12 transition-all duration-500">
                       <Image src={skill.image} fill alt={skill.name} className="object-contain" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">{skill.name}</span>
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

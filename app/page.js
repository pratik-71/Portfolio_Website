import Navbar from "@/componenets/common/Navbar";
import "./globals.css";
import Personal_info from "@/componenets/Home/Personal_info";
import Skills from "@/componenets/Home/Skills";
import Education from "@/componenets/Home/Education";
import Certificates from "@/componenets/Home/Certificates";
import Project from "@/componenets/Home/Project";
import Contact from "@/componenets/Home/Contact";
import Experience from "@/componenets/Home/Experience";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary-500/10">
      {/* Ambient Glows */}
      <div className="ambient-glow -top-24 -left-24" />
      <div className="ambient-glow top-1/2 -right-24" />
      <div className="ambient-glow -bottom-24 left-1/3" />
      
      <div className="relative z-10 w-full min-h-screen">
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section id="about" className="py-20">
            <Personal_info />
          </section>
          
          <section id="experience" className="py-20">
            <Experience />
          </section>
          
          <section id="skills" className="py-20">
            <Skills />
          </section>
     
          <section id="project" className="py-20">
            <Project />
          </section>
          
          <section id="education" className="py-20">
            <Education />
          </section>
          
          <section id="certificates" className="py-20">
            <Certificates />
          </section>
          
          <section id="contact" className="py-20 pb-32">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

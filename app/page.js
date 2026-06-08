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
    <div className="min-h-screen bg-black font-sans selection:bg-gold/10">
      {/* Ambient Glows */}
      <div className="ambient-glow -top-24 -left-24" />
      <div className="ambient-glow top-1/2 -right-24" />
      <div className="ambient-glow -bottom-24 left-1/3" />
      
      <div className="relative z-10 w-full min-h-screen">
        <Navbar />

        {/* Personal Brand Image Background */}
        <div 
          className="fixed top-0 right-0 h-[100vh] w-[100vw] md:w-[70vw] lg:w-[60vw] opacity-[0.55] md:opacity-[0.70] pointer-events-none mix-blend-luminosity z-0"
          style={{
            backgroundImage: "url('/me.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 90%)',
            maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 90%)',
          }}
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <section id="about" className="py-12">
            <Personal_info />
          </section>
          
          <section id="experience" className="py-12">
            <Experience />
          </section>
          
          <section id="skills" className="py-12">
            <Skills />
          </section>
     
          <section id="project" className="py-12">
            <Project />
          </section>
          
          <section id="education" className="py-12">
            <Education />
          </section>
          
          <section id="certificates" className="py-12">
            <Certificates />
          </section>
          
          <section id="contact" className="py-12 pb-24">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

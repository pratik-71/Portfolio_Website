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
    <div className="scroll-smooth min-h-screen w-full relative" style={{
      background: `linear-gradient(120deg, #050510 0%, #14141c 100%)` }}>
      {/* Radial spotlight overlay for the whole app */}
      <div className="pointer-events-none fixed inset-0 z-0 w-full h-full" style={{
        background: `radial-gradient(ellipse 60% 40% at 50% 30%, rgba(40, 0, 60, 0.13) 0%, rgba(5,5,16,0.97) 80%)`,
      }} />
      <div className="relative z-10 bg-gray-950/20 w-full min-h-screen backdrop-filter backdrop-saturate-150">
        <Navbar/>

        <section id="about" className=" mb-8">
            <Personal_info/>
        </section>
        <section id="experience" className=" mb-8">
          <Experience/>
        </section>
        <section id="skills" className=" mb-8">
          <Skills/>
        </section>
   
        <section id="project" className=" mb-8">
          <Project/>
        </section>
        <section id="education" className=" mb-8">
          <Education/>
        </section>
        <section id="certificates" className=" mb-8">
          <Certificates/>
        </section>
        <section id="contact" className=" mb-8">
          <Contact/>
        </section>
      </div>
    </div>
  );
}

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
    <div className="scroll-smooth relative min-h-screen overflow-x-hidden" style={{
      background: `linear-gradient(120deg, #050510 0%, #14141c 100%)` }}>
      {/* Radial spotlight overlay for the whole app */}
      <div className="pointer-events-none fixed inset-0 z-0" style={{
        background: `radial-gradient(ellipse 60% 40% at 50% 30%, rgba(40, 0, 60, 0.13) 0%, rgba(5,5,16,0.97) 80%)`,
        minHeight: '100vh',
        width: '100vw',
      }} />
      <div className="relative z-10">
        <Navbar/>

        <section id="about">
            <Personal_info/>
        </section>
        <section id="skills">
          <Skills/>
        </section>
        <section id="experience">
          <Experience/>
        </section>
        <section id="project">
          <Project/>
        </section>
        <section id="education">
          <Education/>
        </section>
        <section id="certificates">
          <Certificates/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
      </div>
    </div>
  );
}

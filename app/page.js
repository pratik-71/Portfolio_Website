
import Navbar from "@/componenets/common/Navbar";
import "./globals.css";
import Personal_info from "@/componenets/Home/Personal_info";
import Skills from "@/componenets/Home/Skills";
import Education from "@/componenets/Home/Education";
import Certificates from "@/componenets/Home/Certificates";
import Project from "@/componenets/Home/Project";
import Contact from "@/componenets/Home/Contact";


export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar/>

      <section id="about">
          <Personal_info/>
      </section>
      <section id="skills">
        <Skills/>
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
  );
}

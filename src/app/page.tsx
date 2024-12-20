import Contact from "@/components/Contact"; 
import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";
import TopBar from "@/components/TopBar";
import { WorkExperience } from "@/components/WorkExperience";

export default function Home() {
  return (
    <>
    <TopBar/>
    <Hero/>
    <Skills/>
    <WorkExperience/>
    <Projects/>
    <Contact/>
    </>
  );
}

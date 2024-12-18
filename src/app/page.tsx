import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import TopBar from "@/components/TopBar";
import { WorkExperience } from "@/components/WorkExperience";

export default function Home() {
  return (
    <>
    <TopBar/>
    <Hero/>
    <WorkExperience/>
    <Skills/>
    </>
  );
}

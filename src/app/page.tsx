"use client"
import dynamic from 'next/dynamic';

// Lazy load components
const TopBar = dynamic(() => import('@/components/TopBar'));
const Hero = dynamic(() => import('@/components/Hero'));
const Skills = dynamic(() => import('@/components/Skills'));
const WorkExperience = dynamic(() => import('@/components/WorkExperience'));
const Projects = dynamic(() => import('@/components/Projects'));
const Certifications = dynamic(() => import('@/components/Certification'));
const Contact = dynamic(() => import('@/components/Contact'));

export default function Home() {
  return (
    <>
      <TopBar />
      <Hero />
      <Skills />
      <WorkExperience />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}

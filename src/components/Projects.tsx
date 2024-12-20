"use client";
import React from "react";
import { PinContainer } from "./ui/projectPin";
import Image from "next/image";

const projects = [
  {
    title: "Mascot",
    href: "https://github.com/notRyuk/pslv-react-jsx",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: [
      "/ai-profile-image.png",
      "/ai-profile-image.png",
      "/ai-profile-image.png",
      "/ai-profile-image.png"
    ]
  },
  {
    title: "Next.js Blog Starter",
    href: "https://github.com/your-repo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: [
      "/ai-profile-image.png",
      "/ai-profile-image.png",
      "/ai-profile-image.png",
      "/ai-profile-image.png"
    ]
  },
];

export default function Projects() {
  return (
    <section className="w-full min-h-screen py-20">
      <h2 className="text-6xl text-center font-normal mb-20">My Projects</h2>
      <div className="w-full px-4 bg-background text-foreground">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 max-w-[1400px] mx-auto">
          {projects.map((project, index) => (
            <PinContainer key={index} title={project.title} href={project.href}>
              <div className="flex flex-col p-4 tracking-tight w-full max-w-2xl h-[32rem]">
                <h3 className="pb-2 font-bold text-xl text-primary-foreground">
                  {project.title}
                </h3>
                <p className="text-base font-normal text-muted-foreground mb-6 overflow-y-auto max-h-40 custom-scrollbar">
                  {project.description}
                </p>
                <div className="grid grid-cols-2 gap-4 flex-1 overflow-y-auto custom-scrollbar">
                  {project.images.map((image, imageIndex) => (
                    <div 
                      key={imageIndex} 
                      className={`relative col-span-1 rounded-lg overflow-hidden`}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${imageIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </section>
  );
} 
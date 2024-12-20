"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export default function Projects() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center bg-background text-foreground">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs pb-2 font-bold text-base text-primary-foreground">
            Aceternity UI
          </h3>
          <p className="text-base font-normal text-muted-foreground">
            Customizable Tailwind CSS and Framer Motion Components.
          </p>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-primary via-secondary to-accent" />
        </div>
      </PinContainer>
    </div>
  );
}

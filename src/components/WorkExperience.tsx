import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function WorkExperience() {
  const data = [
    {
      title: "June 2024 to Present",
      content: (
        <div>
          <p className="text-4xl mb-4 font-semibold text-primary dark:text-primary-foreground">
            Building S.R. Sports Academy Website
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Image
                key={i}
                src={`https://assets.aceternity.com/templates/startup-${i}.webp`}
                alt={`startup template ${i}`}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]
                  dark:shadow-[0_0_24px_rgba(0,_0,_0,_0.15),_0_1px_1px_rgba(0,_0,_0,_0.1),_0_0_4px_rgba(0,_0,_0,_0.2)]"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "May 2023 to July 2023",
      content: (
        <ContainerScroll
          titleComponent={
            <h1 className="text-4xl mb-4 font-bold text-primary dark:text-primary-foreground">
              WORKED AS MEAN STACK INTERN
            </h1>
          }
        >
          <div className="bg-card shadow-lg rounded-2xl p-6 transition-all duration-300">
            <p className="text-muted-foreground dark:text-muted-foreground mb-4 text-lg">
              <strong>Company:</strong> GEMSYN <br />
              <strong>Location:</strong> Remote | May 2023 - Jul 2023
            </p>
            <ul className="list-disc list-inside space-y-2">
              {[
                "Developed and maintained various client projects, improving performance and API reliability, which led to enhanced user satisfaction.",
                "Utilized Angular and Node.js to implement new features, which enhanced website performance and ensured efficient, scalable codebases, leading to faster load times and improved user experience.",
                "Participated in code reviews and debugging sessions, ensuring high-quality and maintainable code, which improved team collaboration and reduced bugs in production.",
                "Integrated multiple databases like MySQL, MongoDB, and PostgreSQL, which supported accurate and reliable data pipelines, enhancing data processing efficiency.",
              ].map((point, index) => (
                <li
                  key={index}
                  className={`text-foreground dark:text-foreground ${index === 2 ? "hidden md:block" : ""
                    }`}
                >
                  {point}
                </li>
              ))}
            </ul>

          </div>
        </ContainerScroll>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function WorkExperience() {
  const data = [
    {
      title: "June - 2024 to Present",
      content: (
        <div>
          <p className="text-4xl mb-4 font-semibold text-black dark:text-white">
            Building S.R. Sports Academy Website
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "MAY 2023 to JULY 2023",
      content: (
        <ContainerScroll
          titleComponent={
            <h1 className="text-4xl mb-4 font-semibold text-black dark:text-white">
              WORKED AS MEAN STACK INTERN
            </h1>
          }
        >
          <div className="bg-transparent dark:bg-gray-900 p-6 rounded-3xl shadow-md">
            <p className="text-gray-900 dark:text-gray-400 mb-2 text-lg">
              Company - GEMSYN <br />
              Location - Remote | May 2023 - Jul 2023
            </p>
            <ul className="list-disc list-inside">
              <li className="text-gray-700 dark:text-gray-400 mb-2">
                Developed and maintained various client projects, improving performance and API reliability, which led to enhanced user satisfaction.
              </li>
              <li className="text-gray-700 dark:text-gray-400 mb-2">
                Utilized Angular and Node.js to implement new features, which enhanced website performance and ensured efficient, scalable codebases, leading to faster load times and improved user experience.
              </li>
              <li className="text-gray-700 dark:text-gray-400 mb-2">
                Participated in code reviews and debugging sessions, ensuring high-quality and maintainable code, which improved team collaboration and reduced bugs in production.
              </li>
              <li className="text-gray-700 dark:text-gray-400 mb-2">
                Integrated multiple databases like MySQL, MongoDB, and PostgreSQL, which supported accurate and reliable data pipelines, enhancing data processing efficiency.
              </li>
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

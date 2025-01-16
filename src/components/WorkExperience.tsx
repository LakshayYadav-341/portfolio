"use client";
import React, { useEffect, useState } from "react";
import { Timeline } from "@/components/ui/timeline";
import PinContainer from "./ui/projectPin";

export default function WorkExperience() {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const experienceData = [
    {
      title: "Nov 2024 to Present",
      content: (
        <PinContainer
          key="1"
          title="Building S.R. Sports Academy Website"
          href="https://www.srsportsacademy.in/"
          height="h-[36rem]"
        >
          <div className="p-6 rounded-lg">
            <h3 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-primary dark:text-primary-foreground mb-4">
              Building S.R. Sports Academy Website (Freelance)
            </h3>
            <p className="lg:text-lg md:text-base text-sm text-gray-700 dark:text-gray-300 mb-6">
              Developing a website for S.R. Sports Academy to showcase activities, improve data accessibility, and enhance user engagement.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h11M9 21V3M17 16h5M17 12h5m-5-4h5"
                    />
                  ),
                  text: "Collaborated with the app development team to implement admin privileges, reducing admin task completion time by 30%.",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  ),
                  text: "Worked closely with the client to gather requirements, design scalable architectures, and deliver a seamless user experience.",
                },
              ].map(({ icon, text }, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-600 text-white rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {icon}
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 md:text-base text-sm">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </PinContainer>
      ),
    },
    {
      title: "May 2023 to July 2023",
      content: (
        <PinContainer
          key="2"
          title="Worked as MEAN Stack Intern"
          href="https://drive.google.com/file/d/1Zs-UzSO67iixpcGyVK_b5SUkPd6yWs-E/view?usp=sharing"
          height="h-[36rem]"
        >
          <div className="p-6 rounded-lg">
            <h3 className="lg:text-4xl md:text-3xl text-2xl font-semibold mb-6 text-primary dark:text-primary-foreground">
              Worked as MEAN Stack Intern
            </h3>
            <p className="lg:text-lg md:text-base text-sm text-muted-foreground dark:text-muted-foreground mb-4">
              <strong>Company:</strong> GEMSYN <br />
              <strong>Location:</strong> Remote | May 2023 - Jul 2023
            </p>
            <ul className="list-disc list-inside space-y-2">
              {[
                "Developed and maintained various client projects, improving performance and API reliability.",
                "Utilized Angular and Node.js to implement new features, ensuring efficient, scalable codebases.",
                "Participated in code reviews and debugging sessions, improving team collaboration and reducing production bugs.",
                "Integrated multiple databases like MySQL, MongoDB, and PostgreSQL, enhancing data pipelines.",
              ]
                .filter((_, idx) => isMediumScreen || idx !== 2)
                .map((point, idx) => (
                  <li key={idx} className="text-gray-800 dark:text-gray-200 md:text-base text-sm">
                    {point}
                  </li>
                ))}
            </ul>
          </div>
        </PinContainer>
      ),
    },
  ];

  return (
    <div className="w-full px-0 md:px-10 lg:px-32">
      <Timeline data={experienceData} />
    </div>
  );
}

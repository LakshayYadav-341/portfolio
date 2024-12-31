import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { PinContainer } from "./ui/projectPin";

export function WorkExperience() {
  const data = [
    {
      title: "Nov 2024 to Present",
      content: (
        <PinContainer key="1" title="Building S.R. Sports Academy Website" href="https://www.srsportsacademy.in/">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="lg:text-4xl md:text-3xl text-2xl mb-4 font-semibold text-primary dark:text-primary-foreground">
              Building S.R. Sports Academy Website (FreeLance)
            </p>
            <p className="lg:text-lg md:text-base text-sm text-gray-700 dark:text-gray-300 mb-6">
              Developing a website for S.R. Sports Academy, showcasing academy activities, improving data accessibility, and enhancing user engagement.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-purple-600 text-white rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h11M9 21V3M17 16h5M17 12h5m-5-4h5"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300 lg:text-lg md:text-base text-sm">
                  Collaborating with the cross-platform app development team to implement admin privileges and functions using Node.js, ensuring seamless integration with the existing system, which reduced admin task completion time by 30%.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-purple-600 text-white rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300 lg:text-lg md:text-base text-sm">
                  Working closely with the client to gather requirements, design scalable architectures, and deliver web applications, ensuring an optimal user experience that increased client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </PinContainer>
      ),
    },
    {
      title: "May 2023 to July 2023",
      content: (
        <PinContainer key="2" title="WORKED AS MEAN STACK INTERN" href="https://drive.google.com/file/d/1Zs-UzSO67iixpcGyVK_b5SUkPd6yWs-E/view?usp=sharing">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="lg:text-4xl md:text-3xl text-2xl font-semibold mb-6 text-primary dark:text-primary-foreground">
              WORKED AS MEAN STACK INTERN
            </p>
            <div className="space-y-4">
              <p className="lg:text-lg md:text-base text-sm text-muted-foreground dark:text-muted-foreground">
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
                    className={`text-gray-800 lg:text-lg md:text-base text-sm dark:text-gray-200 ${index===2? "hidden md:block":""}`}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PinContainer>

      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

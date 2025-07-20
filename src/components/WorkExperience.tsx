"use client";
import React, { useEffect, useState, useMemo } from "react";
import { Timeline } from "@/components/ui/timeline";
import { BriefcaseIcon } from "@heroicons/react/24/solid";

export default function WorkExperience() {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMediumScreen(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const experienceData = useMemo(() => [
    {
      title: "May 2025 to Present",
      content: (
        <div className="p-6 rounded-2xl border bg-white dark:bg-neutral-900 shadow-md hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-neutral-800 group cursor-pointer">
          <div className="flex items-center gap-4 mb-4">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-gray-200 via-purple-100 to-gray-300 dark:from-gray-700 dark:via-purple-900 dark:to-gray-800 text-purple-700 dark:text-purple-200 shadow group-hover:scale-105 transition-transform duration-300">
              <BriefcaseIcon className="w-7 h-7" />
            </span>
            <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">SDE Intern</h3>
          </div>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
            <span className="font-bold text-lg">AppsforBharat</span>
            <br />
            <span className="text-sm text-purple-700 dark:text-purple-300">Bengaluru</span>
          </p>
          <ul className="list-disc list-inside space-y-2 pl-3">
            {[
              "Built 4+ REST APIs including a live order migration API for microservice V1 to V2 transition.",
              "Resolved Razorpay webhook race condition affecting payment status consistency.",
              "Improved unit test coverage by 10% and fixed flaky Bitbucket CI pipeline failures.",
              "Fixed critical Store page pagination bug and 5+ production issues in booking flows."
            ]
              .filter((_, idx) => isMediumScreen || idx !== 2)
              .map((point, idx) => (
                <li key={idx} className="text-gray-800 dark:text-gray-200 text-base leading-relaxed transition-colors duration-200">
                  {point}
                </li>
              ))}
          </ul>
        </div>
      ),
    },
    {
      title: "Nov 2024 to Feb 2025",
      content: (
        <div className="p-6 rounded-2xl border bg-white dark:bg-neutral-900 shadow-md hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-neutral-800 group cursor-pointer">
          <div className="flex items-center gap-4 mb-4">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-gray-200 via-purple-100 to-gray-300 dark:from-gray-700 dark:via-purple-900 dark:to-gray-800 text-purple-700 dark:text-purple-200 shadow group-hover:scale-105 transition-transform duration-300">
              <BriefcaseIcon className="w-7 h-7" />
            </span>
            <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">SDE (Freelance)</h3>
          </div>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
            <span className="font-bold text-lg">S.R Sports Academy</span>
            <br />
            <span className="text-sm text-purple-700 dark:text-purple-300">Remote</span>
          </p>
          <ul className="list-disc list-inside space-y-2 pl-3">
            {[
              "Developed a website for S.R Sports Academy, showcasing academy activities and managing student records",
              "Implemented 7+ admin functionalities for S.R Sports app reducing task completion by 50%",
              "Built 10+ APIs for managing slot booking in mobile app",
              "Leveraged Technologies - Next.js, Tailwind CSS, Node.js, Express.js, MongoDB",
            ].map((point, idx) => (
              <li key={idx} className="text-gray-800 dark:text-gray-200 text-base leading-relaxed transition-colors duration-200">
                {point}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: "May 2023 to July 2023",
      content: (
        <div className="p-6 rounded-2xl border bg-white dark:bg-neutral-900 shadow-md hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-neutral-800 group cursor-pointer">
          <div className="flex items-center gap-4 mb-4">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-gray-200 via-purple-100 to-gray-300 dark:from-gray-700 dark:via-purple-900 dark:to-gray-800 text-purple-700 dark:text-purple-200 shadow group-hover:scale-105 transition-transform duration-300">
              <BriefcaseIcon className="w-7 h-7" />
            </span>
            <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">SDE Intern</h3>
          </div>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
            <span className="font-bold text-lg">Gemsyn</span>
            <br />
            <span className="text-sm text-purple-700 dark:text-purple-300">Remote</span>
          </p>
          <ul className="list-disc list-inside space-y-2 pl-3">
            {[
              "Developed client-facing features using scrum in sprints to deliver projects on time",
              "Implemented 5+ features, such as SMTP, weather widget, Excel viewer, dynamic dashboard",
              "Developed feature enabling users to add data across 3 different database types",
              "Leveraged Technologies - Angular, Node.js, MySQL, PostgreSQL, MongoDB",
            ].map((point, idx) => (
              <li key={idx} className="text-gray-800 dark:text-gray-200 text-base leading-relaxed transition-colors duration-200">
                {point}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
  ], [isMediumScreen]);

  return (
    <div className="py-16 px-4 md:px-12 lg:px-36">
      <Timeline data={experienceData} />
    </div>
  );
}

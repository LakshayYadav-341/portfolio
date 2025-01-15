"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useOutsideClick } from "../lib/use-outside-click";
import { Badge } from "./ui/badge";

export function Certifications() {
    const [active, setActive] = useState(null);
    const ref = useRef(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <section className="py-12 px-4 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-white dark:to-neutral-400">
                    Professional Certifications
                </h2>
                <p className="text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
                    Industry-recognized certifications that validate my expertise and commitment to continuous learning
                </p>

                <AnimatePresence>
                    {active && typeof active === "object" && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm h-full w-full z-10"
                        />
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {active && typeof active === "object" ? (
                        <div className="fixed inset-0 grid place-items-center z-[100] p-4">
                            <motion.button
                                key={`button-${active.title}-${id}`}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                                className="flex absolute top-4 right-4 lg:top-8 lg:right-8 items-center justify-center bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-full h-8 w-8 shadow-lg hover:scale-110 transition-transform"
                                onClick={() => setActive(null)}
                            >
                                <CloseIcon />
                            </motion.button>

                            <motion.div
                                layoutId={`card-${active.title}-${id}`}
                                ref={ref}
                                className="w-full max-w-2xl h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/50 dark:border-neutral-800"
                            >
                                <div className="relative">
                                    <motion.div
                                        layoutId={`image-${active.title}-${id}`}
                                        className="relative h-64 bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-800 dark:to-neutral-900 p-8"
                                    >
                                        <Image
                                            width={500}
                                            height={300}
                                            loading="lazy"
                                            src={active.src}
                                            alt={active.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </motion.div>

                                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-neutral-900 to-transparent" />
                                </div>

                                <div className="flex-1 overflow-auto px-6 pt-4 pb-8">
                                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                                        <div>
                                            <motion.h3
                                                layoutId={`title-${active.title}-${id}`}
                                                className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 mb-2"
                                            >
                                                {active.title}
                                            </motion.h3>
                                            <motion.div className="space-y-2">
                                                <motion.p
                                                    layoutId={`description-${active.description}-${id}`}
                                                    className="text-neutral-600 dark:text-neutral-400"
                                                >
                                                    {active.description}
                                                </motion.p>
                                                <motion.p className="text-neutral-500 dark:text-neutral-400 text-sm flex items-center gap-2">
                                                    <CalendarIcon className="h-4 w-4" />
                                                    Issued: {active.issueDate}
                                                </motion.p>
                                            </motion.div>
                                        </div>

                                        <motion.a
                                            layoutId={`button-${active.title}-${id}`}
                                            href={active.verifyLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-2.5 text-sm rounded-full font-semibold bg-blue-500 hover:bg-blue-600 text-white transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
                                        >
                                            <VerifyIcon className="h-4 w-4" />
                                            Verify Credential
                                        </motion.a>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-4">
                                                Skills & Competencies
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {active.skills.map((skill, index) => (
                                                    <Badge
                                                        key={index}
                                                        variant="secondary"
                                                        className="bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
                                                    >
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        {active.details && (
                                            <div>
                                                <h4 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-3">
                                                    Certification Details
                                                </h4>
                                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                                    {active.details}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ) : null}
                </AnimatePresence>

                <ul className="max-w-3xl mx-auto w-full grid gap-4">
                    {certifications.map((cert) => (
                        <motion.div
                            layoutId={`card-${cert.title}-${id}`}
                            key={`card-${cert.title}-${id}`}
                            onClick={() => setActive(cert)}
                            className="group p-6 flex flex-col md:flex-row justify-between items-center bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 rounded-2xl cursor-pointer border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="flex gap-6 flex-col md:flex-row items-center md:items-center">
                                <motion.div
                                    layoutId={`image-${cert.title}-${id}`}
                                    className="relative bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-800 dark:to-neutral-900 rounded-xl p-4"
                                >
                                    <Image
                                        width={100}
                                        height={100}
                                        loading="lazy"
                                        src={cert.src}
                                        alt={cert.title}
                                        className="h-16 w-16 object-contain"
                                    />
                                </motion.div>
                                <div className="text-center md:text-left">
                                    <motion.h3
                                        layoutId={`title-${cert.title}-${id}`}
                                        className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-1"
                                    >
                                        {cert.title}
                                    </motion.h3>
                                    <motion.p
                                        layoutId={`description-${cert.description}-${id}`}
                                        className="text-neutral-600 dark:text-neutral-400"
                                    >
                                        {cert.description}
                                    </motion.p>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1 flex items-center justify-center md:justify-start gap-2">
                                        <CalendarIcon className="h-4 w-4" />
                                        {cert.issueDate}
                                    </p>
                                </div>
                            </div>
                            <motion.button
                                layoutId={`button-${cert.title}-${id}`}
                                className="px-6 py-2 text-sm rounded-full font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 mt-4 md:mt-0 group-hover:bg-blue-500 group-hover:text-white transition-all flex items-center gap-2"
                            >
                                <ViewIcon className="h-4 w-4" />
                                View Details
                            </motion.button>
                        </motion.div>
                    ))}
                </ul>
            </div>
        </section>
    );
}

// Icons
const CloseIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
    >
        <path d="M18 6L6 18" />
        <path d="M6 6l12 12" />
    </svg>
);

const CalendarIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

const ViewIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

const VerifyIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

// Example certifications data structure with added details field
const certifications = [
    {
        title: "Mean Stack Inern",
        description: "Internship",
        src: "/internship.png",
        issueDate: "July 2023",
        verifyLink: "https://drive.google.com/file/d/1Zs-UzSO67iixpcGyVK_b5SUkPd6yWs-E/view",
        skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React",
            "Node.js",
            "MongoDB",
            "APIs",
            "Git",
            "GitHub",
            "AWS",
        ],
        details: "This credential certifies that I have successfully completed 3-months Mean Stack Internship at GemSyn."
    },
    {
        title: "The Complete 2024 Web Development Bootcamp",
        description: "",
        src: "/udemy.png",
        issueDate: "Dec 2024",
        verifyLink: "https://www.udemy.com/certificate/UC-f9bb2ff8-c0d7-447e-b37a-25ee092ec911/",
        skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React",
            "Node.js",
            "MongoDB",
            "APIs",
            "Git",
            "GitHub",
            "AWS",
        ],
        details: "This certificate above verifies successfully completed the course The Complete 2024 Web Development Bootcamp on 12/15/2024 as taught by Dr. Angela Yu, Developer and Lead Instructor on Udemy."
    },
    {
        title: "Flipkart Grid 6.0",
        description: "Level 1: E-Commerce & Tech Quiz",
        src: "/flipkart6.png",
        issueDate: "27 Aug 2024",
        verifyLink: "https://unstop.com/certificate-preview/23c005d6-5384-4a48-bb4b-bfb169bd3738",
        skills: [
            "E-Commerce",
            "Technology",
            "Innovation",
            "Problem Solving",
            "Decision Making"
        ],
        details: "The Flipkart Grid 6.0 participation certification in SoftWare Development Tract "
    },
    {
        title: "Xiaomi Ode2Code 3.0",
        description: "",
        src: "/xiaomi.png",
        issueDate: "Nov 2023",
        verifyLink: "https://unstop.com/certificate-preview/6c7f5018-bf5f-42b2-87f1-7a8a50adbd88",
        skills: [
            "Agile Methodologies",
            "Team Facilitation",
            "Sprint Planning",
            "Continuous Improvement",
        ],
        details: "The Xiaomi Ode2Code 3.0 participation certification Round 2."
    },
    {
        title: "TVS Credit E.P.I.C 5.0",
        description: "",
        src: "/tvs.png",
        issueDate: "Aug 2023",
        verifyLink: "https://unstop.com/certificate-preview/6449389f-7cb5-4fe6-ae76-c231514694d0",
        skills: [
            "Agile Methodologies",
            "Team Facilitation",
            "Sprint Planning",
            "Continuous Improvement",
        ],
        details: "The TVS Credit E.P.I.C 5.0 participation certification Round 1."
    },
];

export default Certifications;
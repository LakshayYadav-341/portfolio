"use client";
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function TypewriterEffectSmoothDemo(words: { text: string; className?: string }[]) {
    return (
        <div className="flex flex-col items-center justify-center h-[40rem]">
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
                The road to freedom starts from here
            </p>
            <TypewriterEffectSmooth words={words} />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                    Join now
                </button>
                <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
                    Signup
                </button>
            </div>
        </div>
    );
}

export function Hero() {
    const RoleP1 = [
        {
            text: "FULL",
            className:
                "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-600 dark:text-neutral-400 leading-tight tracking-tight",
        },
        {
            text: "STACK",
            className:
                "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-600 dark:text-neutral-400 leading-tight tracking-tight",
        },
        {
            text: "WEB",
            className:
                "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-600 dark:text-neutral-400 leading-tight tracking-tight",
        },
    ];

    const RoleP2 = [
        {
            text: "DEVELOPER.",
            className:
                "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-600 dark:text-neutral-400 leading-tight tracking-tight",
        },
    ];

    const NameP1 = [
        {
            text: "LAKSHAY",
            className:
                "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white leading-none tracking-tight",
        },
    ];

    const NameP2 = [
        {
            text: "YADAV",
            className:
                "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white leading-none tracking-tight",
        },
    ];

    const description = `I'm a full-stack web developer currently in my B.Tech final year and looking for opportunities.`;
    const descClassName =
        "text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-700 dark:text-neutral-400 max-w-2xl leading-relaxed";

    const socialLinks = [
        { href: "https://www.linkedin.com/in/yourprofile", icon: <FaLinkedin /> },
        { href: "https://github.com/yourprofile", icon: <FaGithub /> },
        { href: "https://twitter.com/yourprofile", icon: <FaTwitter /> },
        { href: "https://instagram.com/yourprofile", icon: <FaInstagram /> },
    ];

    return (
        <BackgroundLines className="h-screen grid grid-cols-1 md:grid-cols-[60%,40%] items-center px-4 py-24 relative">
            {/* Left Section */}
            <div className="z-5 left-container text-center md:text-left ms-0 md:ms-40 mt-10">
                {/* Role Heading */}
                <h2>
                    <TypewriterEffectSmooth words={RoleP1} />
                    <TypewriterEffectSmooth words={RoleP2} />
                </h2>
                {/* Name */}
                <h1>
                    <TypewriterEffectSmooth words={NameP1} />
                    <TypewriterEffectSmooth words={NameP2} />
                </h1>

                {/* About Paragraph */}
                <div>
                    <TextGenerateEffect words={description} className={descClassName} />
                </div>
            </div>

            {/* Right Section */}
            <div className="right-container flex flex-col mx-20 items-center relative">
                <Image
                    src="/ai-profile-image.png"
                    alt="Lakshay Yadav"
                    layout="responsive" // Ensures full responsiveness
                    width={700} // Default width
                    height={700} // Default height
                    className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-full shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_0_40px_5px_rgba(168,85,247,0.5)]"
                />

                <a
                    href="/path-to-your-cv.pdf"
                    download
                    className="mt-6 inline-flex items-center justify-center px-6 py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-full font-semibold shadow-lg transition duration-300"
                >
                    <span className="mr-2">Download CV</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M3 10a1 1 0 011-1h3V3a1 1 0 112 0v6h3a1 1 0 110 2H9v6a1 1 0 11-2 0v-6H4a1 1 0 01-1-1zm14 7a1 1 0 100-2H3a1 1 0 100 2h14z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>

                {/* Social Media Icons */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-b from-purple-600 to-purple-800 hover:opacity-80 transition text-white text-2xl shadow-lg"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </BackgroundLines>
    );
}

import React from "react";
import { BackgroundLines } from "@/components/ui/heroBackgroundLines";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FileDownload } from "./ui/file-download";

export default function Hero() {
    const socialLinks = [
        { href: "https://www.linkedin.com/in/mlakshayyadav/", icon: <FaLinkedin /> },
        { href: "https://github.com/LakshayYadav-341", icon: <FaGithub /> },
        { href: "https://www.instagram.com/_lakshay__yadav_/", icon: <FaInstagram /> },
    ];
    const fileId = "1Plm6AsMyOAdjxz45f9Q-9vRoiXCn79ES"
    const CVURL = `https://drive.google.com/uc?export=download&id=${fileId}`

    return (
        <BackgroundLines className="h-screen flex flex-col md:flex-row items-center py-24 relative">
            {/* Left Section */}
            <div className="w-full md:w-1/2 text-center md:text-left px-4 lg:ps-36 md:ps-12">
                <h2 className="md:flex-col md:justify-start md:gap-0 sm:flex-nowrap flex justify-center flex-wrap gap-2">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-neutral-600 dark:text-neutral-400 leading-tight tracking-tight">
                        FULL STACK WEB DEVELOPER
                    </div>
                </h2>

                <h1 className="md:flex-col md:justify-start md:gap-0 sm:flex-nowrap flex justify-center flex-wrap gap-2 mt-12">
                    <div className="whitespace-nowrap text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white leading-none tracking-tight">
                        Lakshay
                    </div>
                    <div className="whitespace-nowrap text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white leading-none tracking-tight">
                        Yadav
                    </div>
                </h1>
                <div className="flex justify-center">
                    <div className="text-sm sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-200 max-w-2xl">I&apos;m a full-stack web developer currently in my B.Tech final year and looking for opportunities.</div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 md:h-screen flex flex-col items-center lg:p-20 md:py-12 justify-center relative">
                <div className="relative w-full md:h-screen flex items-center justify-center">
                    <Image
                        src="/profile.png"
                        alt="Lakshay Yadav"
                        loading="lazy"
                        width={500}
                        height={500}
                        className="transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_0_40px_5px_rgba(168,85,247,0.5)] w-full h-full md:w-auto object-cover"
                    />
                    <a
                        href={CVURL}
                        download
                        className="absolute bottom-2 left-2 transform inline-flex items-center justify-center px-4 py-2 text-sm md:text-base text-white bg-purple-600 hover:bg-purple-700 rounded-full font-semibold shadow-lg transition duration-300"
                    >
                        <FileDownload/>
                    </a>
                </div>

                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
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

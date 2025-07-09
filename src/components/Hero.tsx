import React, { useMemo } from "react";
import { BackgroundLines } from "@/components/ui/heroBackgroundLines";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IconDownload } from "@tabler/icons-react";

export default function Hero() {
  const fileId = "1Plm6AsMyOAdjxz45f9Q-9vRoiXCn79ES";
  const CVURL = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const socialLinks = useMemo(
    () => [
      { href: "https://www.linkedin.com/in/mlakshayyadav/", icon: <FaLinkedin /> },
      { href: "https://github.com/LakshayYadav-341", icon: <FaGithub /> },
      { href: "https://www.instagram.com/_lakshay__yadav_/", icon: <FaInstagram /> },
    ],
    []
  );

  return (
    <BackgroundLines className="min-h-screen flex flex-col items-center justify-center py-16 px-4 relative">
      {/* Headings */}
      <h2 className="text-center text-lg sm:text-xl md:text-2xl text-purple-700 dark:text-purple-300 font-semibold tracking-widest mb-2 animate-fade-in">
        FULL STACK WEB DEVELOPER
      </h2>
      <h1 className="text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-purple-200 text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight mb-2 animate-fade-in">
        Lakshay Yadav
      </h1>
      <div className="flex justify-center mb-4 animate-fade-in">
        <div className="text-md sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-200 max-w-2xl">
          I&apos;m a full-stack web developer experienced in building scalable and efficient web applications.
        </div>
      </div>
      {/* Download CV Button */}
      <div className="flex justify-center mt-4 animate-fade-in">
        <a
          href={CVURL}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
        >
          <IconDownload className="w-5 h-5" />
          Download CV
        </a>
      </div>
      {/* Social Links */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 animate-fade-in">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-b from-purple-600 to-purple-800 hover:scale-110 hover:shadow-2xl transition-all duration-200 text-white text-2xl shadow-lg"
            aria-label={`Link to ${social.href}`}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </BackgroundLines>
  );
}

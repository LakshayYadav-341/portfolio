"use client";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";
import { WavyBackground } from "./ui/wavy-background";
import React from "react";

export function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      className="h-[400vh] bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip transition-colors duration-300"
      ref={ref}
    >
      <GoogleGeminiEffect
        title="Contact Me"
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <GoogleGeminiEffectDemo />
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
        <BackgroundGradient />
        <WavyBackground className="transition-colors duration-300">
          <ContactContainer>
            <ContactForm onSubmit={handleSubmit} />
          </ContactContainer>
        </WavyBackground>
      </div>
    </>
  );
}

const BackgroundGradient = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="absolute inset-0 overflow-hidden pointer-events-none"
  >
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r 
          from-blue-300 via-purple-300 to-pink-300 
          dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 
          blur-3xl opacity-20 dark:opacity-30 animate-pulse
          transition-colors duration-300" />
      </div>
    </div>
  </motion.div>
);

const ContactContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative w-full max-w-xl mx-auto rounded-xl p-8 
      bg-white/80 dark:bg-slate-900/80 
      text-slate-900 dark:text-slate-50
      backdrop-blur-xl 
      border border-slate-200 dark:border-slate-700
      shadow-lg dark:shadow-slate-900/50
      transition-colors duration-300"
  >
    {children}
  </motion.div>
);

const ContactForm: React.FC<{ onSubmit: (e: React.FormEvent<HTMLFormElement>) => void }> = ({ onSubmit }) => (
  <motion.form
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    onSubmit={onSubmit}
    className="mt-8 space-y-6"
  >
    <FormField id="firstName" label="First Name" type="text" placeholder="John" />
    <FormField id="lastName" label="Last Name" type="text" placeholder="Doe" />
    <FormField id="email" label="Email Address" type="email" placeholder="john@example.com" />
    <FormField id="message" label="Message" type="textarea" placeholder="How can I help you?" />
    <SubmitButton />
  </motion.form>
);

const FormField: React.FC<{
  id: string;
  label: string;
  type: string;
  placeholder: string;
}> = ({ id, label, type, placeholder }) => (
  <div className="space-y-2">
    <label
      htmlFor={id}
      className="text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors duration-300"
    >
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        placeholder={placeholder}
        className="w-full min-h-[100px] p-4 text-base rounded-lg resize-y 
          bg-white dark:bg-slate-800
          text-slate-900 dark:text-slate-50
          placeholder:text-slate-400 dark:placeholder:text-slate-500
          border border-slate-200 dark:border-slate-700
          focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-500
          transition-colors duration-300"
      />
    ) : (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full h-12 px-4 rounded-lg
          bg-white dark:bg-slate-800
          text-slate-900 dark:text-slate-50
          placeholder:text-slate-400 dark:placeholder:text-slate-500
          border border-slate-200 dark:border-slate-700
          focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-500
          transition-colors duration-300"
      />
    )}
  </div>
);

const SubmitButton = () => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    type="submit"
    className="w-full h-12 rounded-lg 
      bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600
      text-white font-medium 
      shadow-lg shadow-purple-500/20 dark:shadow-purple-900/30
      hover:from-purple-600 hover:to-pink-600 dark:hover:from-purple-700 dark:hover:to-pink-700
      transition-all duration-300"
  >
    Send Message →
  </motion.button>
);
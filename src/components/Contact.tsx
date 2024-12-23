"use client";
import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";

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
      className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
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

import React from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "./ui/wavy-background";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <GoogleGeminiEffectDemo />
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground">
        <BackgroundGradient />
        <WavyBackground>
          <ContactContainer>
            {/* <ContactHeader title="Contact Me" /> */}
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
          from-primary via-accent to-secondary blur-3xl 
          dark:from-secondary dark:via-accent dark:to-primary opacity-20 animate-pulse" />
      </div>
    </div>
  </motion.div>
);

const ContactContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative w-full max-w-xl mx-auto rounded-lg p-8 bg-card text-card-foreground 
      backdrop-blur-xl border border-border shadow-md dark:bg-black/30 dark:border-neutral-700"
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
      className="text-sm font-medium text-muted-foreground dark:text-muted-foreground"
    >
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        placeholder={placeholder}
        className="w-full min-h-[100px] p-4 text-base rounded-lg resize-y bg-input text-foreground 
          placeholder:text-muted-foreground border border-border 
          dark:bg-black/30 dark:text-white dark:placeholder:text-muted-foreground dark:border-neutral-700 
          focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary"
      />
    ) : (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full h-12 px-4 rounded-lg bg-input text-foreground 
          placeholder:text-muted-foreground border border-border 
          dark:bg-black/30 dark:text-white dark:placeholder:text-muted-foreground dark:border-neutral-700 
          focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary"
      />
    )}
  </div>
);

const SubmitButton = () => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    type="submit"
    className="w-full h-12 rounded-lg bg-primary text-primary-foreground 
      hover:bg-accent dark:bg-secondary dark:text-secondary-foreground 
      dark:hover:bg-primary font-medium shadow-lg"
  >
    Send Message →
  </motion.button>
);

"use client";
import { motion } from "framer-motion";
import React from "react";


export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <div id="contact" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300">

          <ContactContainer>
            <ContactForm onSubmit={handleSubmit} />
          </ContactContainer>
      </div>
    </>
  );
}

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
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Rubik } from "next/font/google";
import ThemeToggleSticky from "../components/ThemeToggleSticky";
import AnimatedBackground from "../components/ui/animated-background";

const rubik =  Rubik({
  subsets: ['latin'],
  weight: ['400']
})

export const metadata: Metadata = {
  title: "Lakshay Yadav",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning style={{ colorScheme: "light dark" }}>
      <body
        className={`${rubik.className} antialiased`}
      >
        <AnimatedBackground />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          {/* Theme Toggle Button - sticky at bottom center */}
          <ThemeToggleSticky />
        </ThemeProvider>
      </body>
    </html>
  );
}

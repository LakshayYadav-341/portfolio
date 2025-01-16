import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Rubik } from "next/font/google";

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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Rajkumar Khatua's Portfolio Site | Software Engineer | Full Stack Developer",
  description:
    "Rajkumar Khatua's Portfolio Site | Software Engineer | Full Stack Developer, I am a Full Stack Developer with 5+ years of experience in building web applications using JavaScript, React, Node.js, Express.js, MongoDB, and other technologies. I am passionate about building scalable, performant, and user-friendly web applications. I am always eager to learn new technologies and improve my skills. I am looking for opportunities to work on challenging projects and grow as a developer. I am open to both full-time and freelance opportunities. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import Navbar04 from "../components/navbar-04/navbar-04";
import { AnimatedGridPattern } from "../components/magicui/animated-grid-pattern";

export const metadata: Metadata = {
  title: "Shantanu Saha | Portfolio",
  description: "My Software Engineer Portfolio built with Next.js, TS, Tailwind, and shadcn/ui",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative bg-gray-950 text-gray-100 overflow-x-hidden">
        {/* Animated background */}
        <AnimatedGridPattern className="z-0" />
        {/* Content above background */}
        <div className="relative z-10">
          <Navbar04 />
          <main className="min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}
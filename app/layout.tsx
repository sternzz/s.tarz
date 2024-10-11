import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { Urbanist } from "next/font/google";
import Bga from "@/components/others/Bga";

const font = Urbanist({
  weight: ["200", "300", "400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S. Tarun",
  description: "Hi I'm Tarun, A student and a self taught web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-gradient-to-br from-black to-neutral-900  text-white p-4 lg:p-0 min-h-screen`}
      >
        <Navbar />
        <Bga/>
        <main className="max-w-screen-sm mx-auto">{children}</main>
      </body>
    </html>
  );
}

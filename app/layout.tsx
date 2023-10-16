import { ReactNode } from "react";
import { BackButton } from "./components/client";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CampusBuddy",
  description:
    "Campus buddy is an all-in-one solution for providing common services to college and university students.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <main className="bg-gradient-to-b from-indigo-500 to-neutral-800 p-9 box-border text-white">
          <BackButton />
          <div className="h-full flex flex-col justify-center">{children}</div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

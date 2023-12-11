import { Metadata } from "next";
import { ReactNode } from "react";
import { BackButton } from "./components/client/back-button";
import "./globals.css";

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
      <body className="flex flex-col bg-gradient-to-b from-indigo-500 to-neutral-800 p-8 box-border text-white">
        <BackButton />
        <main className="overflow-auto">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

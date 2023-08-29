import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CampusBuddy",
  description:
    "Campus buddy is an all-in-one solution for providing common services to college and university students.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="bg-gradient-to-b from-indigo-500 to-neutral-800 h-screen flex flex-col justify-center p-9 box-border text-white">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

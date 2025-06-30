import type { Metadata } from "next";
import { Josefin_Sans, Cinzel } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suryakant | Portfolio",
  description: "Hi, I'm Suryakant. I am a Frontend Developer. this is my portfolio. where you can explore my projects, blogs and skills and my learning journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.variable} ${cinzel.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

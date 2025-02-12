import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <Head>
        <meta name="robots" content="index, follow" /> 
      </Head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-indigo-800  dark:bg-[url(https://png.pngtree.com/background/20240414/original/pngtree-d-illustration-of-nfts-featuring-non-fungible-tokens-crypto-art-in-picture-image_8495603.jpg)]
         bg-no-repeat bg-cover bg-blend-color-burn bg-local bg-center-top-[5rem]`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

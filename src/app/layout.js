import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-[#fefffe] to-[#ffffff]`}>

      <Navbar />



        {/* Children Content */}
        <div className="container mx-auto px-4 py-6">
          {children}
        </div>


        <footer className="bg-white shadow-sm m-0 w-full dark:bg-gray-800 mt-auto">
          <div className="w-full mx-auto max-w-screen-xl p-6 md:flex md:items-center md:justify-between">
            <div className="text-lg font-semibold text-gray-800 dark:text-white">
              <h2>CONTACTS</h2>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>
                  <strong>Website:</strong>
                  <a href="https://inspirenextglobal.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">https://inspirenextglobal.com</a>
                </li>
                <li>
                  <strong>Telephone No:</strong> 02-8538-2054 / 02-77509605 / +639946529009
                </li>
                <li>
                  <strong>Email:</strong>
                  <a href="mailto:info@inspirenextglobal.com" className="hover:text-blue-500">info@inspirenextglobal.com</a>
                </li>
                <li>
                  <strong>Facebook:</strong> <a href="https://www.facebook.com/InspireNextGlobalInc" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Inspire Next Global Inc.</a>
                </li>
                <li>
                  <strong>Instagram:</strong> <a href="https://www.instagram.com/inspire.next.global.inc" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">@inspire.next.global.inc</a>
                </li>
                <li>
                  <strong>TikTok:</strong> <a href="https://www.tiktok.com/@inspre.next.glob" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">@inspre.next.glob</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center text:center md:justify-between">
            <span className="text-sm text-gray-500 text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { BsChevronUp } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
// import Footer from "@/components/Footer";
import TalktoModel from "@/components/TalktoModel";
import Footer from "@/components/Footer";
import Head from "next/head";
import GoogleTagManagerScript from "@/components/GoogleTagManager";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Online Printing Services | Custom Printing - Printo",
  description: "VigoCamp is an all-in-one cloud-based school ERP with features like e-learning, attendance, fees, transport tracking, and more—streamline your campus operations easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Head>
        {/* <meta name="google-site-verification" content="vSvmovjag6rOQnjCD_FZT-hUnnXGJF1efOn-RCRrSRM" /> */}
        <meta name="google-site-verification" content="xK-w-qd9d2Agt77TkFngqrNs_Fuac_haGraWt3kfByA" />
      </Head>
      <GoogleTagManagerScript />
       
        <main className="">
        {children} 
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WTQLNQX7"
            height="0"
            width="0"
            style={{
              display: 'none',
              visibility: 'hidden',
            }}
          ></iframe>
        </noscript>

        <TalktoModel />

        <Footer />
        <div className="text-sm font-semibold  border-t border-gray-400 py-4 flex justify-center bg-primary font-nunito  ">
          {/* <div className="md:flex block justify-between 2xl:w-2/3 xl:w-4/5 sm:px-0 px-2 md:gap-8 md:space-y-0 space-y-5 items-start font-nunito text-sm mx-auto"> */}
            {/* <ul className="flex gap-2 md:w-1/2 w-11/12 flex-wrap md:text-left xl:justify-start justify-center text-white/80">
              <li className="hover:text-white "><Link href="/privacy-policy">Privacy Policy &nbsp;&nbsp; |</Link></li>
              <li className="hover:text-white ">Disclaimer &nbsp;&nbsp;|</li>
              <li className="hover:text-white "><Link href="/terms-conditions">Terms and Conditions&nbsp;&nbsp;|</Link></li>
              <li className="hover:text-white ">Standard Policies</li>
            </ul> */}
            <p className="md:w-1/2 w-11/12 flex justify-center  flex-wrap md:text-right text-center text-white/80 hover:text-white ">Copyright © 2008-2025 vigorousit.com, All Rights Reserved.</p></div>
        {/* </div> */}

        {/* social icon */}
        <div className="xl:hidden block">
          <div className="fixed whatsapp_icon_fix md:bottom-40 bottom-36 md:left-8 left-2 animate-pulse z-[999]">
            <Link passHref={true} href="tel:+918209514612" title="Call"
              target="_blank" >
              <div className="bg-[#25d366] w-[40px] h-[40px] flex items-center justify-center rounded-full text-white pulse cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="white" d="M391 480c-19.52 0-46.94-7.06-88-30c-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21c4.95-2.23 12.45-5.6 21.95-2c6.34 2.38 12 7.25 20.86 16c18.17 17.92 43 57.83 52.16 77.43c6.15 13.21 10.22 21.93 10.23 31.71c0 11.45-5.76 20.28-12.75 29.81c-1.31 1.79-2.61 3.5-3.87 5.16c-7.61 10-9.28 12.89-8.18 18.05c2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47c1.48-1.13 3-2.3 4.59-3.47c10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18c18 9.08 59.11 33.59 77.14 51.78c8.77 8.84 13.66 14.48 16.05 20.81c3.6 9.53.21 17-2 22c-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 0 1 391 480Z" /></svg>
              </div>
            </Link>
          </div>
          <div className="fixed whatsapp_icon_fix  md:bottom-24 bottom-20 md:left-8 left-2 z-[999]">
            <Link passHref={true} href="https://teams.microsoft.com/l/chat/0/0?users=nihal.vigorous@gmail.com" title="skype"
              target="_blank" >
              <div className=" w-[52px] h-[55px] flex items-center justify-center rounded-full text-white pulse cursor-pointer animate-pulse">
               <Image src="/images/teams.webp" alt="" width={40} height={30}/>
              </div>
            </Link>
          </div>
          <div className="fixed whatsapp_icon_fix md:bottom-8 bottom-4 md:left-8 left-2 z-[999] animate-pulse">
            <Link passHref={true} href="https://api.whatsapp.com/send?phone=918209514612" title="Whatsapp"
              target="_blank" >
              <div className="bg-[#25d366] w-[40px] h-[40px] flex items-center justify-center rounded-full text-white pulse cursor-pointer">
                <svg focusable="false" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path>
                </svg>
                <i className="bi bi-whatsapp"></i>
              </div>
            </Link>
          </div>
          
        </div>
      </main>
      </body>
    </html>
  );
}

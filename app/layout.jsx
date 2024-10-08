import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import data from "../data.json";
import Hue from "./components/hue";


const username = process.env.GITHUB_USERNAME || data.githubUsername;
const displayName = data.displayName || username;

/** @type {import('next').Metadata} */
export const metadata = {
  title: {
    default: [username, "'s portfolio"].join(""),
    template: "%s | " + data.displayName + "'s portfolio",
  },
  description: "GitHub portfolio for " + displayName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    {
      url: "/favicon.ico",
      rel: "icon",
      sizes: "any",
      type: "image/svg+xml",
    },
  ],
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});
const PPNeueMontreal = LocalFont({
  src: "../public/fonts/PPNeueMontreal-Thin.woff2",
  variable: "--font-PPNeueMontrealSans",
});
const PPNeueMontrealSemibold = LocalFont({
  src: "../public/fonts/PPNeueMontreal-SemiBold.woff2",
  variable: "--font-PPNeueMontrealSemiBold",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'>
        <head className={[
        inter.variable,
        calSans.variable,
        PPNeueMontreal.variable,
        PPNeueMontrealSemibold.variable,
      ].join(" ")}></head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }`}>
        <div className='absolute top-0 left-0 right-0 bottom-0 max-h-screen max-w-screen opacity-60 -z-10 border-black border-solid border-[20px]'>
          <Hue />
        </div>
        {children}
      </body>
    </html>
  );
}

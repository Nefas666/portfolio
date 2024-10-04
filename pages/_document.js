// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import data from "../data.json";


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

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

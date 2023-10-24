import { Metadata } from 'next';
import localFont from 'next/font/local';
import { Partytown } from '@builder.io/partytown/react';

import '../styles/globals.css';
// import { PHProvider } from './providers';

const fontSans = localFont({
  src: './../assets/fonts/Satoshi-Variable.woff2',
  variable: '--font-sans',
});

const title = 'Magic Write';
const description = 'Get professionally written bullet points in seconds.';

export const metadata: Metadata = {
  metadataBase: new URL('https://magic-write.vercel.app'),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontSans.className}>
      <head>
        <Partytown debug={false} forward={['dataLayer.push']} />
        <script src="https://cdn.splitbee.io/sb.js" type="text/partytown" />
      </head>

      {/* <PHProvider>
        <body>{children}</body>
      </PHProvider> */}

      <body>{children}</body>
    </html>
  );
}

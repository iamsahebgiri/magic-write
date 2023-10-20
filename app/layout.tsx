import localFont from 'next/font/local';
import { Metadata } from 'next';

import '../styles/globals.css';
import { PHProvider } from './providers';

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
      <PHProvider>
        <body>{children}</body>
      </PHProvider>
    </html>
  );
}

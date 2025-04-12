
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {ErrorBoundary} from 'react-error-boundary';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pritish: Portfolio',
  description: 'made with love by pritish',
  // If you want to change the favicon, replace "favicon.ico" with your favicon file in the public directory
  // and update the href below.
  icons: ['/favicon.png'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ErrorBoundary fallback={<div>Something went wrong!</div>}>
        {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}


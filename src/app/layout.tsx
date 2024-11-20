import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import { getGlobalPageData, getGlobalPageMetadata } from '@/data/loaders';
import { Header } from '@/components/custom/Header';
import { Footer } from '@/components/custom/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getGlobalPageMetadata();

  return {
    title: metadata?.data?.title ?? 'Epic Next Course',
    description: metadata?.data?.description ?? 'Epic Next Course',
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalPageData = await getGlobalPageData();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header data={globalPageData?.data?.header} />
        {children}
        <Footer data={globalPageData?.data?.footer} />
      </body>
    </html>
  );
}

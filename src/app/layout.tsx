import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
import './globals.css';
import MainLayout from './main-layout';
const publicSans = Public_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-public-sans',
});

export const metadata: Metadata = {
  title: 'DevEase',
  description: 'Ease development process',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='light'>
      <body
        className={`${publicSans.variable} antialiased dark:bg-backgroundDark dark:text-foregroundDark bg-background text-foreground`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

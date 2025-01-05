import type { Metadata } from 'next';
import { Public_Sans, Roboto_Mono } from 'next/font/google';
import './globals.css';
import MainLayout from './main.layout';
import { appConfig } from '@/common/constants';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';

const publicSans = Public_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-public-sans',
  subsets: ['latin'],
});
const robotoMono = Roboto_Mono({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: appConfig.pageTitle,
  applicationName: appConfig.name,
  description: appConfig.description,
  keywords: appConfig.keywords,
  creator: appConfig.creator,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${publicSans.variable} ${robotoMono.variable} antialiased dark:bg-backgroundDark dark:text-foregroundDark bg-background text-foreground overflow-x-hidden`}
      >
        <MainLayout>{children}</MainLayout>
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? ''}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

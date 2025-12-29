import type { Metadata } from 'next';
import { Public_Sans, Roboto_Mono } from 'next/font/google';
import './globals.css';
import MainLayout from './main.layout';
import { appConfig } from '@/common/constants';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import ogImage from './cover.png';
import { Toaster } from 'sonner';

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
  metadataBase: new URL(appConfig.url),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    images: [{ url: ogImage.src, width: 1200, height: 640 }],
    type: 'website',
    siteName: appConfig.name,
    title: appConfig.pageTitle,
    description: appConfig.description,
    url: appConfig.url,
  },
  twitter: {
    card: 'summary_large_image',
    site: 'devease.app',
    creator: '@mgoyal98',
    images: [{ url: ogImage.src, width: 1200, height: 640 }],
    title: appConfig.pageTitle,
    description: appConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='apple-mobile-web-app-title' content={appConfig.name} />
      </head>
      <body
        className={`${publicSans.variable} ${robotoMono.variable} antialiased dark:bg-backgroundDark dark:text-foregroundDark bg-background text-foreground overflow-x-hidden`}
      >
        <MainLayout>{children}</MainLayout>
        <Toaster richColors />
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? ''}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import './globals.css';
import { primary } from '@/fonts';
import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { Toaster } from '@/components/ui/sonner';
import dynamic from 'next/dynamic';
import { draftMode } from 'next/headers';
import { token } from '@/backend/sanity/client';
import { Layout } from './(layout)';
import Script from 'next/script';
import { GOOGLE_ANALYTICS_SCRIPT } from '@/scripts/google-analytics-script';

const PreviewProvider = dynamic(() => import('@/components/preview-provider'));

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preconnect */}
        <link rel="preconnect" href="https://cdn.sanity.io" />

        {/* https://developers.google.com/recaptcha/docs/loading#using_resource_hints */}
        <link rel="preconnect" href="https://www.google.com" />
        <link
          rel="preconnect"
          href="https://www.gstatic.com"
          crossOrigin={'anonymous'}
        />
      </head>
      <body className={clsx(primary.variable, 'font-primary')}>
        {draftMode().isEnabled ? (
          <PreviewProvider token={token}>
            <Layout>{children}</Layout>
          </PreviewProvider>
        ) : (
          <Layout>{children}</Layout>
        )}
        <Toaster />
      </body>

      {/* GA4 script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_G_ANALYTICS_TAG}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga4"
        dangerouslySetInnerHTML={{
          __html: GOOGLE_ANALYTICS_SCRIPT,
        }}
      />

      {/* reCaptcha */}
      <Script
        id="google-reCaptcha"
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />
    </html>
  );
}

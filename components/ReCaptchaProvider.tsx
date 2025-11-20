'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { ReactNode } from 'react';

export default function ReCaptchaProvider({ children }: { children: ReactNode }) {
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  // If no site key is configured, just render children without reCAPTCHA
  if (!recaptchaSiteKey) {
    console.warn('reCAPTCHA site key not configured. Contact form will work without spam protection.');
    return <>{children}</>;
  }

  return (
    <GoogleReCaptchaProvider 
      reCaptchaKey={recaptchaSiteKey}
      scriptProps={{
        async: true,
        defer: true,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}


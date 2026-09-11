import type { Metadata } from 'next';
import Script from 'next/script';
import 'aos/dist/aos.css';
import './styles.css';
import ClientInit from '@/components/ClientInit';

export const metadata: Metadata = {
  title: 'Studiova',
  description: 'We create high-performing digital designs that elevate brands and enhance conversions.',
  icons: { icon: '/assets/images/logos/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ClientInit />
        <Script src="https://cdn.jsdelivr.net/npm/iconify-icon@1.0.8/dist/iconify-icon.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

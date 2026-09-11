import type { Metadata } from 'next';
import Script from 'next/script';
import 'aos/dist/aos.css';
import './styles.css';
import ClientInit from '@/components/ClientInit';

export const metadata: Metadata = {
  title: 'Maria Fernanda | Web Designer',
  description: 'Sites e landing pages que transformam visitantes em clientes. Web design com foco em resultado.',
  icons: { icon: '/assets/images/logos/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <ClientInit />
        <Script src="https://cdn.jsdelivr.net/npm/iconify-icon@1.0.8/dist/iconify-icon.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

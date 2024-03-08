import { Footer, Header } from '@/components/layout';
import roboto from '@/assets/fonts/fonts';
import type { Metadata } from 'next';
import './globalStyles.css';

export const metadata: Metadata = {
  title: 'MovieR',
  description: 'View data about movies you interested in',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

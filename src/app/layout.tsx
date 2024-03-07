import roboto from '@/app/assets/fonts/fonts';
import Header from './components/Header';
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
      </body>
    </html>
  );
}

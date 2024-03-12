import { Footer, Header } from '@/components/layout';
import roboto from '@/assets/fonts/fonts';
import type { Metadata } from 'next';
import './globalStyles.css';

export const metadata: Metadata = {
  title: 'MovieR',
  description: 'View data about movies you interested in',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <body className={roboto.className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;

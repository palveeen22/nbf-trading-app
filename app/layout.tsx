import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/widgets/Navbar';
import { Footer } from '@/widgets/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NBF TRADING SYSTEM - Connecting Markets, Delivering Excellence',
  description: 'Leading wholesale distributor in Indonesia specializing in rice, coffee, textiles, electronics, and agricultural equipment across Asian markets.',
  keywords: 'wholesale distribution, Indonesia trading, Asian markets, rice distribution, coffee trading, textiles, electronics, agricultural equipment',
  authors: [{ name: 'NBF TRADING SYSTEM' }],
  openGraph: {
    title: 'NBF TRADING SYSTEM',
    description: 'Connecting Markets, Delivering Excellence',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

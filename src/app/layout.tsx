import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/context/cart-provider';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: {
    default: 'Green Bridge - Sustainable and stylish eco-friendly products.',
    template: '%s | Green Bridge',
  },
  description: 'Discover curated eco-friendly products that are good for you and the planet. Live sustainably, beautifully.',
  keywords: ['eco-friendly', 'sustainable', 'recycled', 'biodegradable', 'organic', 'zero-waste'],
  openGraph: {
    title: 'Green Bridge',
    description: 'Sustainable and stylish eco-friendly products.',
    url: 'https://your-domain.com', // TODO: Replace with actual domain
    siteName: 'Green Bridge',
    images: [
      {
        url: 'https://placehold.co/1200x630.png', // TODO: Replace with actual OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Green Bridge',
    description: 'Sustainable and stylish eco-friendly products.',
     images: ['https://placehold.co/1200x630.png'], // TODO: Replace with actual Twitter image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya&family=Belleza&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <CartProvider>
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}

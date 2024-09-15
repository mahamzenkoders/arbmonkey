'use client';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/providers';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const newpath = usePathname();
  const authPage = newpath == '/login' || newpath == '/';
  console.log(newpath);
  return (
    <html lang='en'>
      <body className={`${inter.className} flex items-center`}>
        <main className='w-full h-screen'>
          {!authPage && <Sidebar />}
          <div className='h-screen w-full'>
            {!authPage && <Header />}
            <Providers>{children}</Providers>
            {!authPage && <Footer />}
          </div>
        </main>
      </body>
    </html>
  );
}

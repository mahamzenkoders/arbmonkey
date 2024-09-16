import Footer from '@/components/footer';
import Header from '@/components/header';
import Sidebar from '@/components/Sidebar';
import { Inter } from 'next/font/google';
import { Providers } from '@/providers';

const inter = Inter({ subsets: ['latin'] });

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='w-full h-screen'>
      <Sidebar />
      <div className='h-screen w-full'>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </div>
    </main>
  );
}

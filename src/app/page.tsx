import Footer from '@/components/footer';
import HeroSection from '@/components/HeroSection';
import HomeCard from '@/components/HomeCard';
import TopBettinglines from '@/components/topBettinglines';

export default function Home() {
  return (
    <main className='bg-gray-50 w-full h-full'>
      <HeroSection />
      <HomeCard />
      <TopBettinglines />
      <Footer />
    </main>
  );
}

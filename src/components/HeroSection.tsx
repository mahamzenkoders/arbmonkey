import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
import HomeBg from '../../public/assets/images/homebg.png';

const HeroSection = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className='absolute bottom-0 right-0 w-[500px] h-[600px] sm:w-[700px] sm:h-[800px] md:w-[900px] md:h-[1000px] bg-purple-300 rounded-full blur-[150px]'></div>

      <div
        className='absolute top-0 right-[-10%] sm:right-[-5%] w-[400px] h-[400px] sm:w-[600px] sm:h-[500px] md:w-[800px] md:h-[600px] bg-purple-400 
        rounded-[45%] transform rotate-45 animate-spin-slow z-0'
      ></div>

      <div
        className='absolute top-[10%] right-[-10%] sm:right-[-5%] w-[300px] h-[300px] sm:w-[800px] sm:h-[500px] md:w-[1000px] md:h-[650px] bg-purple-500 
        rounded-[55%] transform rotate-45 animate-spin-and-color-change z-0'
      ></div>

      <div className='relative z-10 p-6 md:p-20 flex flex-col md:flex-row justify-between'>
        <div>
          <span className='text-3xl md:text-4xl font-bold'>ARB</span>
          <span className='text-3xl md:text-4xl text-purple-500 font-medium font-hacked'>
            Monkey
          </span>
        </div>
        <div className='mt-6 md:mt-0'>
          <Link href='/dashboard/courses'>
            <Button className='p-5 md:p-7 px-6 h-14 md:h-16 text-lg md:text-xl text-black bg-white border-none hover:bg-purple-200'>
              Dashboard
            </Button>
          </Link>
        </div>
      </div>

      <div className='relative z-10 p-6 md:p-20 flex flex-col md:flex-row justify-between'>
        <div>
          <div>
            <h1 className='text-3xl md:text-5xl font-bold text-blue-950 leading-relaxed'>
              The Sports Betting
              <br />
              Hack. Betting Tools
              <br />
              That Secure Profits.
            </h1>
            <h1 className='text-lg md:text-2xl text-gray-400 mt-3'>
              We offer a course that will show you how to hedge
              <br />
              bets to guarantee profit. Once you're confident, use
              <br /> our live pre-match line calculators to secure your
              <br />
              profits.
            </h1>
            <Button
              className='text-white bg-purple-400 hover:bg-purple-700 mt-6 md:mt-9 p-5 md:p-7 text-lg md:text-xl'
              variant='outline'
            >
              Start Your Free Trial
            </Button>
            <div className='flex flex-col mt-6 md:mt-8'>
              <div className='flex mb-2'>
                <h1 className='text-2xl md:text-4xl text-blue-950 font-semibold mr-2'>
                  Earn your money back
                </h1>
                <span className='text-purple-400 text-2xl md:text-4xl font-semibold'>
                  AND MORE
                </span>
              </div>
              <h1 className='text-2xl md:text-4xl text-blue-950 font-semibold'>
                after your very first bet!
              </h1>
            </div>
            <Button
              className='bg-black text-white mt-6 md:mt-8 p-4 md:p-6 text-lg md:text-xl'
              variant='outline'
            >
              How It Works?
            </Button>
          </div>
        </div>

        <div className='hidden md:block'>
          <Image
            src={HomeBg}
            height={400}
            width={900}
            alt='Background Image'
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

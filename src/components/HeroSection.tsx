import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import BackgroundImage from '../../public/assets/images/homebg.png';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className='absolute bottom-0 right-0 w-[900px] h-[900px] bg-purple-300 rounded-full blur-[150px]'></div>

      <div className='relative z-10 flex justify-between p-20'>
        <div>
          <span className='text-4xl font-bold'>ARB</span>
          <span className='text-4xl text-purple-500 font-medium font-hacked'>
            Monkey
          </span>
        </div>
        <div>
          <Link href='/courses'>
            <Button className='p-7 px-6 h-16 text-xl text-black bg-white border-none hover:bg-purple-200'>
              Dashboard
            </Button>
          </Link>
        </div>
      </div>

      <div className='relative z-10 flex justify-between'>
        <div>
          <div className='p-20'>
            <h1 className='text-5xl font-bold text-blue-950 leading-relaxed'>
              The Sports Betting
              <br />
              Hack. Betting Tools
              <br />
              That Secure Profits.
            </h1>
            <h1 className='text-2xl text-gray-400 mt-3'>
              We offer a course that will show you how to hedge
              <br />
              bets to guarantee profit. Once you&apos;re confident, use
              <br /> our live pre-match line calculators to secure your
              <br />
              profits.
            </h1>
            <Button
              className='text-white bg-purple-400 hover:bg-purple-700 mt-9 p-7 text-xl'
              variant='outline'
            >
              Start Your Free Trial
            </Button>
            <div className='flex flex-col mt-8'>
              <div className='flex mb-2'>
                <h1 className='text-4xl text-blue-950 font-semibold mr-2'>
                  Earn your money back
                </h1>
                <span className='text-purple-400 text-4xl font-semibold'>
                  AND MORE
                </span>
              </div>
              <h1 className='text-4xl text-blue-950 font-semibold'>
                after your very first bet!
              </h1>
            </div>
            <Button
              className='bg-black text-white mt-8 p-6 text-xl'
              variant='outline'
            >
              How It Works?
            </Button>
          </div>
        </div>

        <div className='sm:block hidden'>
          <Image
            src={BackgroundImage}
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

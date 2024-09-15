import React from 'react';
import { Card, CardContent } from './ui/card';
import BetMGM from '../../public/assets/images/BetMgm.png';
import SportsBook from '../../public/assets/images/CaesarsSportsbook.png';
import FanDuel from '../../public/assets/images/FanDuel.png';
import Image from 'next/image';
import { Button } from './ui/button';

const HomeCard = () => {
  return (
    <div className='bg-myColor min-h-screen'>
      <div className='flex justify-center text-blue-950 font-bold pt-10'>
        <h1 className='text-2xl sm:text-4xl lg:text-6xl text-center'>
          Use These Promotions To Guarantee Profits!
        </h1>
      </div>
      <div className='flex justify-center my-6 sm:my-9'>
        <h1 className='text-xl sm:text-2xl lg:text-4xl text-gray-400 font-bold text-center'>
          We Show You How To Do It.
        </h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-12'>
        <Card className='max-w-sm mx-auto bg-gray-50 rounded p-4 shadow-lg'>
          <CardContent>
            <div className='flex justify-center'>
              <div className='mr-4'>
                <Image
                  src={BetMGM}
                  className='w-20 sm:w-40 lg:w-56'
                  width={200}
                  height={200}
                  alt='BetMGM Logo'
                />
              </div>
              <div>
                <h1 className='text-xl sm:text-3xl lg:text-5xl leading-snug'>
                  BetMGM
                </h1>
                <h1 className='text-lg sm:text-xl lg:text-2xl'>
                  $1.5k Risk Free
                </h1>
              </div>
            </div>
            <div className='flex mt-5 justify-center'>
              <Button className='bg-purple-400 p-4 sm:p-6 text-white text-lg sm:text-2xl hover:bg-white hover:text-purple-700'>
                Claim Promotion
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className='max-w-sm mx-auto bg-gray-50 rounded p-4 shadow-lg'>
          <CardContent>
            <div className='flex justify-center'>
              <div className='mr-4'>
                <Image
                  src={FanDuel}
                  className='w-20 sm:w-36 lg:w-48'
                  width={200}
                  height={200}
                  alt='FanDuel Logo'
                />
              </div>
              <div>
                <h1 className='text-xl sm:text-3xl lg:text-5xl leading-snug'>
                  Fanduel
                </h1>
                <h1 className='text-lg sm:text-xl lg:text-2xl'>
                  $1k Risk Free
                </h1>
              </div>
            </div>
            <div className='flex mt-5 justify-center'>
              <Button className='bg-purple-400 p-4 sm:p-6 text-white text-lg sm:text-2xl hover:bg-white hover:text-purple-700'>
                Claim Promotion
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* SportsBook Card */}
        <Card className='max-w-sm mx-auto bg-gray-50 rounded p-4 shadow-lg'>
          <CardContent>
            <div className='flex justify-center'>
              <Image
                src={SportsBook}
                className='w-48 sm:w-64 lg:w-72'
                width={290}
                height={200}
                alt='Sportsbook Logo'
              />
            </div>
            <div className='flex justify-center mt-4'>
              <h1 className='text-xl sm:text-2xl lg:text-2xl'>
                $1250 Risk Free
              </h1>
            </div>
            <div className='flex mt-5 justify-center'>
              <Button className='bg-purple-400 p-4 sm:p-6 text-white text-lg sm:text-2xl hover:bg-white hover:text-purple-700'>
                Claim Promotion
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomeCard;

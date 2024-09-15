import React from 'react';
import Image from 'next/image';
import homelines from '../../public/assets/images/homeLines.gif';

const TopBettinglines = () => {
  return (
    <div className='py-28 bg-myColor '>
      <div className='flex flex-col items-center'>
        <h1 className='text-5xl text-blue-950 font-semibold text-center'>
          We Search All The Sportsbooks For The Best Possible Lines, So
          <br />
          <div className='text-center'>You Don&apos;t Have To.</div>
        </h1>
        <Image
          src={homelines}
          alt='Betting lines'
          className='mt-4'
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default TopBettinglines;

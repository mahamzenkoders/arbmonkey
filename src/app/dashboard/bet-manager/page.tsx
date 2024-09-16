import BetManagerCard from '@/components/BetManager';
import React from 'react';

const BetManager = () => {
  return (
    <div className='p-10'>
      <div className='bg-slate-50'>
        <div className='flex p-9 pb-6'>
          <h1 className='text-4xl font-medium text-blue-950'>Bet Manager</h1>
        </div>
        <div className='flex pb-6 justify-between p-9 rounded border-t-2 border-gray-200'>
          <h1 className='sm:text-4xl text-2xl text-blue-950'>Total Profit</h1>
          <h1 className='sm:text-4xl text-2xl text-purple-600 font-semibold'>
            $ 250
          </h1>
        </div>
      </div>

      <div className='mt-6 bg-slate-50'>
        <div className='flex p-9'>
          <div>
            <BetManagerCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetManager;

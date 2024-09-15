import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import React from 'react';

const BetManagerCard = () => {
  const activeBets = [
    {
      type: 'Risk Free Bet',
      date: '5/28/2023',
      firstTeamName: 'Green Bay',
      firstTeamNickname: 'Packers',
      firstTeamBetSpread: 'Spread 2.5',
      firstTeamBettingSite: 'BetOnline.ag',
      firstTeamBetAmount: '$100',
      secondTeamName: 'Baltimore',
      secondTeamNickname: 'Chicago Bears',
      secondTeamBetSpread: 'Spread -2.5',
      secondTeamBettingSite: 'SuperBook',
      secondTeamHedgeAmount: '$150',
    },
    {
      type: 'Risk Free Bet',
      date: '5/28/2023',
      firstTeamName: 'Green Bay',
      firstTeamNickname: 'Packers',
      firstTeamBetSpread: 'Spread 2.5',
      firstTeamBettingSite: 'BetOnline.ag',
      firstTeamBetAmount: '$150',
      secondTeamName: 'Baltimore',
      secondTeamNickname: 'Chicago Bears',
      secondTeamBetSpread: 'Spread -2.5',
      secondTeamBettingSite: 'SuperBook',
      secondTeamHedgeAmount: '$170',
    },
    // Add more bets as needed
  ];

  const completedBets = [
    {
      type: 'Completed Bet',
      date: '4/28/2023',
      firstTeamName: 'Los Angeles',
      firstTeamNickname: 'Lakers',
      firstTeamBetSpread: 'Spread 3.5',
      firstTeamBettingSite: 'FanDuel',
      firstTeamBetAmount: '$200',
      secondTeamName: 'Miami',
      secondTeamNickname: 'Heat',
      secondTeamBetSpread: 'Spread -3.5',
      secondTeamBettingSite: 'DraftKings',
      secondTeamHedgeAmount: '$150',
    },
    
  ];

  return (
    <div className='space-y-8'>
      <div>
        <h2 className='text-2xl font-semibold mb-4'>Active Bets</h2>
        <div className='flex flex-wrap gap-6 mt-4'>
          {activeBets.map((bet, index) => (
            <Card
              key={index}
              className='w-full md:w-[450px] lg:w-[600px] h-[360px] border border-gray-300 shadow-lg'
            >
              <CardHeader className='bg-purple-100 rounded-t-lg p-4'>
                <div className='flex justify-between items-center'>
                  <CardTitle className='text-lg font-semibold'>
                    {bet.type}
                  </CardTitle>
                  <CardDescription className='text-sm'>
                    {bet.date}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className='p-4 space-y-4'>
                <div className='mb-2'>
                  <h3 className='font-bold'>{bet.firstTeamName}</h3>
                  <p className='text-gray-600'>{bet.firstTeamNickname}</p>
                  <p className='font-semibold'>{bet.firstTeamBetSpread}</p>
                  <div className='flex justify-between'>
                    <span className='text-sm'>
                      Book: {bet.firstTeamBettingSite}
                    </span>
                    <span className='text-sm'>
                      Amount Bet: {bet.firstTeamBetAmount}
                    </span>
                  </div>
                </div>
                <div className='mb-2'>
                  <h3 className='font-bold'>{bet.secondTeamName}</h3>
                  <p className='text-gray-600'>{bet.secondTeamNickname}</p>
                  <p className='font-semibold'>{bet.secondTeamBetSpread}</p>
                  <div className='flex justify-between'>
                    <span className='text-sm'>
                      Book: {bet.secondTeamBettingSite}
                    </span>
                    <span className='text-sm'>
                      Amount Hedge: {bet.secondTeamHedgeAmount}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className='text-2xl font-semibold mb-4'>Completed Bets</h2>
        <div className='grid grid-cols-1 gap-6'>
          {completedBets.map((bet, index) => (
            <Card
              key={index}
              className='w-full sm:w-[600px] h-[360px] border border-gray-300 shadow-lg'
            >
              <CardHeader className='bg-purple-100 rounded-t-lg p-4'>
                <div className='flex justify-between items-center'>
                  <CardTitle className='text-lg font-semibold'>
                    {bet.type}
                  </CardTitle>
                  <CardDescription className='text-sm'>
                    {bet.date}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className='p-4 space-y-4'>
                <div className='mb-2'>
                  <h3 className='font-bold'>{bet.firstTeamName}</h3>
                  <p className='text-gray-600'>{bet.firstTeamNickname}</p>
                  <p className='font-semibold'>{bet.firstTeamBetSpread}</p>
                  <div className='flex justify-between'>
                    <span className='text-sm'>
                      Book: {bet.firstTeamBettingSite}
                    </span>
                    <span className='text-sm'>
                      Amount Bet: {bet.firstTeamBetAmount}
                    </span>
                  </div>
                </div>
                <div className='mb-2'>
                  <h3 className='font-bold'>{bet.secondTeamName}</h3>
                  <p className='text-gray-600'>{bet.secondTeamNickname}</p>
                  <p className='font-semibold'>{bet.secondTeamBetSpread}</p>
                  <div className='flex justify-between'>
                    <span className='text-sm'>
                      Book: {bet.secondTeamBettingSite}
                    </span>
                    <span className='text-sm'>
                      Amount Hedge: {bet.secondTeamHedgeAmount}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BetManagerCard;

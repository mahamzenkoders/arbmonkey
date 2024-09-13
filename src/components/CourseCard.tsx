'use client';
import React, { useState } from 'react';
import {
  Search,
  HandCoins,
  ChartNoAxesCombined,
  BadgeDollarSign,
  Wallet,
  Landmark,
  Coins,
  ChartCandlestick,
  Ticket,
  Tag,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
const CourseCard = () => {
  const cardData = [
    {
      id: 1,
      title: 'Promotion Rule Course',
      description: 'Learn how to use and find promotions',
      lesson: 'Lesson 1',
      icon: HandCoins,
    },
    {
      id: 2,
      title: 'Reduce Risk Course',
      description: 'Learn how to reduce risk to secure profits',
      lesson: 'Lesson 2',
      icon: ChartNoAxesCombined,
    },
    {
      id: 3,
      title: 'Free Bet Calculator Course',
      description: 'Learn how to use our free bet calculator',
      lesson: 'Lesson 3',
      icon: BadgeDollarSign,
    },
    {
      id: 4,
      title: 'Site Credit Calculator Course',
      description: 'Learn how to use our site credit bet calculator',
      lesson: 'Lesson 4',
      icon: Wallet,
    },
    {
      id: 5,
      title: 'Risk Free Bet Calculator Course',
      description: 'Learn how to use our risk free bet calculator',
      lesson: 'Lesson 5',
      icon: Landmark,
    },
    {
      id: 6,
      title: 'Arbitrage Finder Course',
      description: 'Learn how to use our arbitrage finder',
      lesson: 'Lesson 6',
      icon: Coins,
    },
    {
      id: 7,
      title: 'Qualifying Calculator Course',
      description: 'Learn how to use our qualifying bet calculator',
      lesson: 'Lesson 7',
      icon: ChartCandlestick,
    },
    {
      id: 8,
      title: 'Get More Free Play Course',
      description: 'Learn how to get more free play',
      lesson: 'Lesson 8',
      icon: Tag,
    },
    {
      id: 9,
      title: 'VIP Tickets Course',
      description: 'Learn how to get free VIP tickets',
      lesson: 'Lesson 9',
      icon: Ticket,
    },
  ];

  const [search, setsearch] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsearch(e.target.value.toLowerCase());
  };

  const filteredCourses = cardData.filter(course =>
    course.title.toLowerCase().includes(search),
  );

  return (
    <div className='m-6 flex flex-col'>
      <div>
        <h1 className='text-2xl mx-10'>Courses</h1>
        <p className='text-gray-400 text-sm mt-2 mx-10'>
          Welcome to the courses. Search or click a course below to get started!
        </p>
      </div>
      <div className='mx-9 my-4 search__input border-[2px] border-solid border-slate-100 flex flex-row items-center gap-5 p-1 rounded-[15px]'>
        <input
          type='text'
          id='inputId'
          placeholder='Enter your keywords'
          className='bg-[transparent] outline-none border-none w-full py-3 pl-2 pr-3'
          value={search}
          onChange={handleSearchChange}
        />
        <Search />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-10 mt-4'>
        {filteredCourses?.map(course => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>
                <course.icon className='text-purple-400 h-10 w-10 mt-4' />
              </CardTitle>
              <CardDescription className='text-purple-400 font-medium'>
                {course.lesson}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <h1 className='text-2xl font-bold text-blue-950'>
                  {course.title}
                </h1>
                <p className='text-gray-400 text-sm mt-2'>
                  {course.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;

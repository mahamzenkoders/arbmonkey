'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/assets/images/logo.png';
import Link from 'next/link';
import {
  BookOpenText,
  DollarSign,
  Calculator,
  Users,
  ShieldQuestion,
  ShieldAlert,
  CalendarCheck,
  RotateCcw,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from './ui/button';
import { removeCookie } from '@/utils/storage.util';

const Sidebar = () => {
  const [isSideBar, setIsSideBar] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState<string>('');

  return (
    <div
      className={`transition-all sticky sm:block hidden bg-white float-left duration-300 ease-in-out border-r min-h-screen p-2 ${isSideBar ? 'w-[300px]' : 'w-[80px]'} overflow-hidden`}
    >
      <div
        className={`${isSideBar ? 'flex justify-end' : 'flex justify-center'}`}
      >
        {isSideBar ? (
          <ChevronLeft
            onClick={() => setIsSideBar(false)}
            className='text-white rounded-full mt-5 w-6 bg-gray-800 cursor-pointer'
          />
        ) : (
          <ChevronRight
            onClick={() => setIsSideBar(true)}
            className='text-white rounded-full mt-5 w-6 bg-gray-800 cursor-pointer'
          />
        )}
      </div>
      {isSideBar && (
        <div className='h-full px-3 py-1'>
          <Image
            src={logo}
            height={150}
            width={150}
            alt='Logo'
          />
        </div>
      )}
      <div
        className={`${isSideBar ? 'mt-5 p-2 text-gray-400' : 'mt-5 p-1 text-gray-400'}`}
      >
        <h2 className={`text-gray-900 ${isSideBar ? 'block' : 'hidden'}`}>
          Menu
        </h2>
        <Link href='/courses'>
          <Button
            onClick={() => {
              setIsClicked('courses');
            }}
            className={`mt-3 rounded-full w-full hover:text-purple-400 ${isClicked == 'courses' ? 'text-purple-400' : ''} ${isSideBar ? '' : 'justify-center'}`}
            variant='outline'
          >
            <BookOpenText className={`mr-4  ${!isSideBar ? 'hidden' : ''}`} />
            {isSideBar ? 'Courses' : <BookOpenText />}
          </Button>
        </Link>
        <Link href='/bet-manager'>
          <Button
            onClick={() => {
              setIsClicked('bet-manager');
            }}
            className={`mt-3 rounded-full w-full hover:text-purple-400 ${isClicked == 'bet-manager' ? 'text-purple-400' : ''} ${isSideBar ? '' : 'justify-center'}`}
            variant='outline'
          >
            <DollarSign className={`mr-4 ${!isSideBar ? 'hidden' : ''}`} />
            {isSideBar ? 'Bet Manager' : <DollarSign />}
          </Button>
        </Link>
        <Link href='/hedge-calculator'>
          <Button
            onClick={() => {
              setIsClicked('hedge-calculator');
            }}
            className={`mt-3 rounded-full w-full hover:text-purple-400 ${isClicked == 'hedge-calculator' ? 'text-purple-400' : ''} ${isSideBar ? '' : 'justify-center'}`}
            variant='outline'
          >
            <Calculator className={`mr-4 ${!isSideBar ? 'hidden' : ''}`} />
            {isSideBar ? 'Hedge Calculator' : <Calculator />}
          </Button>
        </Link>
      </div>
      <div
        className={`${isSideBar ? 'mt-5 p-2 text-gray-400' : 'mt-5 p-1 text-gray-400'}`}
      >
        <h2 className={`text-gray-900 ${isSideBar ? 'block' : 'hidden'}`}>
          Utility
        </h2>
        <Link href='/referals'>
          <Button
            onClick={() => {
              setIsClicked('referals');
            }}
            className={`mt-3 rounded-full w-full hover:text-purple-400 ${isClicked == 'referals' ? 'text-purple-400' : ''} ${isSideBar ? '' : 'justify-center'}`}
            variant='outline'
          >
            <Users className={`mr-4 ${!isSideBar ? 'hidden' : ''}`} />
            {isSideBar ? 'Referals' : <Users />}
          </Button>
        </Link>
        <Link href='how-it-works'>
          <Button
            onClick={() => {
              setIsClicked('how-it-works');
            }}
            className={`mt-3 rounded-full w-full hover:text-purple-400 ${isClicked == 'how-it-works' ? 'text-purple-400' : ''} ${isSideBar ? '' : 'justify-center'}`}
            variant='outline'
          >
            <ShieldQuestion className={`mr-4 ${!isSideBar ? 'hidden' : ''}`} />
            {isSideBar ? 'How it works?' : <ShieldQuestion />}
          </Button>
        </Link>
        <Link href='/about-us'>
          <Button
            onClick={() => {
              setIsClicked('about-us');
            }}
            className={`mt-3 rounded-full w-full hover:text-purple-400 ${isClicked == 'about-us' ? 'text-purple-400' : ''} ${isSideBar ? '' : 'justify-center'}`}
            variant='outline'
          >
            <ShieldAlert className={`mr-4 ${!isSideBar ? 'hidden' : ''}`} />
            {isSideBar ? 'About Us' : <ShieldAlert />}
          </Button>
        </Link>
        <Link href='/my-subscriptions'>
          <Button
            onClick={() => {
              setIsClicked('my-subscription');
            }}
            className={`mt-3 rounded-full w-full hover:text-purple-400 ${isClicked == 'my-subscription' ? 'text-purple-400' : ''} ${isSideBar ? '' : 'justify-center'}`}
            variant='outline'
          >
            <CalendarCheck className={`mr-4 ${!isSideBar ? 'hidden' : ''}`} />
            {isSideBar ? 'My Subscriptions' : <CalendarCheck />}
          </Button>
        </Link>
        <Link href='/update-bet-lines'>
          <Button
            onClick={() => {
              setIsClicked('/update-bet-lines');
            }}
            className={`mt-3 rounded-full w-full hover:text-purple-400 ${isClicked == 'update-bet-lines' ? 'text-purple-400' : ''} ${isSideBar ? '' : 'justify-center'}`}
            variant='outline'
          >
            <RotateCcw className={`mr-4 ${!isSideBar ? 'hidden' : ''}`} />
            {isSideBar ? 'Update Bet Lines' : <RotateCcw />}
          </Button>
        </Link>
      </div>
      <div className='mt-10 text-gray-400'>
        <Link href='/login'>
          <Button
            onClick={() => {
              removeCookie('accessToken');
            }}
            className={`mt-3 rounded-full w-full hover:text-purple-400 ${isSideBar ? '' : 'justify-center'}`}
            variant='outline'
          >
            <LogOut className={`mr-4 ${!isSideBar ? 'hidden' : ''}`} />
            {isSideBar ? 'LogOut' : <LogOut />}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

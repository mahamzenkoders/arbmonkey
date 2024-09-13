import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import {
  BookOpenText,
  Calculator,
  CalendarCheck,
  DollarSign,
  RotateCcw,
  ShieldAlert,
  ShieldQuestion,
  Users,
} from 'lucide-react';

const MobileNavItems = () => {
  return (
    <div
      className={`transition-all duration-300 ease-in-out sm:hidden block bg-white p-2 opacity-100 h-auto`}
    >
      <div>
        <h1>Menu</h1>
        <Link href='/courses'>
          <Button>
            <BookOpenText className='mr-2' />
            Courses
          </Button>
        </Link>
        <Link href='/bet-manager'>
          <Button>
            <DollarSign className='mr-2' />
            Bet Manager
          </Button>
        </Link>
        <Link href='/hedge-calculator'>
          <Button>
            <Calculator className='mr-2' />
            Hedge Calculator
          </Button>
        </Link>
      </div>
      <div>
        <h1>Utility</h1>
        <Link href='/referals'>
          <Button>
            <Users className='mr-2' />
            Referals
          </Button>
        </Link>
        <Link href='/how-it-works'>
          <Button>
            <ShieldQuestion className='mr-2' />
            How it works?
          </Button>
        </Link>
        <Link href='/about-us'>
          <Button>
            <ShieldAlert className='mr-2' />
            About Us
          </Button>
        </Link>
        <Link href='/my-subscriptions'>
          <Button>
            <CalendarCheck className='mr-2' />
            My Subscription
          </Button>
        </Link>
        <Link href='/update-bet-lines'>
          <Button>
            <RotateCcw className='mr-2' />
            Update Bet Lines
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavItems;

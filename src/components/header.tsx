import React from 'react';
import logo from '../../public/assets/images/logo.png';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MobileNavBar } from './MobileSideBar';

const Header = () => {
  var date = new Date().toLocaleDateString().split('T')[0];
  return (
    <div className='bg-slate-100'>
      <div className='sm:hidden block'>
        <div className='flex justify-between'>
          <div className='px-3 py-1'>
            <Image
              src={logo}
              height={150}
              width={150}
              alt='Logo'
            />
          </div>
          <MobileNavBar />
        </div>
      </div>

      <div className='sm:block hidden'>
        <div className='flex p-4 justify-between'>
          <div>
            <h1 className='text-2xl'>Welcome, Maham</h1>
            <p className='text-gray-400 text-sm mt-2'>{date}</p>
          </div>
          <div>
            <Avatar>
              <AvatarImage
                src='https://github.com/shadcn.png'
                alt='404'
              />
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

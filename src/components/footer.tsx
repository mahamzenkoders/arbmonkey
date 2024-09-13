import Link from 'next/link';
import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaPhoneAlt,
  FaTiktok,
  FaTwitter,
} from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const Footer: React.FC = () => {
  return (
    <footer className='bg-[#333D58] py-6 text-white'>
      <div className='container mx-auto px-4 '>
        <div className='flex flex-col md:flex-row justify-between items-center pl-8'>
          <div className='flex items-center space-x-2 mb-4 md:mb-0'>
            <span>
              <FaPhoneAlt />
            </span>
            <div>
              <p className='text-sm'>Must be 21+. Gambling problem?</p>
              <p className='font-semibold'>Call 1-800-NEXT-STEP</p>
            </div>
          </div>

          <div className='flex items-center space-x-2 mb-4 md:mb-0'>
            <span>
              <IoIosMail />
            </span>
            <div>
              <p className='text-sm'>Questions? See a Bug?</p>
              <p>
                Email us at{' '}
                <a
                  href='mailto:support@arbmonkey.com'
                  className='font-semibold'
                >
                  support@arbmonkey.com
                </a>
              </p>
            </div>
          </div>

          <div className='flex flex-col items-center space-y-2'>
            <p className='text-xl'>Follow Us</p>
            <div className='flex space-x-4'>
              <span>
                <FaFacebookSquare />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaTiktok />
              </span>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-400 mt-6 pt-4 text-center'>
          <p className='text-sm'>
            &copy; 2023{' '}
            <Link
              href='/'
              className='underline'
            >
              Terms and Conditions
            </Link>{' '}
            and{' '}
            <Link
              href='/'
              className='underline'
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

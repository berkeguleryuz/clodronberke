"use client"
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import TextGradientComponent from '@/components/AnimatedText';

export default function HomePage() {
  var ReactRotatingText = require('react-rotating-text');



  return (
    
    <div id="home" className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
            <h1 className='py-4 text-gray-700'>Hi, We are <span className="text-[#5651e5]"><ReactRotatingText items={['Clodron', 'Your Marketing Partner', 'Your Web Agency']} /></span></h1>
            <TextGradientComponent />
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-dark'>
                <FaLinkedinIn />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

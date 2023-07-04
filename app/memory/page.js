import React from 'react'
import memoryImg from "../../public/projects/memory.png"
import Image from 'next/image';
import { RiRocket2Fill } from "react-icons/ri";
import Link from 'next/link';

const aitopia = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1' 
          src={memoryImg}
          layout='fill' 
          objectFit='cover'
          alt='/'
        />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2' >
            <h2 className='py-2'>Memory App</h2>
            <h3>React</h3>
          </div>
        </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>This app was built using React JS and Next JS. You can visit my profile and check the news. Also you will contact with me for your perfect idea.</p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-cold pb-2'>Technologies</p>
            <div className='grid grid-cols-2 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRocket2Fill className='pr-2' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRocket2Fill className='pr-2' /> Vercel
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects" >
            <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default aitopia;
"use client"
import Image from 'next/image'
import React from 'react'
import AboutImg from '../public/about.jpg'
import { RiRocket2Fill } from "react-icons/ri";


const About = () => {
  return (
    <div id="about" className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <h1 className='uppercase text-xl tracking-widest text-[#5651e5]'>About</h1>
                <h2 className='py-4'>Who are we?</h2>
                <p className='py-2 text-gray-600'>
                    We are using latest creative technology such as Next.JS & React for web. Solidity for web3. We are creating perfect websites for your ideas. 
                </p>
                <div className='grid grid-cols-2 md:grid-cols-1'>
                <p className='py-2 text-gray-800 font-bold'>Our Technologies</p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRocket2Fill className='pr-2' /> Next.JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRocket2Fill className='pr-2' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRocket2Fill className='pr-2' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRocket2Fill className='pr-2' /> Vercel
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRocket2Fill className='pr-2' /> Node.JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRocket2Fill className='pr-2' /> Solidity
              </p>
                <p>Check out some of our <a href="/#projects" className='font-bold italic'>latest projects.</a></p>
                </div>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src={AboutImg} className="rounded-xl" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About
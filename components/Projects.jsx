import Image from 'next/image'
import React from 'react'
import propertyImg from '../public/projects/property.jpg'
import memoryImg from "../public/projects/memory.png"
import loopbaseImg from "../public/projects/loopbase.png"
import aitopiaImg from "../public/projects/aitopia.png"
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id="projects" className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='texl-xl mt-20 tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

            <ProjectItem 
                title="Property Finder" 
                backgroundImg={propertyImg} 
                tech="React"
                projectUrl="/property"
            />
            <ProjectItem 
                title="Memory App" 
                tech="React"
                backgroundImg={memoryImg} 
                projectUrl="/memory"
            />
            <ProjectItem 
                title="LoopBASE" 
                tech="Next JS"
                backgroundImg={loopbaseImg} 
                projectUrl="/loopbase"
            />
            <ProjectItem 
                title="AITopia" 
                tech="Next JS"
                backgroundImg={aitopiaImg} 
                projectUrl="/aitopia"
            />
            </div>
        </div>
    </div>
  )
}

export default Projects
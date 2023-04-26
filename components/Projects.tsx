import React from 'react'
import {motion} from "framer-motion"
import { Project } from '@/typings'
import { urlFor } from '@/sanity'
import Image from 'next/image'

type Props = {
  projects: Project[]
}

const Projects = ({projects}: Props) => {

  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] dark:text-black text-gray-500 text-2xl'>
        Projects
      </h3>
      
      <div className='mt-12 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F8AB0A]/80 dark:scrollbar-thumb-[#333333]/80'>
        {projects?.map((project,i) => (
          <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-4 sm:p-15 lg:p-44 h-screen'>
            <div className='max-w-2xl'>
            <motion.img
              className='object-cover'
              initial={{y:-300, opacity:0}}
              transition={{duration:1.2}}
              whileInView={{opacity:1, y:0}}
              viewport={{once: true}}
              src={urlFor(project.image).url()}
            />
            </div>
            <div className='space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl'>
              <div className='flex items-center space-x-1 md:space-x-2 justify-center '>
                {project?.technologies.map(technology => 
                  <motion.img
                    key={technology._id} 
                    src={urlFor(technology.image).url()} 
                    alt='tech logo'
                    className='w-10 h-10 md:w-12 md:h-12'
                  />)} 
              </div>
              <h4 className='sectionTitle'>
                <span className='underline decoration-[#3333]/50 dark:text-black'>
                  Case Study {i+1} of {projects.length}:</span> {project.title}
              </h4>
              <p className='text-sm md:text-lg text-center md:text-left dark:text-black'>
              {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 dark:bg-[#3333]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects
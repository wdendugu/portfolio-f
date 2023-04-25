import React from 'react'
import {motion} from "framer-motion"
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
    pageInfo: PageInfo
}

const About = ({pageInfo}: Props) => {
  return (
    <motion.div 
        className='flex relative flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] dark:text-black text-gray-500 text-2xl'>
        About
        </h3>
        <motion.img
        initial={{
            x:-200,
            opacity:0
        }}
        whileInView={{
            opacity: 1,
            x:0
        }}
        viewport={{
            once:true
        }}
        transition={{
            duration: 1.2
        }}
        src={urlFor(pageInfo?.profileImage).url()}
        className='-mb-20 md:mb-0 flex-shrink-0 w-36 h-36 sm:w-56 sm:h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-xl md:text-4xl font-semibold dark:text-black' > 
                Here is a <span className='underline decoration-[white]/50'>little</span> background
            </h4>
            <p className='text-xs md:text-base text-justify dark:text-black '>
                {pageInfo?.backgroundInformation}
            </p>
        </div>
    </motion.div>
  )
}

export default About
import React from 'react'
import { motion } from "framer-motion"
import { Skill } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  directionLeft?: boolean;
  skill: Skill
}

const SkillsItem = ({directionLeft, skill}: Props) => {
  return (
    <motion.div
    className='group relative flex cursor-pointer'
    >
      <motion.img
      initial={{x: directionLeft ? -200 : 200,}}
      transition={{duration: 0.5}}
      whileInView={{opacity:1, x:0}}
      src={urlFor(skill?.image).url()}
      className='rounded-full border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale trasition duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 trasition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 z-0 rounded-full'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>{skill?.progress}%</p>
        </div>
      </div>
    </motion.div>
  )
}

export default SkillsItem
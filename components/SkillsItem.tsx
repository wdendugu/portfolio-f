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
    className='group relative flex'
    >
      <motion.img
      src={urlFor(skill?.image).url()}
      className='rounded-full border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24 xl:w-32 xl:h-32 xs '
      />
    </motion.div>
  )
}

export default SkillsItem
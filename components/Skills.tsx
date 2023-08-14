import React from 'react'
import {motion} from "framer-motion"
import SkillsItem from './SkillsItem'
import { Skill } from '@/typings'

type Props = {
  skills: Skill[]
}

const Skills = ({skills}: Props) => {
  return (
    <motion.div
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] dark:text-gray-800 text-gray-500 text-2xl'>
            Skills
        </h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] dark:text-gray-800 text-gray-500 text-sm'>
            Hover over a skill for currency profieciency
        </h3>
        <motion.div className='grid grid-cols-4 md:grid-cols-5 gap-5 pt-36 sm:pt-0'>
        {skills?.map((skill:Skill) => <SkillsItem key={skill._id} skill={skill}/>)}
        </motion.div>
    </motion.div>
  )
}

export default Skills
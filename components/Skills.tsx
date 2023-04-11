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
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] dark:text-black text-gray-500 text-2xl'>
            Skills
        </h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] dark:text-black text-gray-500 text-sm'>
            Hover over a skill for currency profieciency
        </h3>

        <motion.div className='grid grid-cols-4 gap-5'>
        {skills?.map((skill:Skill) => <SkillsItem key={skill._id} skill={skill}/>)}
        {/* {skills?.slice(skills.length/2,skills.length).map((skill:Skill) => <SkillsItem key={skill._id} skill={skill} directionLeft/>)} */}
        </motion.div>
    </motion.div>
  )
}

export default Skills
import React from 'react'
import {motion} from "framer-motion"
import { Experience } from '@/typings'
import { urlFor } from '@/sanity'
import Image from 'next/image'

type Props = {experience: Experience}


const ExperienceItem = ({experience}: Props) => {
  return (
    <article className='experienceItem'>
      <motion.img
        initial={{y:-100, opacity: 0}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1.2}}
        viewport={{once: true}}
        className='w-16 h-16 md:w-32 md:h-32 rounded-full md:rounded-full  object-cover object-center'
        src={urlFor(experience?.companyImage).url()}
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-xl md:text-4xl font-light'>{experience.company}</h4>
        <p className='font-bold text-l md:text-2xl mt-1'>{experience.jobTitle}</p>
        <div className='flex space-x-2 my-2'>
          {experience.technologies?.map(technologie => 
          <Image
            alt='technologieimage'
            key={technologie._id} 
            className='h-10 w-10 rounded-full' 
            src={urlFor(technologie.image).url()}
          />)}

        </div>
        <p className='uppercase py-t text-gray-300 text-sm'>
          {new Date (experience.dateStarted).toLocaleDateString()} - {' '}
          {experience.isCurrentlyWorkingHere ? "Present" : new Date (experience.dateEnded).toLocaleDateString()}
        </p>
        <ul className='list-disc space-y-4 ml-5 text-s md:text-lg h-96 '>
        {experience?.points?.map((point,i) => <li key={i}>{point}</li>)}
        </ul>
      </div>

    </article>
  )
}

export default ExperienceItem
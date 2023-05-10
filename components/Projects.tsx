import React, { useRef, useState } from 'react'
import {motion} from "framer-motion"
import { Project } from '@/typings'
import { urlFor } from '@/sanity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'


type Props = {
  projects: Project[]
}

const Projects = ({projects}: Props) => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);


const handleScrollLeft = () => {
  const container = containerRef.current;
  if (container && scrollLeft > 0) { // Only update if not already at the beginning
    const newScrollLeft = Math.max(0, scrollLeft - container.offsetWidth);
    container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    setScrollLeft(newScrollLeft);
  }
};

const handleScrollRight = () => {
  const container = containerRef.current;
  if (container) {
    const newScrollLeft = Math.min(container.scrollWidth - container.offsetWidth, scrollLeft + container.offsetWidth); // Only update if not already at the end
    container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    setScrollLeft(newScrollLeft);
  }
};

  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] dark:text-gray-800 text-gray-500 text-2xl'>
        Projects
      </h3>

      <button
        className='left-3 sm:left-12 btn-scroll'
        onClick={handleScrollLeft}>
        <FontAwesomeIcon icon={faChevronLeft} className='socialIcon' />
      </button>

      <button
        className='right-3 sm:right-12 btn-scroll'
        onClick={handleScrollRight}>
          <FontAwesomeIcon icon={faChevronRight} className='socialIcon' />
      </button>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F8AB0A]/80 dark:scrollbar-thumb-[#333333]/80' ref={containerRef}>
        {projects?.map((project,i) => (
          <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img
              className='object-cover max-h-60 '
              initial={{y:-300, opacity:0}}
              transition={{duration:1.2}}
              whileInView={{opacity:1, y:0}}
              viewport={{once: true}}
              src={urlFor(project.image).url()}
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <div className='flex items-center space-x-1 md:space-x-2 justify-center'>
                {project?.technologies.map(technology => 
                  <motion.img
                    key={technology._id} 
                    src={urlFor(technology.image).url()} 
                    alt='tech logo'
                    className='w-10 h-10 md:w-12 md:h-12'
                  />)} 
              </div>
              <h4 className='sectionTitle'>
                <span className='underline decoration-[#3333]/50 dark:text-gray-800'>
                  Case Study {i+1} of {projects.length}:</span> {project.title}
              </h4>
              <p className='text-lg text-center md:text-left dark:text-gray-800'>
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
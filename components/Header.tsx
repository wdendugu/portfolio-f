import React from 'react'
import {motion} from "framer-motion"
import { Social } from '@/typings'
import Link from 'next/link'
import {useContext} from 'react'
import ThemeContext from '../store/themeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faEnvelope, faHome} from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faWhatsapp,faLinkedin } from '@fortawesome/free-brands-svg-icons'


type Props = {
    socials: Social[]
}

export default function Header ({socials}: Props) {
    const themeCtx: { isLightTheme?: boolean; toggleThemeHandler: () => void } =
    useContext(ThemeContext);

    function toggleThemeHandler(): void {
        themeCtx.toggleThemeHandler();
      }

  return (
    <header className='sticky top-0 p-5 flex justify-between align-middle max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x:0,
                opacity:1,
                scale: 1,
            }}
            transition ={{
                duration: 1.5,
            }}
            className='flex flex-row items-center gap-6'> 
        <Link href={'https://www.linkedin.com/in/felix-alberto-arias-404928245/'} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className='socialIcon' />
        </Link>
        <Link href={'https://twitter.com/ElPeluso6'} target="_blank">
            <FontAwesomeIcon icon={faTwitter} className='socialIcon' />
        </Link>
        <Link href={'https://wa.me/+5491157696310?text=Im%20interested%20in%20your%20profile'} target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} className='socialIcon' />
        </Link>
        </motion.div>
        <div>
        </div>

        <motion.div 
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x:0,
                opacity:1,
                scale: 1,
            }}
            transition ={{
                duration: 1.5,
            }}
            className='flex flex-row items-center text-gray-300 cursor-pointer'
        >

            <div className='flex align-middle justify-center w-auto gap-5'>
                <Link href={'/#hero'}>
                    <FontAwesomeIcon icon={faHome} className='socialIcon' />
                </Link>
                <button onClick={toggleThemeHandler} className=''>
                    {themeCtx.isLightTheme ?
                        <FontAwesomeIcon icon={faMoon} className='socialIcon' /> :
                        <FontAwesomeIcon icon={faSun} className='socialIcon' /> 
                    }
                </button>
                <Link href='#contact' className='flex align-middle justify-center text-[#808080] '>
                    <FontAwesomeIcon icon={faEnvelope} className='w-15 h-7 '/>
                    <p className='uppercase hidden md:inline-flex text-sm pt-1 pl-2'>Contact</p>
                </Link>
            </div>
        </motion.div>
    </header>
  )
}


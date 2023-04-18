import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {motion} from "framer-motion"
import { Social } from '@/typings'
import Link from 'next/link'
import {useContext} from 'react'
import ThemeContext from '../store/themeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faEnvelope } from '@fortawesome/free-solid-svg-icons'


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
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
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
            className='flex flex-row items-center'> 
            {socials.map((social) => <SocialIcon key={social._id} url={social.url} fgColor='gray' bgColor='transparent' target="_blank"/>)}
            <SocialIcon key={124432} network={'whatsapp'} fgColor='gray' bgColor='transparent' target="_blank"/>
        </motion.div>

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

            <div className='flex align-middle justify-center w-auto'>
                <button onClick={toggleThemeHandler} className='pr-10'>
                    {themeCtx.isLightTheme ?
                        <FontAwesomeIcon icon={faMoon} className='w-6 h-6 text-[#808080]' /> :
                        <FontAwesomeIcon icon={faSun} className='w-6 h-6 text-[#808080]' /> 
                    }
                </button>
                <Link href='#contact' className='flex align-middle justify-center text-[#808080]'>
                    <FontAwesomeIcon icon={faEnvelope} className='w-15 h-6 pr-2'/>
                    <p className='uppercase hidden md:inline-flex text-sm'>Contacto</p>
                </Link>
            </div>
        </motion.div>
    </header>
  )
}


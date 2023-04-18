import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMap, faPhone } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';


type Inputs = {
    name:string;
    email: string;
    subject: string;
    message: string;
  };

type Props = {}

const Contact = (props: Props) => {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => console.log(formData);

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center dark:text-black'> 
               Dummy text.{' '}
               <span className='underline decoration-[white]/50 dark:text-black'>Lets talk</span> 
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <FontAwesomeIcon icon={faPhone} className='text-[#F8AB0A] h-7 w-7 animate-pulse dark:text-black' />
                    <Link href="https://wa.me/5491157696310?text=Hola%20estoy%20interesado%20en%20tu%20perfil"><p className='text-2xl dark:text-black'>+54 9 11 5545 5454</p></Link>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <FontAwesomeIcon icon={faEnvelope} className='text-[#F8AB0A] h-7 w-7 animate-pulse dark:text-black' />
                    <p className='text-2xl dark:text-black'>felitomail@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <FontAwesomeIcon icon={faMap} className='text-[#F8AB0A] h-7 w-7 animate-pulse dark:text-black'/>
                    <p className='text-2xl dark:text-black'>Buenos Aires, Argentina</p>
                </div>
            </div>

            {/* <form 
                className='flex flex-col space-y-2 w-fit mx-auto'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder="Name" className='contactInput' type="text" />
                    <input {...register('email')} placeholder="Email" className='contactInput' type="email" />
                </div>
                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                <textarea {...register('message')} placeholder='Message' className='contactInput' />
                <button
                className='bg-[#F8AB0A] py-5 px-10 rounded-md text-black font-bold text-lg dark:bg-[#FF883C] dark:text-black'
                >
                    Submit
                </button>
            </form> */}

        </div>
    </div>
  )
}

export default Contact
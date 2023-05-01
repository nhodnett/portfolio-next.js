import React from 'react'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa' 
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Nathan</span></h1>
                    <h1 className='py-4 text-gray-700'>A Front-End Web Developer</h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I am dedicated to creating engaging and user-friendly front-end web applications that meet the needs of users. 
                    With a focus on responsiveness and accessibility, I strive to deliver high-quality products that exceed client expectations. 
                    I am also committed to staying up-to-date with the latest technologies and industry trends, continuously learning and growing my 
                    skillset to provide the best possible solutions. Let's work together to create innovative and impactful web applications that delight users!</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <Link href='https://www.linkedin.com/in/nathan-h-200a4710/'
                            aria-label='LinkedIn Homepage'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                        </Link> 
                        <Link href='https://github.com/nhodnett'
                            aria-label='GitHub Homepage'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </Link>
                        <Link
                                href="mailto:nathanhodnett@gmail.com"
                                aria-label="Send an email to Nathan"
                                target="_blank"
                                rel="noreferrer"
                            >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                        </Link>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
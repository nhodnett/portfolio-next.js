import React from 'react'
import Image from 'next/image'
import rancidTomatillosImg from '../public/assets/projects/premierLeagueImg.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const rancidTomatillos = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1' src={rancidTomatillosImg} alt='/' fill style={{objectFit:"contain"}} />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#ecf0f3] z-10 p-2'>
                    <h2 className='py-2'>Rancid Tomatillos</h2>
                    <h3>React JS / React Hooks / Cypress</h3>
                </div>
            </div>
                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                    <div className='col-span-4'>
                        <p>Partner Project</p>
                        <h2>Overview</h2>
                        <p className='mt-4'>
                            Rancid Tomatillos is an application built using the React.js framework. 
                            It takes inspiration from popular review-aggregation website Rotten Tomatoes 
                            as well as many different streaming services including but not limited to Netflix and HBO Max. 
                            The goal of this application is to allow users to look at information about 40 different 
                            films that they might be interested in watching.
                        </p>
                        <p className='mt-4'>
                            Rancid Tomatillos was my first React Application. It was exciting it was to see how quickly a project came together using the React Framework. 
                            There was a steep learning curve while familiarizing myself with JSX syntax and React Router, 
                            however I developed confidence as I progressed. I initially utilizied class components to handle state and passed 
                            data using props. Later as I iterated through the project, I re-factored to use hooks and functional components.
                        </p>                        
                        <Link 
                            href='https://rancid-tomatillos-1.vercel.app'
                            aria-label='Deployed site for Rancid Tomatillos'
                            target='_blank'
                            rel='noreferrer'    
                        >
                            <button className='px-8 py-2 mt-8 mr-8 cursor-pointer hover:scale-105 ease-in duration-300'>Demo</button>
                        </Link>
                        <Link
                            href='https://github.com/nhodnett/rancid-tomatillos-1'
                            aria-label='Github Repository for Rancid Tomatillos'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <button className='px-8 py-2 mt-8 cursor-pointer hover:scale-105 ease-in duration-300'>Code</button>
                        </Link>
                    </div>
                    <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='p-2'>
                            <p className='text-center font-bold pb-2'>Technologies</p>
                            <div className='grid grid-cols-3 md:grid-cols-1'>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/>React</p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/>React Router</p>   
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/>HTML</p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/>CSS</p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/>Javascript</p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/>Cypress</p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/>Vercel</p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/>Fetch API</p>
                            </div>
                        </div>
                    </div>
                    <Link href='/#projects'>
                        <p className='underline cursor-pointer'>Back</p>
                    </Link>
                </div>
        </div>
    )
}

export default rancidTomatillos
import React from 'react'
import Image from 'next/image'
import kandWeatherImg from '../public/assets/projects/kandWeatherImg.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const kandWeather = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1' src={kandWeatherImg} alt='/' fill style={{objectFit:"contain"}} />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#ecf0f3] z-10 p-2'>
                    <h2 className='py-2'>KAND Weather</h2>
                    <h3>React JS / React Hooks / Cypress / Context API</h3>
                </div>
            </div>
                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                    <div className='col-span-4'>
                        <p>Project</p>
                        <h2>Overview</h2>
                        <p className='mt-4'>
                            The purpose of the Kand Weather App is to help a user find the weather in their home city or a city they plan to visit. 
                            It also has the Air Quality Index, (AQI), listed so they can decide whether they feel comfortable going outside for a 
                            walk, hike, etc... Or whether it would be better to stay inside.
                        </p>
                        <p className='mt-4'>
                            This was a group project, and we utilized a number of different API endpoints. As a group we were challenged to 
                            incorporate a brand new technology in to the project that we had not encountered before. We chose Context API as a 
                            way to effectively produce global variables that could be passed between componenents without the need for 'prop drilling'.
                        </p>                        
                        <Link 
                            href='https://artanmyrtolli.github.io/kandweather'
                            aria-label='Deployed site for KAND Weather'
                            target='_blank'
                            rel='noreferrer'    
                        >
                            <button className='px-8 py-2 mt-8 mr-8 cursor-pointer hover:scale-105 ease-in duration-300'>Demo</button>
                        </Link>
                        <Link
                            href='https://github.com/nhodnett/kandweather'
                            aria-label='Github Repository for KAND Weather'
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
                                    <RiRadioButtonFill className='pr-1'/>Context API</p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/>GitHub Pages</p>
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

export default kandWeather
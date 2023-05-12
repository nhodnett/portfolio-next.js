import React from 'react'
import Image from 'next/image'
import premierLeagueImg from '../public/assets/projects/premierLeagueImg.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const premierLeague = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1' src={premierLeagueImg} alt='/' fill style={{objectFit:"contain"}} />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#ecf0f3] z-10 p-2'>
                    <h2 className='py-2'>Premier League</h2>
                    <h3>React JS / React Hooks / Cypress</h3>
                </div>
            </div>
                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                    <div className='col-span-4'>
                        <p>Project</p>
                        <h2>Overview</h2>
                        <p className='mt-4'>
                            The purpose of the App is to give a person new to the English Premier League 
                            the opportunity to research all 20 teams to see which one, (or ones) they like the look of.
                            The user can scan the first page of all 20 Premier league teams and simply click on 
                            any one of the club badges to get more detailed information about that team, including the year the team was founded,
                            their location, detailed team history and official social media links.
                        </p>
                        <p className='mt-4'>
                            This was a fun project, the API was very detailed and allowed me to tailor the information 
                            I wanted to present quite easily. However, the API didn't have fully functional error handling, meaning I could not test for a 400 error.
                            This led to me customizing a 'checkResponse' Function to make sure error handling was functional.
                        </p>                        
                        <Link 
                            href='https://premier-league-zeta.vercel.app'
                            aria-label='Deployed site for Premier League'
                            target='_blank'
                            rel='noreferrer'    
                        >
                            <button className='px-8 py-2 mt-8 mr-8 cursor-pointer hover:scale-105 ease-in duration-300'>Demo</button>
                        </Link>
                        <Link
                            href='https://github.com/nhodnett/premier-league'
                            aria-label='Github Repository for Premier League'
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
                                    <RiRadioButtonFill className='pr-1'/>TheSportsDB API</p>
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

export default premierLeague
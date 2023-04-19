import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import premierLeagueImg from '../public/assets/projects/premierLeagueImg.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem title='My Old Man Said...' backgroundImg={premierLeagueImg} projectUrl='/premierLeague'/>
                </div>
            </div>
        </div>
    )
}
    export default Projects
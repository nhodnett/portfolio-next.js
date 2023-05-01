import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>I have diverse background in business development, sales, and health and fitness coaching. 
                My experience demonstrates that I have a proven track record of achieving results, managing teams, and providing personalized 
                coaching to clients.</p>
                <p className='py-2 text-gray-600'>These skills can be valuable in software development when it comes to building relationships 
                with clients, identifying their needs, and developing products that meet those needs. Furthermore, my Certificate in Front End Software Engineering 
                demonstrates my commitment to expanding my skills and knowledge in software development. With this education, I have the technical skills necessary 
                to build responsive, user-friendly websites and applications.</p>
                <p className='py-2 text-gray-600'>Overall, my background in business development, sales, and health and fitness coaching, combined with my education 
                in front end software engineering positions me well to contribute to the software development industry. I bring a unique set of skills and experience 
                that can help companies create innovative, user-friendly products that meet the needs of their clients.</p>
              <Link href='/#projects'>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
              </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src='http://source.unsplash.com/{xa9XSA7K9k}' alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About
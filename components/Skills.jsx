import React from 'react'
import Image from 'next/image'
import ReactImg from '../public/assets/skills/react.png'
import GithubImg from '../public/assets/skills/github1.png'
import JavascriptImg from '../public/assets/skills/javascript.png'
import TypescriptImg from '../public/assets/skills/typescript.png'
import HtmlImg from '../public/assets/skills/html.png'
import CssImg from '../public/assets/skills/css.png'
import NextImg from '../public/assets/skills/nextjs.png'
import NodeImg from '../public/assets/skills/node.png'
import TailwindImg from '../public/assets/skills/tailwind.png'
import GraphqlImg from '../public/assets/skills/graphql.png'
import VscodeImg from '../public/assets/skills/vscode.png'
import CircleciImg from '../public/assets/skills/circleci.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#077187]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={ReactImg} alt='React Icon'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>REACT</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={GithubImg} alt='GitHub Icon'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>GITHUB</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={JavascriptImg} alt='Javascript Icon'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JAVASCRIPT</h3>
                        </div>
                    </div>
                </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={TypescriptImg} alt='Typescript Icon'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>TYPESCRIPT</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={HtmlImg} alt='HTML Icon'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={CssImg} alt='CSS Icon'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={NextImg} alt='Next Icon'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NEXTJS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={NodeImg} alt='Node Icon'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NODE</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={TailwindImg} alt='Tailwind Icon'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>TAILWIND</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={GraphqlImg} alt='GraphQL Icon'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>GRAPH QL</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={VscodeImg} alt='VSCode Icon'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>VS CODE</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={CircleciImg} alt='CircleCI Icon'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CIRCLE CI</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
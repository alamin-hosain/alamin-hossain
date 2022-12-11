import Image from 'next/image';
import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import profile from '../assets/profile.jpeg';
import ParticleBackground from '../components/ParticlesBackground';

const About = () => {
    return (
        <>
            <ParticleBackground />
            <div className='bg-[#0a192f]'>
                <div className='flex flex-col-reverse lg:flex-row h-screen justify-center items-center lg:w-[1200px] mx-auto '>
                    <div className='lg:w-3/5 px-10 lg:px-0 pr-12'>
                        <h3 className='w-4/5 text-4xl font-bold uppercase mb-6 text-[#8892b0]'>About Me.</h3>
                        <hr className='text-primary py-4 -mt-2 w-2/5' />
                        <div className=' space-y-3 tracking-wider text-[#8892b0]'>
                            <p>I am a Front-End Web Developer located In Bangladesh. I am passionate about creating intuitive, user friendly, dynamic web applications.</p>
                            <p>I am well-organized person. I love outdoor activities. Specially passionate about Running and Hiking.</p>
                            <p>Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>


                        </div>
                        <div className='mt-8'>
                            <h3 className='mb-4 text-[#8892b0]'>Here are a few technologies I’ve been working with recently:</h3>
                            <ul className='flex flex-wrap items-center text-[#8892b0]'>
                                <div>
                                    <li className='flex items-center mr-20 text-primary'><FaArrowAltCircleRight className='mr-4' /> Javascript (ES6+)</li>
                                    <li className='flex items-center mr-20 text-primary'><FaArrowAltCircleRight className='mr-4' /> React Js</li>
                                    <li className='flex items-center mr-20 text-primary'><FaArrowAltCircleRight className='mr-4' /> Node Js</li>
                                </div>
                                <div>
                                    <li className='flex items-center mr-20 text-primary'><FaArrowAltCircleRight className='mr-4' /> Express Js</li>
                                    <li className='flex items-center mr-20 text-primary'><FaArrowAltCircleRight className='mr-4' /> Mongo DB</li>
                                    <li className='flex items-center mr-20 text-primary'><FaArrowAltCircleRight className='mr-4' /> Firebase</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className='px-10 mb-20 lg:mb-0'>
                        <Image className='rounded-full shadow-xl' src={profile} width={500} height={500}></Image>
                    </div>
                </div>
            </div>
        </>

    );
};

export default About;
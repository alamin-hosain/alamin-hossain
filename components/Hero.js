
import Link from 'next/link';
import React from 'react';
const Hero = () => {


    return (

        <>


            <div className='flex justify-center items-center py-32 lg:py-52 bg-[#0a192f] px-10 lg:px-0 hero' id="particles-js" >

                <div className='flex flex-col lg:w-[1200px] mx-auto '>
                    <div className='space-y-6'>
                        <p className='text-primary'>Hi, I am</p>
                        <h1 className='text-4xl md:text-7xl font-semibold'>Alamin Hossain.</h1>
                        <h1 className='text-4xl md:text-7xl font-semibold'>I Code Web Based Projects.</h1>
                        <p className='md:w-4/5 text-lg tracking-wider'>I am experience in creating web-based projects using <span className='text-primary'>React Js, Next Js, Express Js, MongoDB and Firebase.</span> I am skilled at building things for the internet and enjoy bringing ideas to life on the web...</p>
                    </div>
                    <div className='mt-12 z-50'>

                        <Link href="ResumeOfAlamin.pdf" download="ResumeOfAlamin.pdf">
                            <button className='border border-primary py-4 w-60 hover:bg-[#21a1837b] transition-all delay-75 hover:scale-95 rounded-lg' >Download Resume</button>
                        </Link>
                    </div>
                </div>

            </div>

            <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0 L50 100 L100 0 Z" fill="#0a192f" stroke="#0a192f"></path>
            </svg>
        </>

    );
};

export default Hero;
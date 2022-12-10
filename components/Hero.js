import React from 'react';
import { saveAs } from "file-saver";
import Link from 'next/link';



const Hero = () => {

    const saveFile = () => {
        saveAs(
            "https://drive.google.com/file/d/1AsDj2wfGvJ9PxG_Yrz0f7Q3Q4Fp_LjgU/view?usp=sharing"
        );
    };

    return (
        <div className='flex justify-center items-center py-32 lg:py-52'>
            <div className='flex flex-col lg:w-[1200px] mx-auto'>
                <div className='space-y-6'>
                    <p className='text-primary'>Hi, I am</p>
                    <h1 className='text-5xl md:text-7xl font-semibold'>Alamin Hossain.</h1>
                    <h1 className='text-5xl md:text-7xl font-semibold'>I Code Web Based Projects.</h1>
                    <p className='md:w-3/5 text-md tracking-wider'>I am experience in creating web-based projects using <span className='text-primary'>React Js, Next Js, Express Js, MongoDB and Firebase.</span> I am skilled at building things for the internet and enjoy bringing ideas to life on the web.</p>
                </div>
                <div className='mt-12 '>
                    <button className='border border-primary py-2 w-60 hover:bg-[#21a1837b] transition-all delay-75 hover:scale-95 rounded-lg' onClick={saveFile}>Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer items-center p-4 py-12 px-10 lg:px-0  text-neutral-content lg:w-[1200px] mx-auto border-t mt-8">
            <div className="">
                <h3 className='font-bold text-4xl'>ALAMIN.h</h3>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-3xl ">
                <Link className=' transition-all hover:scale-75' href={'https://www.linkedin.com/in/alaminpro/'}><FaLinkedin /></Link>
                <Link className=' transition-all hover:scale-75' href={'https://github.com/alamin-hosain'}><FaGithubSquare /></Link>
                <Link className=' transition-all hover:scale-75' href={'https://twitter.com/iam_chonchol'}><FaTwitterSquare /></Link>
                <Link className=' transition-all hover:scale-75' href={'https://www.facebook.com/rupkothakpi'}><FaFacebookSquare /></Link>
            </div>
        </footer>
    );
};

export default Footer;
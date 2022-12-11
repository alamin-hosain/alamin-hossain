import Link from 'next/link';
import React from 'react';

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
    }
    return (
        <div className='flex flex-col' >

            <div className='bg-[#0a192f] text-white lg:w-[1200px] mx-auto mt-40 px-10 lg:px-20 
            py-16 flex flex-col lg:flex-row rounded-2xl space-y-8 lg:space-y-0 border'>
                <div className='flex flex-col space-y-8 lg:hidden'>
                    <h4 className='text-3xl'>Starting a Project</h4>
                    <p className='lg:w-2/5'>Interested to work with me ? How about we schedule a time to chat? Let's make it happen. </p>
                    <div>
                        <button className='border border-accent px-12 py-4 rounded-lg transition-all hover:bg-accent hover:scale-10 hover:text-black'>
                            Lets Work Together
                        </button>
                    </div>
                </div>

                <div className='hidden lg:flex justify-between items-center'>

                    <h4 className='text-3xl'>Starting a Project</h4>
                    <p className='lg:w-2/5 text-lg tracking-wider'>Interested to work with me ? How about we schedule a time to chat? Let's make it happen. </p>
                    <div>
                        <button className='border border-accent px-12 py-4  hover:bg-[#21a1837b] transition-all delay-75 hover:scale-95 rounded-lg'>
                            Lets Work Together
                        </button>
                    </div>
                </div>
            </div>



            <div className='mt-40 bg-[#0a192f] text-white pb-32'>
                <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0 L50 100 L100 0 Z" fill="#233554" stroke="#233554"></path>
                </svg>

                <div className='text-center mb-12 lg:mb-12 space-y-6 lg:space-y-4 mt-24'>
                    <h3 className='text-5xl font-semibold uppercase'>Hire Me.</h3>
                    <div className='w-32 mx-auto'>
                        <span className='text-4xl font-bold'>
                            <hr className='border-2' />
                        </span>
                    </div>

                    <p>I am available for Remote Job. Call: +8801401816162</p>
                </div>
                <form className='flex flex-col space-y-1 px-4 lg:px-0 lg:w-2/4 mx-auto' action="https://formspree.io/f/xbjbnwow"
                    method="POST"  >
                    <input name='name' className='rounded-sm bg-[#233554] py-2 px-10 outline-none ' type="text" placeholder='Name' required />
                    <input name='email' className='rounded-sm bg-[#233554] py-2 px-10 outline-none ' type="email" placeholder='Email' required />
                    <textarea className='rounded-sm bg-[#233554] py-3 px-10 outline-none' name="message" id="" cols="30" rows="7" placeholder='Message' required></textarea>
                    <div className='flex justify-end'>
                        <input className='bg-[#233554] text-white py-2 cursor-pointer hover:bg-[#0a192f] transition-all border-2 w-1/5 uppercase mt-2 tracking-wider' type="submit" value="SUBMIT" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
import Link from 'next/link';
import React from 'react';

const Contact = () => {
    return (
        <div className='flex flex-col'>

            <div className='bg-gray-900 text-white lg:w-[1200px] mx-auto mt-40 px-10 lg:px-20 
            py-16 flex flex-col lg:flex-row rounded-lg space-y-8'>
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
                    <p className='lg:w-2/5'>Interested to work with me ? How about we schedule a time to chat? Let's make it happen. </p>
                    <div>
                        <button className='border border-accent px-12 py-4 rounded-lg transition-all hover:bg-accent hover:scale-10 hover:text-black'>
                            Lets Work Together
                        </button>
                    </div>
                </div>
            </div>



            <div className='mt-40 bg-[#e4e3e3] text-black py-12 lg:py-32'>
                <div className='text-center mb-12 lg:mb-20 space-y-6 lg:space-y-0'>
                    <h3 className='text-5xl font-bold'>Contact.</h3>
                    <p>Get in touch or shoot me an email directly. <Link className='text-accent' href={'mailto:alaminhossainim@gmail.com'}>My Email</Link></p>
                </div>
                <div className='flex flex-col space-y-6 px-4 lg:px-0 lg:w-3/5 mx-auto '>
                    <input className='rounded-sm py-3 px-10 border border-gray-300 ' type="text" placeholder='Name' />
                    <input className='rounded-sm py-3 px-10 border border-gray-300 ' type="email" placeholder='Email' />
                    <textarea className='rounded-sm py-3 px-10 border border-gray-300 ' name="" id="" cols="30" rows="7" placeholder='Message'></textarea>
                    <input className='bg-black text-white py-4 cursor-pointer hover:bg-gray-600 transition-all  hover:scale-90' type="submit" value="Send Message" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
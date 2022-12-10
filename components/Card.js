import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Card = ({ projects }) => {
    const [hover, setHover] = useState(false);

    const { id, img, name, description, liveUrl } = projects;

    const handleMouseHover = (e) => {
        setHover(true)
    }

    const mouseOut = () => {
        setHover(false)
    }


    setTimeout(() => { console.log("this is the first message") }, 5000);

    return (
        <div className='card relative transition-all' onMouseEnter={handleMouseHover} onMouseLeave={mouseOut}>

            {
                hover ? <div className='bg-[#1d1d1d] absolute h-[363px] w-full p-8 text-center flex flex-col justify-center items-center border border-primary cursor-pointer'>
                    <p className='text-xl tracking-wider leading-6 mb-4'>Technology Used: {description}</p>
                    <Link target="_blank" className='border border-primary px-12 py-2  hover:bg-[#21a1837b] transition-all delay-75 hover:scale-95' href={liveUrl}>
                        See Live Site
                    </Link>
                </div>
                    :
                    ''
            }


            <figure><Image src={img} width={400} height={400} alt='Project Image'></Image></figure>


            <Link className='border bg-accent border-primary py-2 hover:bg-[#21a1837b] text-center' href={liveUrl}>
                <p className='text-lg'>{name}</p>
            </Link>


        </div>
    );
};

export default Card;
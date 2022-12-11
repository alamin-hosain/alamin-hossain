import React from 'react';
import ParticleBackground from '../components/ParticlesBackground';

const blog = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-[#0a192f]'>
            <ParticleBackground />
            <h1 className='text-8xl uppercase'> Coming Soon</h1>
        </div>
    );
};

export default blog;
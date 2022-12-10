import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import Card from './Card';

const Projects = () => {
    const cardItems = [
        {
            id: 1,
            img: img1,
            name: 'UsedAuto - Car Reselling Platform',
            liveUrl: 'https://usedcar-93a48.web.app/',
            gitHubClientURL: 'https://github.com/alamin-hosain/Used-Car-Client',
            gitHUbServerURL: 'https://github.com/alamin-hosain/Used-Car-Server',
            description: 'React Js, Express Js, Firebase, MongoDB and Tailwind Css'


        },
        {
            id: 2,
            img: img2,
            name: 'Dental Services - Dentist Service booking',
            liveUrl: 'https://learning-platform-assign-ea618.web.app/',
            gitHubClientURL: 'https://github.com/alamin-hosain/Dentist-Service-Client',
            gitHUbServerURL: 'https://github.com/alamin-hosain/Dentist-Service-Server',
            description: 'React Js, Express Js, Firebase, MongoDB and Tailwind Css'

        },
        {
            id: 3,
            img: img3,
            name: 'Edumy - Online Learning Platform',
            liveUrl: 'https://dentist-service-assignment.web.app/',

            gitHubClientURL: 'https://github.com/alamin-hosain/Educative-Learning-Client',
            gitHUbServerURL: 'https://github.com/alamin-hosain/Educative-Learning-Server',
            description: 'React Js, Express Js, Firebase, MongoDB and Tailwind Css'

        }
    ]
    return (
        <div className='lg:w-[1200px] mx-auto mt-20 lg:mb-16'>
            <div className='text-center space-y-4 mb-20'>
                <h2 className='text-4xl lg:text-5xl font-semibold'>My Recent Work</h2>
                <p className='tracking-wider'>Here are few of my recent projects. Want to see more? <span className='text-primary'><Link href={'mailto:alaminhossainim@gmail.com'}>Email Me.</Link></span></p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    cardItems.map(card => <Card key={card.id} projects={card} />)
                }
            </div>
            <h3 className='text-center mt-12 border w-2/5 mx-auto py-2 rounded-lg border-primary hover:bg-[#21a1837b] transition-all delay-75 hover:scale-95 cursor-pointer'>See More</h3>
        </div >
    );
};

export default Projects;
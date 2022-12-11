import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Card from './Card';

import carOne from '../assets/carOne.png';
import carTwo from '../assets/carTwo.png';
import carThree from '../assets/carThree.png';
import dentistOne from '../assets/dentistOne.png';
import dentistTwo from '../assets/dentistTwo.png';
import dentistThree from '../assets/dentistThree.png';
import edumyOne from '../assets/edumyOne.png';
import edumyTwo from '../assets/edumyTwo.png';
import edumyThree from '../assets/edumyThree.png';

const Projects = () => {

    const cardItems = [
        {
            id: 1,
            img1: carOne,
            img2: carTwo,
            imt3: carThree,
            name: 'UsedAuto - Car Reselling Platform',
            liveUrl: 'https://usedcar-93a48.web.app/',
            gitHubClientURL: 'https://github.com/alamin-hosain/Used-Car-Client',
            gitHUbServerURL: 'https://github.com/alamin-hosain/Used-Car-Server',
            description: [
                'Sellers can add cars to sell, apply for advertising, and manage their added cars',
                'Buyers can book a car, see the booked car in the My orders, and pay via stripe payment.',
                'Admin can manage sellers, and buyers, reported products and verify a seller profile.'
            ],
            shortDescription: 'React Js, Express js, MongoDB, Firebase and Tailwind CSS'



        },
        {
            id: 2,
            img1: dentistOne,
            img2: dentistTwo,
            imt3: dentistThree,
            name: 'Dental Services - Dentist Service booking',
            liveUrl: 'https://learning-platform-assign-ea618.web.app/',
            gitHubClientURL: 'https://github.com/alamin-hosain/Dentist-Service-Client',
            gitHUbServerURL: 'https://github.com/alamin-hosain/Dentist-Service-Server',
            description: [
                'Users can browse popular dentist services and see the details of the service',
                'Users can book a Dentist appointment through this site and can add reviews.',
                'A dentist can add services and remove services.'
            ],
            shortDescription: 'React Js, Express js, MongoDB, Firebase and Tailwind CSS'

        },
        {
            id: 3,
            img1: edumyOne,
            img2: edumyTwo,
            imt3: edumyThree,
            name: 'Edumy - Online Learning Platform',
            liveUrl: 'https://dentist-service-assignment.web.app/',

            gitHubClientURL: 'https://github.com/alamin-hosain/Educative-Learning-Client',
            gitHUbServerURL: 'https://github.com/alamin-hosain/Educative-Learning-Server',
            description: [
                'Users can enroll in free and premium courses and Learn from Different categories.',
                'Users can download the course overview as a pdf.',
                'Authentication and Authorization is implemented using firebase and jwt token.'
            ],
            shortDescription: 'React Js, Express js, MongoDB, Firebase and Tailwind CSS'

        }
    ]


    return (
        <div className='lg:w-[1200px] mx-auto mt-32 lg:mb-16'>
            <div className='text-center space-y-4 mb-20'>
                <h2 className='text-4xl lg:text-5xl font-semibold'>My Recent Work </h2>
                <p className='tracking-wider'>Here are few of my recent projects. Want to see more? <span className='text-primary'><Link href={'mailto:alaminhossainim@gmail.com'}>Email Me.</Link></span></p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    cardItems.map(card => <Card key={card.id} project={card} />)
                }
            </div>
            <h3 className='text-center mt-20 border w-2/5 md:w-1/5 mx-auto py-4 rounded-lg border-primary hover:bg-[#21a1837b] transition-all delay-75 hover:scale-95 cursor-pointer'>See More</h3>
        </div >
    );
};




export default Projects;
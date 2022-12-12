
import { useRouter } from 'next/router';
import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";

import carOne from '../../assets/carOne.png';
import carTwo from '../../assets/carTwo.png';
import carThree from '../../assets/carThree.png';
import dentistOne from '../../assets/dentistOne.png';
import dentistTwo from '../../assets/dentistTwo.png';
import dentistThree from '../../assets/dentistThree.png';
import edumyOne from '../../assets/edumyOne.png';
import edumyTwo from '../../assets/edumyTwo.png';
import edumyThree from '../../assets/edumyThree.png';
import Image from 'next/image';
import Link from 'next/link';


const ProjectDetails = () => {

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
            ]



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
            ]

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
            ]

        }
    ]
    const router = useRouter();
    const id = Number(router.query.projectId);

    const selectedProject = cardItems?.find(card => card.id === id);
    console.log(selectedProject?.description)

    // const { name, description, liveUrl, gitHUbServerURL, gitHubClientURL, img1, img2, img3 } = selectedProject

    return (
        <div className='px-10 lg:px-0 lg:w-[1200px] mx-auto lg:pt-20 pb-40'>

            <div className='grid lg:grid-cols-2 lg:pt-32'>
                <div className='flex flex-col space-y-4 pt-32'>
                    <h2 className='text-lg text-primary'>Project Name</h2>
                    <h2 className='text-5xl'>Use Car Reseling Website</h2>
                    <p className='text-xl bg-primary text-gray-700 pl-2 md:w-2/5 rounded-sm'>Project Core Features:</p>
                    <div className='text-lg lg:w-full'>{selectedProject?.description?.map(curr =>

                        <div className='flex'>
                            <p className='mr-3 mt-1'>
                                <span><FaArrowAltCircleRight /></span>
                            </p>
                            <p className='mb-4 list-none' key={curr.id}>{curr}
                            </p>
                        </div>


                    )}

                    </div>


                    <div className='flex flex-col lg:flex-row  space-y-4 lg:space-y-0'>
                        <div>
                            <Link href={`${selectedProject?.liveUrl}`}>
                                <button className='border border-primary py-2 px-6 rounded-lg mr-4 transition-all hover:bg-primary hover:text-gray-700 hover:scale-95'>Visit Website</button>
                            </Link>
                        </div>
                        <div>
                            <Link href={`${selectedProject?.gitHubClientURL}`}>
                                <button className='border border-primary py-2 px-6 rounded-lg mr-4 transition-all hover:bg-primary hover:text-gray-700 hover:scale-95 '>Github Client</button>
                            </Link>
                        </div>
                        <div>
                            <Link href={`${selectedProject?.gitHUbServerURL}`}>
                                <button className='border border-primary py-2 px-6 rounded-lg mr-4 transition-all hover:bg-primary hover:text-gray-700 hover:scale-95'>Github Server</button>
                            </Link>
                        </div>

                    </div>

                    <div className='pb-16 lg:pb-0'>
                        <p className='text-xl mb-2 mt-6'>Technology Used: </p>
                        <p className='text-primary tracking-wider'>React Js, Express js, MongoDB, Firebase and Tailwind CSS</p>
                    </div>
                </div>
                <div className='space-y-6 flex flex-col justify-center items-center'>
                    <Image className='border-4 border-black shadow-lg rounded-2xl' src={selectedProject?.img1} width={500} height={400} alt=''></Image>
                    <Image className='border-4 border-black shadow-lg rounded-2xl' src={selectedProject?.img2} width={500} height={400} alt=''></Image>

                </div>
            </div>

        </div>
    );
};

export default ProjectDetails;
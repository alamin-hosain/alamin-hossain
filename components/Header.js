
import Link from 'next/link';
import styles from '../styles/header.module.css';


const Header = () => {
    const menuItems = <>
        <Link className='hover:text-primary' href='/about'>About</Link>
        <Link className='hover:text-primary' href='/blog'>Blog</Link>
        <Link className='hover:text-primary' href='/contact'>Contact</Link>

    </>

    return (
        <div className='bg-[#0a192f]'>

            <div className={`flex justify-between items-center px-2 lg:px-0 lg:w-[1200px] mx-auto py-6  ${styles.header}`}>
                <div className='flex justify-center items-center'>
                    <Link href='/' className="text-3xl font-bold">ALAMIN.h</Link>
                </div>
                <div>
                    <ul className="menu menu-horizontal px-1 space-x-8">
                        {menuItems}
                    </ul>
                    <Link href={"mailto:alaminhossainim@gmail.com"} className="border  border-[#64ffda] px-4 py-2 rounded-md hover:bg-[#21a1837b] cursor-pointer ml-3 ">Say Hello</Link>
                </div>
            </div>

        </div>
    );
};

export default Header;
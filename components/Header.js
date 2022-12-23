
import Link from 'next/link';
import styles from '../styles/header.module.css';
import Drawer from './Drawer';
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';
import Image from 'next/image';

const Header = () => {
    const menuItems = <>
        <Link className='hover:text-primary' href='/about'>About</Link>
        <Link className='hover:text-primary' href='/blog'>Blog</Link>
        <Link className='hover:text-primary' href='/contact'>Contact</Link>

    </>

    return (
        <div className='bg-[#0a192f] relative'>


            <div className={`flex justify-between items-center px-2 lg:px-0 lg:w-[1200px] mx-auto py-6  ${styles.header}`}>
                <div className='flex justify-center items-center'>
                    <Link href='/' className="text-3xl font-bold">
                        <Image src={logo} width={200}></Image>
                    </Link>
                </div>
                <div className='hidden lg:flex items-center'>

                    <ul className="menu menu-horizontal px-1 space-x-8 ">
                        {menuItems}
                    </ul>
                    <Link href={"mailto:alaminhossainim@gmail.com"} className="border  border-[#64ffda] px-4 py-2 rounded-md hover:bg-[#21a1837b] cursor-pointer ml-3 ">Say Hello</Link>
                </div>

                <label htmlFor="portfolio-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">

                    {/* <label  className="drawer-button btn btn-primary">Open drawer</label> */}

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>

            <Drawer menuItems={menuItems} />

        </div>
    );
};

export default Header;
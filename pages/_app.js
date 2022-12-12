import Layout from '../components/Layout'
import '../styles/globals.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ParticleBackground from '../components/ParticlesBackground';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  });

  return (
    <div className='bg-[#233554]'>
      <Layout>
        <ParticleBackground />
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp

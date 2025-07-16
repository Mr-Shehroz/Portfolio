'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { inter, josefinSans } from '../fonts';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div id='home' className='bg-[url("/bg-1.webp")] bg-cover bg-center bg-no-repeat h-screen'>
            <header className="sticky top-5 z-50">
                <div className={`2xl:max-w-7xl xl:max-w-6xl z-50 lg:max-w-5xl max-w-2xl mx-auto fixed lg:top-5 w-full left-0 right-0 flex items-center justify-between py-4 px-6 ${inter.className}`}>
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={`text-xl lg:text-3xl z-50 xl:text-4xl 2xl:text-5xl font-extrabold bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent tracking-wide ${josefinSans.className}`}>
                        Shehroz Khan
                    </motion.h1>



                    {/* Mobile Menu Button */}
                    <div className="md:hidden z-50">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Nav Menu */}
                    <motion.nav
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`md:flex ${menuOpen
                            ? 'block absolute w-full left-0 right-0 top-16 rounded-lg p-4 text-center bg-[#5B1F69]/50 backdrop-blur-md border border-white/10 shadow-lg'
                            : 'hidden'
                            } 2xl:text-xl xl:text-[16px] lg:text-[14px] text-[10px]`}
                    >
                        <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 items-center">
                            {['Home', 'About', 'Work', 'Contact'].map((item, i) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                >
                                    <Link href={`#${item.toLowerCase()}`} className="text-white hover:text-yellow-400 transition duration-300">
                                        {item}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>


                </div>
                <section className='2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl max-w-2xl mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between gap-5 md:gap-0 2xl:pt-50 lg:pt-30 pt-20 h-[85vh] px-6'>

                    {/* Floating Background Shapes */}
                    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">

                        {/* Rotating Square */}
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute md:right-[15%] md:top-[30%] top-[63%] right-[10%] sm:right-[30%] 2xl:w-16 2xl:h-16 lg:w-12 lg:h-12 w-8 h-8 border-2 border-white/20 rotate-45"
                        />

                        {/* Dotted Grid */}
                        <div className="absolute sm:bottom-[10%] bottom-2 right-[5%] grid grid-cols-3 gap-2">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="lg:w-2 lg:h-2 w-[6px] h-[6px] rounded-full bg-white/10" />
                            ))}
                        </div>

                        {/* Sparkling Star */}
                        <motion.div
                            initial={{ opacity: 0.2, scale: 1 }}
                            animate={{ opacity: 0.4, scale: 1.3 }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
                            className="absolute 2xl:top-[25%] 2xl:left-[20%] lg:top-[20%] sm:top-[15%] top-[10%] left-[10%]"
                        >
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="#ffffff44">
                                <path d="M12 2L13.09 8.26L19 9.27L14.5 13.14L15.82 19L12 15.77L8.18 19L9.5 13.14L5 9.27L10.91 8.26L12 2Z" />
                            </svg>
                        </motion.div>

                        {/* SVG Blob */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 0.3, scale: 1 }}
                            transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror' }}
                            className="absolute top-[15%] left-[50%] w-[250px] h-[250px] blur-2xl"
                        >
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-[#AE0CA7]/40">
                                <path d="M37.4,-61.8C48.5,-56.3,58.7,-48.1,66.2,-37.7C73.8,-27.2,78.7,-13.6,77.8,-0.4C76.9,12.7,70.1,25.3,62,38C53.9,50.8,44.4,63.7,31.7,68.4C19,73.2,3.1,69.7,-12.4,65.8C-27.9,61.9,-43,57.7,-54.1,47.3C-65.2,36.9,-72.3,20.4,-71.8,5C-71.3,-10.4,-63.1,-20.8,-55.5,-31.8C-47.9,-42.8,-40.9,-54.3,-30.5,-61.6C-20.1,-69,-10,-72.3,2.2,-75.5C14.4,-78.6,28.8,-81.2,37.4,-61.8Z" transform="translate(100 100)" />
                            </svg>
                        </motion.div>

                        {/* Rotating Triangle */}
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute xl:top-[40%] xl:left-[60%] md:top-[40%] lg:left-[53%] md:left-[50%] top-[64%] sm:left-[30%] left-[20%] w-0 h-0 lg:border-l-[20px] border-l-[14px] lg:border-r-[20px] border-r-[14px] lg:border-b-[35px] border-b-[26px] border-l-transparent border-r-transparent border-b-white/30"
                        />

                        {/* Pulsing Ring */}
                        <motion.div
                            initial={{ scale: 1, opacity: 0.1 }}
                            animate={{ scale: 1.4, opacity: 0.3 }}
                            transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
                            className="absolute 2xl:bottom-12 bottom-3 2xl:left-[37%] sm:left-[30%] left-[10%] 2xl:w-20 2xl:h-20 xl:w-16 xl:h-16 lg:w-12 lg:h-12 w-8 h-8 border-2 border-[#5DFFFF]/30 rounded-full"
                        />

                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className='flex flex-col items-start justify-center max-w-[300px] lg:max-w-[510px] xl:max-w-[600px] 2xl:max-w-[700px]'>
                        <h2 className={`2xl:text-[90px] xl:text-[50px] text-white lg:text-[44px] text-[25px] font-bold leading-10 lg:leading-18 xl:leading-25 ${josefinSans.className}`}>Hi, I`m Shehroz</h2>
                        <h3
                            className={`2xl:text-[50px] lg:text-[30px] text-[16px] leading-10 md:leading-normal font-semibold bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent ${josefinSans.className}`}
                        >
                            {/* <span className="inline-block mr-2">I am a</span> */}
                            <span className="inline-block">
                                <Typewriter
                                    options={{
                                        strings: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 75,
                                        deleteSpeed: 50,
                                        cursor: '|',
                                    }}
                                />
                            </span>
                        </h3>

                        <p className={`2xl:text-[18px] xl:text-[16px] lg:text-[14px] text-[10px] font-normal leading-[18px] lg:leading-[25px] xl:leading-[30px] text-white ${josefinSans.className}`}>A self-taught full stack developer with over 1 year of hands-on experience, I build scalable, responsive, and user-centric web applications from front to back. I focus on writing clean, maintainable code and designing efficient architectures that ensure smooth functionality, strong performance, and seamless user interactions — all aligned with both technical requirements and business goals.</p>
                        <Link
                            href="/#contact"
                            className={`relative inline-block font-semibold 2xl:text-[20px] xl:text-[16px] lg:text-[14px] text-[8px] 2xl:px-8 xl:px-6 lg:px-4 px-3 2xl:py-4 xl:py-3 lg:py-3 py-2 rounded-full lg:mt-10 mt-4 text-white bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] shadow-lg hover:shadow-2xl hover:scale-105 hover:from-[#AE0CA7] hover:to-[#5DFFFF] ${josefinSans.className}`}
                        >
                            Let's Connect
                        </Link>

                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className='w-full'>
                        <Image className='2xl:max-w-[545px] xl:max-w-[400px] lg:max-w-[330px] sm:max-w-[230px] mx-auto md:mx-0 max-w-[80%] w-full' src="/boy.webp" height={100} width={100} alt='logo' />
                    </motion.div>

                </section>
            </header>
        </div>
    );
}

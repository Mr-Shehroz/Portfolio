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
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className='flex flex-col items-start justify-center max-w-[300px] lg:max-w-[510px] xl:max-w-[600px] 2xl:max-w-[700px]'>
                        <h2 className={`2xl:text-[90px] xl:text-[50px] text-white lg:text-[44px] text-[25px] font-bold leading-10 lg:leading-18 xl:leading-25 ${josefinSans.className}`}>Hi, I`m Shehroz</h2>
                        <h3
                            className={`2xl:text-[50px] lg:text-[30px] text-[16px] leading-10 md:leading-normal font-semibold bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent ${josefinSans.className}`}
                        >
                            <span className="inline-block mr-2">I am a</span>
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
                            href={"/#contact"}
                            className={`font-semibold 2xl:text-[18px] xl:text-[16px] lg:text-[14px] text-[10px] lg:leading-[25px] xl:leading-[30px] bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] 2xl:px-6 xl:px-4 2xl:py-2 md:py-1 md:px-3 py-2 px-3 rounded-full lg:mt-8 mt-4 text-white transition-all duration-300 hover:from-[#AE0CA7] hover:to-[#5DFFFF] ${josefinSans.className}`}
                        >
                            Contact
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

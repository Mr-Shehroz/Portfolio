'use client';
import Image from 'next/image';
import React from 'react';
import { inter, josefinSans } from '../fonts';
import Link from 'next/link';

export default function Header() {
    return (
        <div className='bg-[url("/bg-1.png")] bg-cover bg-center bg-no-repeat h-screen'>
            <header className="sticky top-5 z-50">
                <div className={`max-w-7xl mx-auto fixed top-5 w-full left-0 right-0 flex items-center justify-between py-4 px-6 ${inter.className}`}>
                    <h1 className={`text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent tracking-wide ${josefinSans.className}`}>
                        Shehroz Khan
                    </h1>
                    <nav className='md:text-xl text-lg'>
                        <ul className="flex space-x-6">
                            <li>
                                <a
                                    href="#home"
                                    className="text-white hover:text-yellow-400 transition duration-300"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="text-white hover:text-yellow-400 transition duration-300"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#work"
                                    className="text-white hover:text-yellow-400 transition duration-300"
                                >
                                    Work
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-white hover:text-yellow-400 transition duration-300"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <section className='max-w-7xl mx-auto flex items-center justify-between pt-50 h-[85vh] px-6'>
                    <div className='flex flex-col items-start justify-center max-w-[700px]'>
                        <h2 className={`text-[90px] font-bold leading-25 ${josefinSans.className}`}>Hi, I`m Shehroz</h2>
                        <h3 className={`text-[50px] font-semibold bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent ${josefinSans.className}`}>Full-Stack Developer.</h3>
                        <p className={`text-[18px] font-normal leading-[30px] ${josefinSans.className}`}>A self-taught full stack developer with over 1 year of hands-on experience, I build scalable, responsive, and user-centric web applications from front to back. I focus on writing clean, maintainable code and designing efficient architectures that ensure smooth functionality, strong performance, and seamless user interactions — all aligned with both technical requirements and business goals.</p>
                        <Link
                        href={"/#contact"}
                            className={`font-semibold text-[18px] leading-[30px] bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] px-6 py-2 rounded-full mt-8 text-white transition-all duration-300 hover:from-[#AE0CA7] hover:to-[#5DFFFF] ${josefinSans.className}`}
                        >
                            Contact
                        </Link>

                    </div>
                    <div className='w-full'>
                        <Image className='max-w-[545px] w-full' src="/" height={100} width={100} alt='logo' />
                    </div>
                </section>
            </header>
        </div>
    );
}

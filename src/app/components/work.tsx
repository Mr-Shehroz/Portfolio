import Image from "next/image";
import { josefinSans } from "../fonts";
import { GitHubButton, LinkedInButton, TwitterButton } from "./icons";
import Link from "next/link";

export default function Work() {
    return (
        <div>
            {/* Desktop View */}
            <section id="work" className="hidden md:block bg-[#100425] 2xl:py-20 py-15 z-20 overflow-hidden">
                <div className="flex flex-col items-center">
                    <h2 className={`2xl:text-[66px] xl:text-[46px] lg:text-[35px] text-[25px] font-semibold bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent ${josefinSans.className}`}>Recent Work</h2>
                    <p className={`${josefinSans.className} 2xl:text-[18px] xl:text-[16px] lg:text-[14px] text-[10px] font-normal text-center text-[#FAFAFA]`}>A collection of projects I've worked on.</p>
                </div>

                <div className="2xl:max-w-6xl xl:max-w-4xl lg:max-w-3xl max-w-xl mx-auto 2xl:mt-50 xl:mt-30 lg:mt-25 mt-15 px-4 flex items-center relative">
                    <Image className="absolute -right-100 2xl:-top-100 top-0 z-0 w-[1300px] h-[700px] rounded-full" src="/work-light.svg" height={100} width={100} alt="work-light" />
                    <div className="z-20">
                        <div>
                            <h4 className={`2xl:text-16px xl:text-[14px] lg:text-[13px] text-[10px] font-semibold ${josefinSans.className} text-[#5DFFFF]`}>Featured  Project</h4>
                            <h2 className={`2xl:text-[34px] xl:text-[24px] lg:text-[22px] text-[16px] font-bold text-[#FAFAFA] ${josefinSans.className}`}>Example Project</h2>
                        </div>
                        <div className={`bg-[url(/work-bg.png)] xl:mt-13 mt-10 bg-cover bg-center z-50 2xl:w-[620px] 2xl:h-[165px] xl:w-[500px] xl:h-[130px] lg:w-[450px] lg:h-[120px] w-[300px] h-[100px] py-6 xl:px-10 lg:px-8 px-4 ${josefinSans.className} 2xl:text-[18px] xl:text-[14px] lg:text-[13px] text-[9px] font-normal`}>
                            Built a full-featured admin panel with Next.js, MongoDB, and NextAuth.js. Includes secure authentication, role-based access, dynamic dashboards, and full CRUD operations. Designed for scalability and real-time data handling.
                        </div>
                        <div className="flex gap-4 xl:mt-10 lg:mt-5 mt-3">
                            <GitHubButton />
                            <TwitterButton />
                            <LinkedInButton />
                        </div>
                        <Link
                            href="https://full-admin-delta.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="xl:mt-6 lg:mt-5 md:mt-3 2xl:w-[150px] xl:w-[100px] lg:w-[80px] md:w-[68px] flex items-center xl:gap-2 lg:gap-[6px] gap-1 bg-[#5B1F69] text-white 2xl:font-semibold text-[10px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 2xl:px-8 2xl:py-3 xl:px-4 xl:py-2 lg:px-3 lg:py-2 md:px-3 md:py-1 shadow-md hover:opacity-90 transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="2xl:w-4 2xl:h-4 xl:w-3 xl:h-3 lg:w-[10px] lg:h-[10px] w-2 h-2 fill-white"
                            >
                                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                            </svg>
                            Demo
                        </Link>
                    </div>
                    <div className="absolute right-0 lg:top-0 top-5 z-0">
                        <Image className="2xl:w-[583px] 2xl:h-[341px] xl:w-[450px] xl:h-[300px] lg:w-[400px] lg:h-[280px] w-[300px] h-[200px]" src="/work-1.svg" height={100} width={100} alt="work-1" />
                    </div>
                </div>



                <div className="2xl:max-w-6xl xl:max-w-4xl lg:max-w-3xl max-w-xl mx-auto 2xl:mt-50 xl:mt-30 mt-25 px-4 flex flex-row-reverse items-center relative">
                    <Image className="absolute lg:rotate-0 rotate-180 -left-150 -top-100 z-0 w-[1300px] h-[700px] rounded-full" src="/work-light.svg" height={100} width={100} alt="work-light" />
                    <div className="z-20">
                        <div>
                            <h4 className={`2xl:text-16px xl:text-[14px] lg:text-[13px] text-[10px] text-right font-semibold ${josefinSans.className} text-[#5DFFFF]`}>Featured  Project</h4>
                            <h2 className={`2xl:text-[34px] xl:text-[24px] lg:text-[22px] text-[16px] text-right font-bold text-[#FAFAFA] ${josefinSans.className}`}>Example Project</h2>
                        </div>
                        <div className={`bg-[url(/work-bg.png)] xl:mt-13 mt-10 bg-cover bg-center z-50 2xl:w-[620px] 2xl:h-[165px] xl:w-[500px] xl:h-[130px] lg:w-[450px] lg:h-[120px] w-[300px] h-[100px] py-6 xl:px-10 lg:px-8 px-4 ${josefinSans.className} 2xl:text-[18px] xl:text-[14px] lg:text-[13px] text-[9px] font-normal`}>
                            Built a modern e-commerce web app using Next.js, MongoDB, Mongoose, and Stripe. Users can browse products, manage their cart, and complete secure payments. Includes dynamic routing, API routes, and a fully functional checkout system.
                        </div>
                        <div className="flex justify-end gap-4 xl:mt-10 lg:mt-5 mt-3">
                            <GitHubButton />
                            <TwitterButton />
                            <LinkedInButton />
                        </div>
                        <div className="flex justify-end">
                            <Link
                                href="https://full-ecommerce-five-inky.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="xl:mt-6 lg:mt-5 md:mt-3 2xl:w-[150px] xl:w-[100px] lg:w-[80px] md:w-[68px] flex items-center xl:gap-2 lg:gap-[6px] gap-1 bg-[#5B1F69] text-white 2xl:font-semibold text-[10px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 2xl:px-8 2xl:py-3 xl:px-4 xl:py-2 lg:px-3 lg:py-2 md:px-3 md:py-1 shadow-md hover:opacity-90 transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="2xl:w-4 2xl:h-4 xl:w-3 xl:h-3 lg:w-[10px] lg:h-[10px] w-2 h-2 fill-white"
                                >
                                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                                </svg>
                                Demo
                            </Link>
                        </div>
                    </div>
                    <div className="absolute left-0 lg:top-0 top-5 z-0">
                        <Image className="2xl:w-[583px] 2xl:h-[341px] xl:w-[450px] xl:h-[300px] lg:w-[400px] lg:h-[280px] w-[300px] h-[200px]" src="/work-2.svg" height={100} width={100} alt="work-2" />
                    </div>
                </div>



                <div className="2xl:max-w-6xl xl:max-w-4xl lg:max-w-3xl max-w-xl mx-auto 2xl:mt-50 xl:mt-30 mt-25 px-4 flex items-center relative">
                    <Image className="absolute -right-100 -top-100 z-0 w-[1300px] h-[700px] rounded-full" src="/work-light.svg" height={100} width={100} alt="work-light" />
                    <div className="z-20">
                        <div>
                            <h4 className={`2xl:text-16px xl:text-[14px] lg:text-[13px] text-[10px] font-semibold ${josefinSans.className} text-[#5DFFFF]`}>Featured  Project</h4>
                            <h2 className={`2xl:text-[34px] xl:text-[24px] lg:text-[22px] text-[16px] font-bold text-[#FAFAFA] ${josefinSans.className}`}>Example Project</h2>
                        </div>
                        <div className={`bg-[url(/work-bg.png)] xl:mt-13 mt-10 bg-cover bg-center z-50 2xl:w-[620px] 2xl:h-[165px] xl:w-[500px] xl:h-[130px] lg:w-[450px] lg:h-[120px] w-[300px] h-[100px] py-6 xl:px-10 lg:px-8 px-4 ${josefinSans.className} 2xl:text-[18px] xl:text-[14px] lg:text-[13px] text-[9px] font-normal`}>
                            Built a fully responsive blog website using Next.js and Sanity CMS. Allows dynamic creation and management of posts with rich text, images, and categories. Integrated real-time content updates, SEO-friendly routing, and a clean, modern UI.
                        </div>
                        <div className="flex gap-4 xl:mt-10 lg:mt-5 mt-3">
                            <GitHubButton />
                            <TwitterButton />
                            <LinkedInButton />
                        </div>
                        <Link
                            href="https://full-stack-blog-rho.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="xl:mt-6 lg:mt-5 md:mt-3 2xl:w-[150px] xl:w-[100px] lg:w-[80px] md:w-[68px] flex items-center xl:gap-2 lg:gap-[6px] gap-1 bg-[#5B1F69] text-white 2xl:font-semibold text-[10px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 2xl:px-8 2xl:py-3 xl:px-4 xl:py-2 lg:px-3 lg:py-2 md:px-3 md:py-1 shadow-md hover:opacity-90 transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="2xl:w-4 2xl:h-4 xl:w-3 xl:h-3 lg:w-[10px] lg:h-[10px] w-2 h-2 fill-white"
                            >
                                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                            </svg>
                            Demo
                        </Link>
                    </div>
                    <div className="absolute right-0 lg:top-0 top-5 z-0">
                        <Image className="2xl:w-[583px] 2xl:h-[341px] xl:w-[450px] xl:h-[300px] lg:w-[400px] lg:h-[280px] w-[300px] h-[200px]" src="/work-3.svg" height={100} width={100} alt="work-3" />
                    </div>
                </div>



                <div className="2xl:max-w-6xl xl:max-w-4xl lg:max-w-3xl max-w-xl mx-auto 2xl:mt-50 xl:mt-30 mt-25 px-4 flex flex-row-reverse items-center relative">
                    <Image className="absolute lg:rotate-0 rotate-180 -left-150 -top-100 z-0 w-[1300px] h-[700px] rounded-full" src="/work-light.svg" height={100} width={100} alt="work-light" />
                    <div className="z-20">
                        <div>
                            <h4 className={`2xl:text-16px xl:text-[14px] lg:text-[13px] text-[10px] text-right font-semibold ${josefinSans.className} text-[#5DFFFF]`}>Featured  Project</h4>
                            <h2 className={`2xl:text-[34px] xl:text-[24px] lg:text-[22px] text-[16px] text-right font-bold text-[#FAFAFA] ${josefinSans.className}`}>Example Project</h2>
                        </div>
                        <div className={`bg-[url(/work-bg.png)] xl:mt-13 mt-10 bg-cover bg-center z-50 2xl:w-[620px] 2xl:h-[165px] xl:w-[500px] xl:h-[130px] lg:w-[450px] lg:h-[120px] w-[300px] h-[100px] py-6 xl:px-10 lg:px-8 px-4 ${josefinSans.className} 2xl:text-[18px] xl:text-[14px] lg:text-[13px] text-[9px] font-normal`}>
                            Built a gaming website using Next.js and Sanity CMS, with all content—games, media, and categories—managed dynamically through the CMS. Fast, responsive, and easy to update without code changes.
                        </div>
                        <div className="flex justify-end gap-4 xl:mt-10 lg:mt-5 mt-3">
                            <GitHubButton />
                            <TwitterButton />
                            <LinkedInButton />
                        </div>
                        <div className="flex justify-end">
                            <Link
                                href="https://age-mocha.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" xl:mt-6 lg:mt-5 md:mt-3 2xl:w-[150px] xl:w-[100px] lg:w-[80px] md:w-[68px] flex items-center xl:gap-2 lg:gap-[6px] gap-1 bg-[#5B1F69] text-white 2xl:font-semibold text-[10px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 2xl:px-8 2xl:py-3 xl:px-4 xl:py-2 lg:px-3 lg:py-2 md:px-3 md:py-1 shadow-md hover:opacity-90 transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="2xl:w-4 2xl:h-4 xl:w-3 xl:h-3 lg:w-[10px] lg:h-[10px] w-2 h-2 fill-white"
                                >
                                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                                </svg>
                                Demo
                            </Link>
                        </div>
                    </div>
                    <div className="absolute left-0 lg:top-0 top-5 z-0">
                        <Image className="2xl:w-[583px] 2xl:h-[341px] xl:w-[450px] xl:h-[300px] lg:w-[400px] lg:h-[280px] w-[300px] h-[200px]" src="/work-4.svg" height={100} width={100} alt="work-4" />
                    </div>
                </div>
            </section>




            {/* Mobile View */}
            <section id="work" className="md:hidden bg-[#100425] 2xl:py-20 py-15 overflow-hidden">
                <div className="flex flex-col items-center">
                    <h2 className={`2xl:text-[66px] xl:text-[46px] lg:text-[35px] text-[25px] font-semibold bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent ${josefinSans.className}`}>Recent Work</h2>
                    <p className={`${josefinSans.className} 2xl:text-[18px] xl:text-[16px] lg:text-[14px] text-[10px] font-normal text-center text-[#FAFAFA]`}>A collection of projects I've worked on.</p>
                </div>

                <div className="2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl max-w-2xl mx-auto 2xl:mt-50 xl:mt-30 lg:mt-25 mt-15 px-4 flex flex-col-reverse justify-center items-center relative">
                    <Image className="absolute -right-100 2xl:-top-100 top-0 z-0 w-[1300px] h-[700px] rounded-full" src="/work-light.svg" height={100} width={100} alt="work-light" />
                    <div className="z-20">
                        <div>
                            <h4 className={`2xl:text-16px xl:text-[14px] lg:text-[13px] text-[10px] font-semibold ${josefinSans.className} text-[#5DFFFF]`}>Featured  Project</h4>
                            <h2 className={`2xl:text-[34px] xl:text-[24px] lg:text-[22px] text-[16px] font-bold text-[#FAFAFA] ${josefinSans.className}`}>Example Project</h2>
                        </div>
                        <div className={`bg-[url(/work-bg.png)] xl:mt-13 mt-10 bg-cover bg-center z-50 2xl:w-[620px] 2xl:h-[165px] xl:w-[500px] xl:h-[130px] lg:w-[450px] lg:h-[120px] w-[300px] h-[100px] py-6 xl:px-10 lg:px-8 px-4 text-white ${josefinSans.className} 2xl:text-[18px] xl:text-[14px] lg:text-[13px] text-[9px] font-normal`}>
                            Built a full-featured admin panel with Next.js, MongoDB, and NextAuth.js. Includes secure authentication, role-based access, dynamic dashboards, and full CRUD operations. Designed for scalability and real-time data handling.
                        </div>
                        <div className="flex gap-4 xl:mt-10 lg:mt-5 mt-3">
                            <GitHubButton />
                            <TwitterButton />
                            <LinkedInButton />
                        </div>
                        <Link
                            href="https://full-admin-delta.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="xl:mt-6 lg:mt-5 mt-3 2xl:w-[150px] xl:w-[100px] lg:w-[80px] w-[68px] flex items-center xl:gap-2 lg:gap-[6px] gap-1 bg-[#5B1F69] text-white 2xl:font-semibold text-[10px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 2xl:px-8 2xl:py-3 xl:px-4 xl:py-2 lg:px-3 lg:py-2 px-3 py-1 shadow-md hover:opacity-90 transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="2xl:w-4 2xl:h-4 xl:w-3 xl:h-3 lg:w-[10px] lg:h-[10px] w-2 h-2 fill-white"
                            >
                                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                            </svg>
                            Demo
                        </Link>
                    </div>
                    <div className="">
                        <Image className="2xl:w-[583px] 2xl:h-[341px] xl:w-[450px] xl:h-[300px] lg:w-[400px] lg:h-[280px] w-[300px] h-[200px]" src="/work-1.svg" height={100} width={100} alt="work-1" />
                    </div>
                </div>



                <div className="2xl:max-w-5xl xl:max-w-3xl lg:max-w-2xl max-w-[450px] mx-auto 2xl:mt-50 xl:mt-30 mt-25 px-4 flex flex-col-reverse justify-center items-center relative">
                    <Image className="absolute lg:rotate-0 rotate-180 -left-150 -top-100 z-0 w-[1300px] h-[700px] rounded-full" src="/work-light.svg" height={100} width={100} alt="work-light" />
                    <div className="z-20">
                        <div>
                            <h4 className={`2xl:text-16px xl:text-[14px] lg:text-[13px] text-[10px] text-right font-semibold ${josefinSans.className} text-[#5DFFFF]`}>Featured  Project</h4>
                            <h2 className={`2xl:text-[34px] xl:text-[24px] lg:text-[22px] text-[16px] text-right font-bold text-[#FAFAFA] ${josefinSans.className}`}>Example Project</h2>
                        </div>
                        <div className={`bg-[url(/work-bg.png)] xl:mt-13 mt-10 bg-cover bg-center z-50 2xl:w-[620px] 2xl:h-[165px] xl:w-[500px] xl:h-[130px] lg:w-[450px] lg:h-[120px] w-[300px] h-[100px] py-6 xl:px-10 lg:px-8 px-4 text-white ${josefinSans.className} 2xl:text-[18px] xl:text-[14px] lg:text-[13px] text-[9px] font-normal`}>
                            Built a modern e-commerce web app using Next.js, MongoDB, Mongoose, and Stripe. Users can browse products, manage their cart, and complete secure payments. Includes dynamic routing, API routes, and a fully functional checkout system.
                        </div>
                        <div className="flex justify-end gap-4 xl:mt-10 lg:mt-5 mt-3">
                            <GitHubButton />
                            <TwitterButton />
                            <LinkedInButton />
                        </div>
                        <div className="flex justify-end">
                            <Link
                                href="https://full-ecommerce-five-inky.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="xl:mt-6 lg:mt-5 mt-3 2xl:w-[150px] xl:w-[100px] lg:w-[80px] w-[68px] flex items-center xl:gap-2 lg:gap-[6px] gap-1 bg-[#5B1F69] text-white 2xl:font-semibold text-[10px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 2xl:px-8 2xl:py-3 xl:px-4 xl:py-2 lg:px-3 lg:py-2 px-3 py-1 shadow-md hover:opacity-90 transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="2xl:w-4 2xl:h-4 xl:w-3 xl:h-3 lg:w-[10px] lg:h-[10px] w-2 h-2 fill-white"
                                >
                                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                                </svg>
                                Demo
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <Image className="2xl:w-[583px] 2xl:h-[341px] xl:w-[450px] xl:h-[300px] lg:w-[400px] lg:h-[280px] w-[300px] h-[200px]" src="/work-2.svg" height={100} width={100} alt="work-2" />
                    </div>
                </div>



                <div className="2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl max-w-2xl mx-auto 2xl:mt-50 xl:mt-30 mt-25 px-4 flex flex-col-reverse justify-center items-center relative">
                    <Image className="absolute -right-100 -top-100 z-0 w-[1300px] h-[700px] rounded-full" src="/work-light.svg" height={100} width={100} alt="work-light" />
                    <div className="z-20">
                        <div>
                            <h4 className={`2xl:text-16px xl:text-[14px] lg:text-[13px] text-[10px] font-semibold ${josefinSans.className} text-[#5DFFFF]`}>Featured  Project</h4>
                            <h2 className={`2xl:text-[34px] xl:text-[24px] lg:text-[22px] text-[16px] font-bold text-[#FAFAFA] ${josefinSans.className}`}>Example Project</h2>
                        </div>
                        <div className={`bg-[url(/work-bg.png)] xl:mt-13 mt-10 bg-cover bg-center z-50 2xl:w-[620px] 2xl:h-[165px] xl:w-[500px] xl:h-[130px] lg:w-[450px] lg:h-[120px] w-[300px] h-[100px] py-6 xl:px-10 lg:px-8 px-4 text-white ${josefinSans.className} 2xl:text-[18px] xl:text-[14px] lg:text-[13px] text-[9px] font-normal`}>
                            Built a fully responsive blog website using Next.js and Sanity CMS. Allows dynamic creation and management of posts with rich text, images, and categories. Integrated real-time content updates, SEO-friendly routing, and a clean, modern UI.
                        </div>
                        <div className="flex gap-4 xl:mt-10 lg:mt-5 mt-3">
                            <GitHubButton />
                            <TwitterButton />
                            <LinkedInButton />
                        </div>
                        <Link
                            href="https://full-stack-blog-rho.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="xl:mt-6 lg:mt-5 mt-3 2xl:w-[150px] xl:w-[100px] lg:w-[80px] w-[68px] flex items-center xl:gap-2 lg:gap-[6px] gap-1 bg-[#5B1F69] text-white 2xl:font-semibold text-[10px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 2xl:px-8 2xl:py-3 xl:px-4 xl:py-2 lg:px-3 lg:py-2 px-3 py-1 shadow-md hover:opacity-90 transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="2xl:w-4 2xl:h-4 xl:w-3 xl:h-3 lg:w-[10px] lg:h-[10px] w-2 h-2 fill-white"
                            >
                                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                            </svg>
                            Demo
                        </Link>
                    </div>
                    <div className="">
                        <Image className="2xl:w-[583px] 2xl:h-[341px] xl:w-[450px] xl:h-[300px] lg:w-[400px] lg:h-[280px] w-[300px] h-[200px]" src="/work-3.svg" height={100} width={100} alt="work-3" />
                    </div>
                </div>



                <div className="2xl:max-w-5xl xl:max-w-3xl lg:max-w-2xl max-w-[450px] mx-auto 2xl:mt-50 xl:mt-30 mt-25 px-4 flex flex-col-reverse justify-center items-center relative">
                    <Image className="absolute lg:rotate-0 rotate-180 -left-150 -top-100 z-0 w-[1300px] h-[700px] rounded-full" src="/work-light.svg" height={100} width={100} alt="work-light" />
                    <div className="z-20">
                        <div>
                            <h4 className={`2xl:text-16px xl:text-[14px] lg:text-[13px] text-[10px] text-right font-semibold ${josefinSans.className} text-[#5DFFFF]`}>Featured  Project</h4>
                            <h2 className={`2xl:text-[34px] xl:text-[24px] lg:text-[22px] text-[16px] text-right font-bold text-[#FAFAFA] ${josefinSans.className}`}>Example Project</h2>
                        </div>
                        <div className={`bg-[url(/work-bg.png)] xl:mt-13 mt-10 bg-cover bg-center z-50 2xl:w-[620px] 2xl:h-[165px] xl:w-[500px] xl:h-[130px] lg:w-[450px] lg:h-[120px] w-[300px] h-[100px] py-6 xl:px-10 lg:px-8 px-4 text-white ${josefinSans.className} 2xl:text-[18px] xl:text-[14px] lg:text-[13px] text-[9px] font-normal`}>
                            Built a gaming website using Next.js and Sanity CMS, with all content—games, media, and categories—managed dynamically through the CMS. Fast, responsive, and easy to update without code changes.
                        </div>
                        <div className="flex justify-end gap-4 xl:mt-10 lg:mt-5 mt-3">
                            <GitHubButton />
                            <TwitterButton />
                            <LinkedInButton />
                        </div>
                        <div className="flex justify-end">
                            <Link
                                href="https://age-mocha.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="xl:mt-6 lg:mt-5 mt-3 2xl:w-[150px] xl:w-[100px] lg:w-[80px] w-[68px] flex items-center xl:gap-2 lg:gap-[6px] gap-1 bg-[#5B1F69] text-white 2xl:font-semibold text-[10px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 2xl:px-8 2xl:py-3 xl:px-4 xl:py-2 lg:px-3 lg:py-2 px-3 py-1 shadow-md hover:opacity-90 transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="2xl:w-4 2xl:h-4 xl:w-3 xl:h-3 lg:w-[10px] lg:h-[10px] w-2 h-2 fill-white"
                                >
                                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                                </svg>
                                Demo
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <Image className="2xl:w-[583px] 2xl:h-[341px] xl:w-[450px] xl:h-[300px] lg:w-[400px] lg:h-[280px] w-[300px] h-[200px]" src="/work-4.svg" height={100} width={100} alt="work-4" />
                    </div>
                </div>
            </section>
        </div>
    )
}

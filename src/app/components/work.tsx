"use client"
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { josefinSans } from "../fonts";
import { GitHubButton, LinkedInButton, TwitterButton } from "./icons";

const containerVariants:Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export default function Work() {
    const projects = [
        {
            title: "Example Project",
            desc: "Built a full-featured admin panel with Next.js, MongoDB, and NextAuth.js. Includes secure authentication, role-based access, dynamic dashboards, and full CRUD operations.",
            link: "https://full-admin-delta.vercel.app/",
            img: "/work-1.svg",
        },
        {
            title: "Example Project",
            desc: "Built a modern e-commerce web app using Next.js, MongoDB, Mongoose, and Stripe. Users can browse products, manage their cart, and complete secure payments.",
            link: "https://full-ecommerce-five-inky.vercel.app/",
            img: "/work-2.svg",
        },
        {
            title: "Example Project",
            desc: "Built a responsive blog site using Next.js and Sanity CMS. Manage posts dynamically with rich content and images. Includes SEO-friendly routing and real-time updates.",
            link: "https://full-stack-blog-rho.vercel.app/",
            img: "/work-3.svg",
        },
        {
            title: "Example Project",
            desc: "Built a gaming website using Next.js and Sanity CMS, with all content managed dynamically. Fast, responsive, and easily updatable without coding.",
            link: "https://age-mocha.vercel.app/",
            img: "/work-4.svg",
        },
    ];
    return (
        <div>
            <section
                id="work"
                className="hidden md:block bg-[#100425] 2xl:py-20 py-15 z-20 overflow-hidden"
            >
                <motion.div
                    className="flex flex-col items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.h2
                        variants={itemVariants}
                        className={`2xl:text-[66px] xl:text-[46px] lg:text-[35px] text-[25px] font-semibold bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent ${josefinSans.className}`}
                    >
                        Recent Work
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className={`${josefinSans.className} 2xl:text-[18px] xl:text-[16px] lg:text-[14px] text-[10px] font-normal text-center text-[#FAFAFA]`}
                    >
                        A collection of projects I've worked on.
                    </motion.p>
                </motion.div>

                {/* 🧩 Repeatable Project Section Start */}
                {[...Array(4)].map((_, i) => {
                    const projects = [
                        {
                            title: "Example Project",
                            description:
                                "Built a full-featured admin panel with Next.js, MongoDB, and NextAuth.js. Includes secure authentication, role-based access, dynamic dashboards, and full CRUD operations. Designed for scalability and real-time data handling.",
                            link: "https://full-admin-delta.vercel.app/",
                            img: "/work-1.svg",
                            light: "/work-light.svg",
                            reverse: false,
                        },
                        {
                            title: "Example Project",
                            description:
                                "Built a modern e-commerce web app using Next.js, MongoDB, Mongoose, and Stripe. Users can browse products, manage their cart, and complete secure payments. Includes dynamic routing, API routes, and a fully functional checkout system.",
                            link: "https://full-ecommerce-five-inky.vercel.app/",
                            img: "/work-2.svg",
                            light: "/work-light.svg",
                            reverse: true,
                        },
                        {
                            title: "Example Project",
                            description:
                                "Built a fully responsive blog website using Next.js and Sanity CMS. Allows dynamic creation and management of posts with rich text, images, and categories. Integrated real-time content updates, SEO-friendly routing, and a clean, modern UI.",
                            link: "https://full-stack-blog-rho.vercel.app/",
                            img: "/work-3.svg",
                            light: "/work-light.svg",
                            reverse: false,
                        },
                        {
                            title: "Example Project",
                            description:
                                "Built a gaming website using Next.js and Sanity CMS, with all content—games, media, and categories—managed dynamically through the CMS. Fast, responsive, and easy to update without code changes.",
                            link: "https://age-mocha.vercel.app/",
                            img: "/work-4.svg",
                            light: "/work-light.svg",
                            reverse: true,
                        },
                    ];

                    const project = projects[i];
                    const isReverse = project.reverse;

                    return (
                        <motion.div
                            key={i}
                            className={`2xl:max-w-6xl xl:max-w-4xl lg:max-w-3xl max-w-xl mx-auto 2xl:mt-50 xl:mt-30 mt-25 px-4 flex ${isReverse ? "flex-row-reverse" : ""
                                } items-center relative`}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {/* Background Light */}
                            <Image
                                className={`absolute ${isReverse ? "-left-150 lg:rotate-0 rotate-180" : "-right-100"
                                    } -top-100 z-0 w-[1300px] h-[700px] rounded-full`}
                                src={project.light}
                                width={100}
                                height={100}
                                alt="work-light"
                            />

                            {/* Project Content */}
                            <motion.div className="z-20" variants={itemVariants}>
                                <motion.h4
                                    variants={itemVariants}
                                    className={`2xl:text-16px xl:text-[14px] lg:text-[13px] text-[10px] ${isReverse ? "text-right" : ""
                                        } font-semibold ${josefinSans.className} text-[#5DFFFF]`}
                                >
                                    Featured Project
                                </motion.h4>
                                <motion.h2
                                    variants={itemVariants}
                                    className={`2xl:text-[34px] xl:text-[24px] lg:text-[22px] text-[16px] ${isReverse ? "text-right" : ""
                                        } font-bold text-[#FAFAFA] ${josefinSans.className}`}
                                >
                                    {project.title}
                                </motion.h2>
                                <motion.div
                                    variants={itemVariants}
                                    className={`bg-[url(/work-bg.png)] xl:mt-13 mt-10 bg-cover bg-center z-50 2xl:w-[620px] 2xl:h-[165px] xl:w-[500px] xl:h-[130px] lg:w-[450px] lg:h-[120px] w-[300px] h-[100px] py-6 xl:px-10 lg:px-8 px-4 ${josefinSans.className
                                        } 2xl:text-[18px] xl:text-[14px] lg:text-[13px] text-[9px] font-normal`}
                                >
                                    {project.description}
                                </motion.div>

                                {/* Buttons */}
                                <motion.div
                                    variants={itemVariants}
                                    className={`flex ${isReverse ? "justify-end" : ""} gap-4 xl:mt-10 lg:mt-5 mt-3`}
                                >
                                    <GitHubButton />
                                    <TwitterButton />
                                    <LinkedInButton />
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    className={`flex ${isReverse ? "justify-end" : ""}`}
                                >
                                    <Link
                                        href={project.link}
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
                                </motion.div>
                            </motion.div>

                            {/* Image Side */}
                            <Image
                                className={`absolute ${isReverse ? "left-0" : "right-0"} lg:top-0 top-5 z-0 2xl:w-[583px] 2xl:h-[341px] xl:w-[450px] xl:h-[300px] lg:w-[400px] lg:h-[280px] w-[300px] h-[200px]`}
                                src={project.img}
                                height={100}
                                width={100}
                                alt="work"
                            />
                        </motion.div>
                    );
                })}
                {/* 🧩 Repeatable Project Section End */}
            </section>



            {/* Mobile View */}
            <section id="work" className="md:hidden bg-[#100425] py-15 overflow-hidden">
                <motion.div
                    className="flex flex-col items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2
                        variants={itemVariants}
                        className={`text-[25px] font-semibold bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent ${josefinSans.className}`}
                    >
                        Recent Work
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className={`${josefinSans.className} text-[10px] font-normal text-center text-[#FAFAFA]`}
                    >
                        A collection of projects I've worked on.
                    </motion.p>
                </motion.div>

                {/* Loop through projects */}
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="max-w-[450px] mx-auto mt-20 px-4 flex flex-col-reverse justify-center items-center relative"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* Light background */}
                        <Image
                            className={`absolute ${index % 2 === 0 ? "-right-100" : "-left-150 rotate-180"
                                } -top-100 z-0 w-[1300px] h-[700px] rounded-full`}
                            src="/work-light.svg"
                            width={100}
                            height={100}
                            alt="work-light"
                        />

                        <motion.div className="z-20" variants={itemVariants}>
                            <motion.h4
                                variants={itemVariants}
                                className={`text-[10px] font-semibold ${josefinSans.className} text-[#5DFFFF] ${index % 2 !== 0 ? "text-right" : ""
                                    }`}
                            >
                                Featured Project
                            </motion.h4>
                            <motion.h2
                                variants={itemVariants}
                                className={`text-[16px] font-bold text-[#FAFAFA] ${josefinSans.className} ${index % 2 !== 0 ? "text-right" : ""
                                    }`}
                            >
                                {project.title}
                            </motion.h2>

                            <motion.div
                                variants={itemVariants}
                                className={`bg-[url(/work-bg.png)] mt-10 bg-cover bg-center z-50 w-[300px] h-[100px] py-6 px-4 text-white ${josefinSans.className} text-[9px] font-normal`}
                            >
                                {project.desc}
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className={`flex gap-4 mt-3 ${index % 2 !== 0 ? "justify-end" : ""}`}
                            >
                                <GitHubButton />
                                <TwitterButton />
                                <LinkedInButton />
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className={`flex mt-3 ${index % 2 !== 0 ? "justify-end" : ""}`}
                            >
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[68px] flex items-center gap-1 bg-[#5B1F69] text-white text-[10px] px-3 py-1 shadow-md hover:opacity-90 transition"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-2 h-2 fill-white"
                                    >
                                        <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                                    </svg>
                                    Demo
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Project Image */}
                        <Image
                            className="w-[300px] h-[200px]"
                            src={project.img}
                            width={100}
                            height={100}
                            alt={`work-${index + 1}`}
                        />
                    </motion.div>
                ))}
            </section>
        </div>
    );
}




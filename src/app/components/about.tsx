"use client";

import Image from "next/image";
import { josefinSans } from "../fonts";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function About() {
    const skills = [
        {
            name: "HTML",
            icon: "/html.png",
            desc: "HTML (HyperText Markup Language) is the foundational language for creating structured content on the web. I use semantic HTML elements to build accessible, SEO-friendly, and maintainable layouts that serve as the backbone of every user interface.",
        },
        {
            name: "CSS",
            icon: "/css.png",
            desc: "CSS (Cascading Style Sheets) controls the visual presentation of web content. I use it to create responsive, accessible, and pixel-perfect designs, ensuring a consistent look and feel very good across devices while enhancing user experience.",
        },
        {
            name: "JavaScript",
            icon: "/javascript.webp",
            desc: "JavaScript is the core scripting language of the web, enabling dynamic, interactive behavior in applications. I use it to manipulate the DOM, handle events, fetch APIs, and build rich user experiences across both frontend and backend environments.",
        },
        {
            name: "Tailwind CSS",
            icon: "/tailwind.png",
            desc: "Tailwind CSS is a utility-first framework that allows rapid UI development directly in markup. I use it to build responsive, consistent, and customizable designs efficiently, all while maintaining clean and scalable code without writing custom CSS.",
        },
        {
            name: "Git",
            icon: "/git.png",
            desc: "Git is a distributed version control system that I use to track changes, manage code history, and collaborate effectively with teams. It enables me to experiment confidently, roll back changes when needed, and maintain clean development workflows.",
        },
        {
            name: "GitHub",
            icon: "/github.png",
            desc: "GitHub is a cloud-based platform for hosting Git repositories. I use it to collaborate with teams, manage issues, contribute to open-source, and streamline development workflows through pull requests, actions, and code reviews.",
        },
        {
            name: "Next.js",
            icon: "/nextjs.png",
            desc: "Next.js is a powerful React framework for building fast, scalable web applications with features like server-side rendering, static site generation, and API routes. I use it to develop SEO-friendly, high-performance apps with clean architecture.",
        },
        {
            name: "React",
            icon: "/react.webp",
            desc: "React is a JavaScript library for building dynamic and component-based user interfaces. I use it to create interactive, reusable, and efficient front-end applications, leveraging hooks, state management, and virtual DOM for seamless user experiences.",
        },
        {
            name: "Node.js",
            icon: "/nodejs.png",
            desc: "Node.js is a runtime environment that allows JavaScript to run on the server. I use it to build fast, scalable, and event-driven backend applications, enabling real-time data handling and efficient API development using tools like Express.js and Mongoose.",
        },
        {
            name: "MongoDB",
            icon: "/mongodb.png",
            desc: "MongoDB is a flexible NoSQL database that stores data in JSON-like documents. I use it to design scalable, schema-less data models for modern web applications, allowing efficient querying and seamless integration with Node.js and Mongoose.",
        },
        {
            name: "Sanity CMS",
            icon: "/sanity.avif",
            desc: "Sanity is a headless CMS that offers real-time content editing and structured data management. I use it to create customizable content models and seamlessly integrate dynamic content into modern front-end applications like those built with Next.js.",
        },
        {
            name: "Express.js",
            icon: "/express.png",
            desc: "Express.js is a minimal and flexible Node.js web framework that simplifies the development of robust backend services. I use it to build RESTful APIs, manage middleware, route requests, and handle server-side logic efficiently.",

        },
        {
            name: "Redux",
            icon: "/redux.png",
            desc: "Redux is a predictable state management library for JavaScript applications. I use it to manage complex application states in React projects, ensuring a single source of truth, consistent data flow, and easier debugging through tools like Redux DevTools.",
        },
        {
            name: "TypeScript",
            icon: "/typescript.png",
            desc: "TypeScript is a statically typed superset of JavaScript that enhances code quality and developer productivity. I use it to catch errors early, improve code readability, and build scalable applications with strong typing and robust tooling support.",
        },
    ];

    return (
        <section
            id="about"
            className={`bg-[#100425] flex flex-col px-6 items-center relative overflow-hidden ${josefinSans.className}`}
        >
            {/* Background Image */}
            <Image
                className="pointer-events-none absolute right-0 top-[-50px] lg:top-[-70px] 2xl:top-[-100px] w-[300px] h-[280px] lg:w-[450px] lg:h-[420px] xl:w-[570px] xl:h-[537px] 2xl:w-[670px] 2xl:h-[737px]"
                src="/line-box.svg"
                height={100}
                width={100}
                alt="line-box"
            />

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:max-w-4xl max-w-[650px] mx-auto text-center pt-16"
            >
                <h2 className="text-transparent bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text font-semibold text-[25px] lg:text-[35px] xl:text-[46px] 2xl:text-[66px]">
                    About
                </h2>
                <p className="text-[#FAFAFA] text-[10px] lg:text-[13px] xl:text-[14px] 2xl:text-[18px] leading-relaxed lg:leading-[25px] xl:leading-[30px] pt-5 2xl:pt-10 font-light">
                    As a full stack developer, I work across the entire development lifecycle using technologies like React, Next.js, Node.js, and MongoDB. I enjoy solving complex problems, optimizing performance, and delivering solid user experiences. I have hands-on experience building responsive front-end interfaces, developing secure and scalable back-end systems, and integrating APIs and databases to create seamless, full-featured applications. I follow modern coding standards, prioritize clean and maintainable code, and enjoy collaborating with teams to turn ideas into real products.
                </p>
            </motion.div>

            {/* Skills Carousel */}
            <div className="lg:w-full sm:w-[540px] w-[100%] px-4 lg:px-16 2xl:px-40 mt-14 custom-swiper">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        639: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="!pb-20 lg:mb-20"
                >
                    {skills.map((skill, index) => (
                        <SwiperSlide key={index} className="h-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="2xl:h-[320px] xl:h-[300px] lg:h-[280px] md:h-[220px] h-[230px]  flex flex-col justify-between bg-[#1a1a2e]/80 hover:bg-[#23233b]/90 backdrop-blur-sm border border-gray-700 hover:border-[#5DFFFF] rounded-2xl xl:px-6 px-4 lg:py-8 py-6 shadow-xl text-center transition-all duration-300"
                            >
                                <div className="relative w-16 h-16 rounded-full bg-gray-700 p-3 shadow-md mx-auto">
                                    <Image
                                        src={skill.icon}
                                        alt={skill.name}
                                        width={50}
                                        height={50}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <h3 className="text-[#5DFFFF] 2xl:text-xl xl:text-[18px] lg:text-[16px] text-[14px] font-semibold">{skill.name}</h3>
                                <p className="2xl:text-lg xl:text-[14px] lg:text-[12px] text-[10px] text-gray-300 leading-snug">{skill.desc}</p>
                            </motion.div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </section>
    );
}

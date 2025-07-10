import Image from "next/image";
import { josefinSans } from "../fonts";

export default function About() {
    const skills = [
        { name: "HTML", icon: "/html.png" },
        { name: "CSS", icon: "/css.png" },
        { name: "JavaScript", icon: "/javascript.webp" },
        { name: "Tailwind CSS", icon: "/tailwind.png" },
        { name: "Git", icon: "/git.png" },
        { name: "GitHub", icon: "/github.png" },
        { name: "Next.js", icon: "/nextjs.png" },
        { name: "React", icon: "/react.webp" },
        { name: "Node.js", icon: "/nodejs.png" },
        { name: "MongoDB", icon: "/mongodb.png" },
        { name: "Mongoose", icon: "/mongoose.png" },
        { name: "Sanity CMS", icon: "/sanity.avif" },
        { name: "Express.js", icon: "/express.png" },
        { name: "Redux", icon: "/redux.png" },
        { name: "TypeScript", icon: "/typescript.png" },
    ];
    return (
        <section id="about" className={`bg-[#100425] flex flex-col px-6 items-center relative ${josefinSans.className}`}>
            <Image className="2xl:w-[670px] 2xl:h-[737px] xl:w-[570px] xl:h-[537px] lg:w-[450px] lg:h-[420px] w-[300px] h-[280px] 2xl:top-[-100] lg:top-[-70] top-[-50] absolute right-0" src="/line-box.svg" height={100} width={100} alt="line-box" />
            <div className="xl:max-w-[900px] lg:max-w-[700px] max-w-[500px] mx-auto lg:pt-20 pt-10 flex flex-col items-center text-center">
                <h2 className="2xl:text-[66px] xl:text-[46px] lg:text-[35px] text-[25px] font-semibold bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent">About</h2>
                <p className="2xl:text-[18px] xl:text-[14px] lg:text-[13px] text-[10px] font-normal lg:leading-[25px] xl:leading-[30px] text-[#FAFAFA] 2xl:pt-10 pt-5">As a full stack developer, I work across the entire development lifecycle using technologies like React, Next.js, Node.js, and MongoDB. I enjoy solving complex problems, optimizing performance, and delivering solid user experiences. I have hands-on experience building responsive front-end interfaces, developing secure and scalable back-end systems, and integrating APIs and databases to create seamless, full-featured applications. I follow modern coding standards, prioritize clean and maintainable code, and enjoy collaborating with teams to turn ideas into real products.</p>
            </div>
            <div className="2xl:py-30 py-10">
                {/* Skills Grid */}
                <div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:gap-10 lg:gap-6 gap-4"
                >
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-gray-800 2xl:p-3 xl:p-[9px] lg:p-2 px-[6px] py-[4px] rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl border border-gray-700"
                        >
                            {/* Icon */}
                            <div className="relative 2xl:w-16 2xl:h-16 xl:w-12 xl:h-12 lg:w-10 lg:h-10 w-8 h-8 bg-gray-500 2xl:p-3 p-2 rounded-full shadow-lg">
                                <Image src={skill.icon} alt={skill.name} width={50} height={50} className="w-full h-full object-contain" />
                            </div>

                            {/* Skill Name */}
                            <p className="2xl:text-lg xl:text-[14px] lg:text-[12px] text-[10px] xl:font-semibold text-gray-300 mt-3">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
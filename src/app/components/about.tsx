import Image from "next/image";
import { josefinSans } from "../fonts";

export default function About() {
    return (
        <section id="about" className={`bg-[#100425] flex flex-col px-6 items-center relative ${josefinSans.className}`}>
            <Image className="2xl:w-[670px] 2xl:h-[737px] xl:w-[570px] xl:h-[537px] lg:w-[450px] lg:h-[420px] w-[300px] h-[280px] 2xl:top-[-100] lg:top-[-70] top-[-50] absolute right-0" src="/line-box.svg" height={100} width={100} alt="line-box"/>
            <div className="xl:max-w-[900px] lg:max-w-[700px] max-w-[500px] mx-auto lg:pt-20 pt-10 flex flex-col items-center text-center">
                <h2 className="2xl:text-[66px] xl:text-[46px] lg:text-[35px] text-[25px] font-semibold bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent">About</h2>
                <p className="2xl:text-[18px] xl:text-[14px] lg:text-[13px] text-[10px] font-normal lg:leading-[25px] xl:leading-[30px] text-[#FAFAFA] 2xl:pt-10 pt-5">As a full stack developer, I work across the entire development lifecycle using technologies like React, Next.js, Node.js, and MongoDB. I enjoy solving complex problems, optimizing performance, and delivering solid user experiences. I have hands-on experience building responsive front-end interfaces, developing secure and scalable back-end systems, and integrating APIs and databases to create seamless, full-featured applications. I follow modern coding standards, prioritize clean and maintainable code, and enjoy collaborating with teams to turn ideas into real products.</p>
            </div>
            <div className="2xl:py-30 py-10">
                <Image className="2xl:w-[895px] xl:w-[695px] lg:w-[600px] w-[400px]" src="/skills (1).svg" height={100} width={100} alt="skills"/>
            </div>
        </section>
    )
}
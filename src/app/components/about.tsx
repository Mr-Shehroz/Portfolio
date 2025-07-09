import Image from "next/image";
import { josefinSans } from "../fonts";

export default function About() {
    return (
        <section id="about" className={`bg-[#100425] flex flex-col items-center relative ${josefinSans.className}`}>
            <Image className="w-[670px] h-[737px] top-[-100] absolute right-0" src="/line-box.svg" height={100} width={100} alt="line-box"/>
            <div className="max-w-[900px] mx-auto pt-20 flex flex-col items-center text-center">
                <h2 className="text-[66px] font-semibold bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent">About</h2>
                <p className="text-[18px] font-normal leading-[30px] text-[#FAFAFA] pt-10">As a full stack developer, I work across the entire development lifecycle using technologies like React, Next.js, Node.js, and MongoDB. I enjoy solving complex problems, optimizing performance, and delivering solid user experiences. I have hands-on experience building responsive front-end interfaces, developing secure and scalable back-end systems, and integrating APIs and databases to create seamless, full-featured applications. I follow modern coding standards, prioritize clean and maintainable code, and enjoy collaborating with teams to turn ideas into real products.</p>
            </div>
            <div className="py-30">
                <Image className="w-[895px]" src="/skills.svg" height={100} width={100} alt="skills"/>
            </div>
        </section>
    )
}
import Image from "next/image";
import { josefinSans } from "../fonts";
import { GitHubButton, LinkedInButton, TwitterButton } from "./icons";
export default function Footer() {
    return (
        <footer className="bg-[#100425] py-10">
            <Image className="w-[80%] mx-auto" src="/footer-line.svg" height={100} width={100} alt="Footer line" />
            <div className="max-w-7xl mx-auto flex items-center justify-between mt-6">
                <h4 className={`text-[18px] font-light text-[#FAFAFA] ${josefinSans.className}`}>2024 - Shehroz Khan, All rights reserved</h4>
                <div className="flex items-center gap-4">
                    <GitHubButton/>
                    <TwitterButton/>
                    <LinkedInButton/>
                </div>
            </div>
        </footer>
    )
}
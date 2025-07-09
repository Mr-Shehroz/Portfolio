import Image from "next/image";
import { josefinSans } from "../fonts";
import { GitHubButton, LinkedInButton, TwitterButton } from "./icons";

export default function Work() {
    return (
        <section id="work" className="bg-[#100425] py-20 z-50 overflow-hidden">
            <div className="flex flex-col items-center">
                <h2 className={`text-[66px] font-semibold bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent ${josefinSans.className}`}>Recent Work</h2>
                <p className={`${josefinSans.className} text-[18px] font-normal text-center text-[#FAFAFA]`}>A collection of projects I've worked on.</p>
            </div>

            <div className="max-w-7xl mx-auto mt-50 px-4 flex items-center relative">
                <Image className="absolute -right-100 -top-100 z-0 w-[1300px] h-[700px] rounded-full" src="/work-light.svg" height={100} width={100} alt="work-light" />
                <div className="z-50">
                    <div>
                        <h4 className={`text-16px font-semibold ${josefinSans.className} text-[#5DFFFF]`}>Featured  Project</h4>
                        <h2 className={`text-[34px] font-bold text-[#FAFAFA] ${josefinSans.className}`}>Example Project</h2>
                    </div>
                    <div className={`bg-[url(/work-bg.png)] mt-13 bg-cover bg-center z-50 w-[620px] h-[165px] py-6 px-10 ${josefinSans.className} text-[18px] font-normal`}>
                        A web app for visualizing personalized Spotify data. View your
                        top artists, top tracks, recently played tracks, and detailed audio
                        information about each track. Create and save new playlists of
                        recommended tracks based on your existing playlists and more.
                    </div>
                    <div className="flex gap-4 mt-10">
                        <GitHubButton />
                        <TwitterButton />
                        <LinkedInButton />
                    </div>
                </div>
                <div className="absolute right-30 top-0 z-0">
                    <Image className="w-[583px] h-[341px]" src="/work-1.svg" height={100} width={100} alt="work-1" />
                </div>
            </div>



            <div className="max-w-5xl mx-auto mt-50 px-4 flex flex-row-reverse items-center relative">
                <Image className="absolute -left-150 -top-100 z-0 w-[1300px] h-[700px] rounded-full" src="/work-light.svg" height={100} width={100} alt="work-light" />
                <div className="z-50">
                    <div>
                        <h4 className={`text-16px text-right font-semibold ${josefinSans.className} text-[#5DFFFF]`}>Featured  Project</h4>
                        <h2 className={`text-[34px] text-right font-bold text-[#FAFAFA] ${josefinSans.className}`}>Example Project</h2>
                    </div>
                    <div className={`bg-[url(/work-bg.png)] mt-13 bg-cover bg-center z-50 w-[620px] h-[165px] py-6 px-10 ${josefinSans.className} text-[18px] font-normal`}>
                        A web app for visualizing personalized Spotify data. View your
                        top artists, top tracks, recently played tracks, and detailed audio
                        information about each track. Create and save new playlists of
                        recommended tracks based on your existing playlists and more.
                    </div>
                    <div className="flex justify-end gap-4 mt-10">
                        <GitHubButton />
                        <TwitterButton />
                        <LinkedInButton />
                    </div>
                </div>
                <div className="absolute -left-30 top-0 z-0">
                    <Image className="w-[583px] h-[341px]" src="/work-2.svg" height={100} width={100} alt="work-2" />
                </div>
            </div>



            <div className="max-w-7xl mx-auto mt-50 px-4 flex items-center relative">
                <Image className="absolute -right-100 -top-100 z-0 w-[1300px] h-[700px] rounded-full" src="/work-light.svg" height={100} width={100} alt="work-light" />
                <div className="z-50">
                    <div>
                        <h4 className={`text-16px font-semibold ${josefinSans.className} text-[#5DFFFF]`}>Featured  Project</h4>
                        <h2 className={`text-[34px] font-bold text-[#FAFAFA] ${josefinSans.className}`}>Example Project</h2>
                    </div>
                    <div className={`bg-[url(/work-bg.png)] mt-13 bg-cover bg-center z-50 w-[620px] h-[165px] py-6 px-10 ${josefinSans.className} text-[18px] font-normal`}>
                        A web app for visualizing personalized Spotify data. View your
                        top artists, top tracks, recently played tracks, and detailed audio
                        information about each track. Create and save new playlists of
                        recommended tracks based on your existing playlists and more.
                    </div>
                    <div className="flex gap-4 mt-10">
                        <GitHubButton />
                        <TwitterButton />
                        <LinkedInButton />
                    </div>
                </div>
                <div className="absolute right-30 top-0 z-0">
                    <Image className="w-[583px] h-[341px]" src="/work-3.svg" height={100} width={100} alt="work-3" />
                </div>
            </div>



            <div className="max-w-5xl mx-auto mt-50 px-4 flex flex-row-reverse items-center relative">
                <Image className="absolute -left-150 -top-100 z-0 w-[1300px] h-[700px] rounded-full" src="/work-light.svg" height={100} width={100} alt="work-light" />
                <div className="z-50">
                    <div>
                        <h4 className={`text-16px text-right font-semibold ${josefinSans.className} text-[#5DFFFF]`}>Featured  Project</h4>
                        <h2 className={`text-[34px] text-right font-bold text-[#FAFAFA] ${josefinSans.className}`}>Example Project</h2>
                    </div>
                    <div className={`bg-[url(/work-bg.png)] mt-13 bg-cover bg-center z-50 w-[620px] h-[165px] py-6 px-10 ${josefinSans.className} text-[18px] font-normal`}>
                        A web app for visualizing personalized Spotify data. View your
                        top artists, top tracks, recently played tracks, and detailed audio
                        information about each track. Create and save new playlists of
                        recommended tracks based on your existing playlists and more.
                    </div>
                    <div className="flex justify-end gap-4 mt-10">
                        <GitHubButton />
                        <TwitterButton />
                        <LinkedInButton />
                    </div>
                </div>
                <div className="absolute -left-30 top-0 z-0">
                    <Image className="w-[583px] h-[341px]" src="/work-4.svg" height={100} width={100} alt="work-4" />
                </div>
            </div>
        </section>
    )
}

import Image from "next/image";
import { josefinSans } from "../fonts";
import { GitHubButton, LinkedInButton, TwitterButton } from "./icons";

export default function Work() {
    return (
        <div>
            <section id="work" className="hidden md:block bg-[#100425] 2xl:py-20 py-15 z-50 overflow-hidden">
                <div className="flex flex-col items-center">
                    <h2 className={`2xl:text-[66px] xl:text-[46px] lg:text-[35px] text-[25px] font-semibold bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent ${josefinSans.className}`}>Recent Work</h2>
                    <p className={`${josefinSans.className} 2xl:text-[18px] xl:text-[16px] lg:text-[14px] text-[10px] font-normal text-center text-[#FAFAFA]`}>A collection of projects I've worked on.</p>
                </div>

                <div className="2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl max-w-2xl mx-auto 2xl:mt-50 xl:mt-30 lg:mt-25 mt-15 px-4 flex items-center relative">
                    <Image className="absolute -right-100 2xl:-top-100 top-0 z-0 w-[1300px] h-[700px] rounded-full" src="/work-light.svg" height={100} width={100} alt="work-light" />
                    <div className="z-50">
                        <div>
                            <h4 className={`2xl:text-16px xl:text-[14px] lg:text-[13px] text-[10px] font-semibold ${josefinSans.className} text-[#5DFFFF]`}>Featured  Project</h4>
                            <h2 className={`2xl:text-[34px] xl:text-[24px] lg:text-[22px] text-[16px] font-bold text-[#FAFAFA] ${josefinSans.className}`}>Example Project</h2>
                        </div>
                        <div className={`bg-[url(/work-bg.png)] xl:mt-13 mt-10 bg-cover bg-center z-50 2xl:w-[620px] 2xl:h-[165px] xl:w-[500px] xl:h-[130px] lg:w-[450px] lg:h-[120px] w-[300px] h-[100px] py-6 xl:px-10 lg:px-8 px-4 ${josefinSans.className} 2xl:text-[18px] xl:text-[14px] lg:text-[13px] text-[9px] font-normal`}>
                            A web app for visualizing personalized Spotify data. View your
                            top artists, top tracks, recently played tracks, and detailed audio
                            information about each track. Create and save new playlists of
                            recommended tracks based on your existing playlists and more.
                        </div>
                        <div className="flex gap-4 xl:mt-10 lg:mt-5 mt-3">
                            <GitHubButton />
                            <TwitterButton />
                            <LinkedInButton />
                        </div>
                    </div>
                    <div className="absolute xl:right-30 right-20 lg:top-0 top-5 z-0">
                        <Image className="2xl:w-[583px] 2xl:h-[341px] xl:w-[450px] xl:h-[300px] lg:w-[400px] lg:h-[280px] w-[300px] h-[200px]" src="/work-1.svg" height={100} width={100} alt="work-1" />
                    </div>
                </div>



                <div className="2xl:max-w-5xl xl:max-w-3xl lg:max-w-2xl max-w-[450px] ml-[180px] lg:mx-auto 2xl:mt-50 xl:mt-30 mt-25 px-4 flex flex-row-reverse items-center relative">
                    <Image className="absolute lg:rotate-0 rotate-180 -left-150 -top-100 z-0 w-[1300px] h-[700px] rounded-full" src="/work-light.svg" height={100} width={100} alt="work-light" />
                    <div className="z-50">
                        <div>
                            <h4 className={`2xl:text-16px xl:text-[14px] lg:text-[13px] text-[10px] text-right font-semibold ${josefinSans.className} text-[#5DFFFF]`}>Featured  Project</h4>
                            <h2 className={`2xl:text-[34px] xl:text-[24px] lg:text-[22px] text-[16px] text-right font-bold text-[#FAFAFA] ${josefinSans.className}`}>Example Project</h2>
                        </div>
                        <div className={`bg-[url(/work-bg.png)] xl:mt-13 mt-10 bg-cover bg-center z-50 2xl:w-[620px] 2xl:h-[165px] xl:w-[500px] xl:h-[130px] lg:w-[450px] lg:h-[120px] w-[300px] h-[100px] py-6 xl:px-10 lg:px-8 px-4 ${josefinSans.className} 2xl:text-[18px] xl:text-[14px] lg:text-[13px] text-[9px] font-normal`}>
                            A web app for visualizing personalized Spotify data. View your
                            top artists, top tracks, recently played tracks, and detailed audio
                            information about each track. Create and save new playlists of
                            recommended tracks based on your existing playlists and more.
                        </div>
                        <div className="flex justify-end gap-4 xl:mt-10 lg:mt-5 mt-3">
                            <GitHubButton />
                            <TwitterButton />
                            <LinkedInButton />
                        </div>
                    </div>
                    <div className="absolute -left-30 lg:top-0 top-5 z-0">
                        <Image className="2xl:w-[583px] 2xl:h-[341px] xl:w-[450px] xl:h-[300px] lg:w-[400px] lg:h-[280px] w-[300px] h-[200px]" src="/work-2.svg" height={100} width={100} alt="work-2" />
                    </div>
                </div>



                <div className="2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl max-w-2xl mx-auto 2xl:mt-50 xl:mt-30 mt-25 px-4 flex items-center relative">
                    <Image className="absolute -right-100 -top-100 z-0 w-[1300px] h-[700px] rounded-full" src="/work-light.svg" height={100} width={100} alt="work-light" />
                    <div className="z-50">
                        <div>
                            <h4 className={`2xl:text-16px xl:text-[14px] lg:text-[13px] text-[10px] font-semibold ${josefinSans.className} text-[#5DFFFF]`}>Featured  Project</h4>
                            <h2 className={`2xl:text-[34px] xl:text-[24px] lg:text-[22px] text-[16px] font-bold text-[#FAFAFA] ${josefinSans.className}`}>Example Project</h2>
                        </div>
                        <div className={`bg-[url(/work-bg.png)] xl:mt-13 mt-10 bg-cover bg-center z-50 2xl:w-[620px] 2xl:h-[165px] xl:w-[500px] xl:h-[130px] lg:w-[450px] lg:h-[120px] w-[300px] h-[100px] py-6 xl:px-10 lg:px-8 px-4 ${josefinSans.className} 2xl:text-[18px] xl:text-[14px] lg:text-[13px] text-[9px] font-normal`}>
                            A web app for visualizing personalized Spotify data. View your
                            top artists, top tracks, recently played tracks, and detailed audio
                            information about each track. Create and save new playlists of
                            recommended tracks based on your existing playlists and more.
                        </div>
                        <div className="flex gap-4 xl:mt-10 lg:mt-5 mt-3">
                            <GitHubButton />
                            <TwitterButton />
                            <LinkedInButton />
                        </div>
                    </div>
                    <div className="absolute xl:right-30 right-20 lg:top-0 top-5 z-0">
                        <Image className="2xl:w-[583px] 2xl:h-[341px] xl:w-[450px] xl:h-[300px] lg:w-[400px] lg:h-[280px] w-[300px] h-[200px]" src="/work-3.svg" height={100} width={100} alt="work-3" />
                    </div>
                </div>



                <div className="2xl:max-w-5xl xl:max-w-3xl lg:max-w-2xl max-w-[450px] ml-[180px] lg:mx-auto 2xl:mt-50 xl:mt-30 mt-25 px-4 flex flex-row-reverse items-center relative">
                    <Image className="absolute lg:rotate-0 rotate-180 -left-150 -top-100 z-0 w-[1300px] h-[700px] rounded-full" src="/work-light.svg" height={100} width={100} alt="work-light" />
                    <div className="z-50">
                        <div>
                            <h4 className={`2xl:text-16px xl:text-[14px] lg:text-[13px] text-[10px] text-right font-semibold ${josefinSans.className} text-[#5DFFFF]`}>Featured  Project</h4>
                            <h2 className={`2xl:text-[34px] xl:text-[24px] lg:text-[22px] text-[16px] text-right font-bold text-[#FAFAFA] ${josefinSans.className}`}>Example Project</h2>
                        </div>
                        <div className={`bg-[url(/work-bg.png)] xl:mt-13 mt-10 bg-cover bg-center z-50 2xl:w-[620px] 2xl:h-[165px] xl:w-[500px] xl:h-[130px] lg:w-[450px] lg:h-[120px] w-[300px] h-[100px] py-6 xl:px-10 lg:px-8 px-4 ${josefinSans.className} 2xl:text-[18px] xl:text-[14px] lg:text-[13px] text-[9px] font-normal`}>
                            A web app for visualizing personalized Spotify data. View your
                            top artists, top tracks, recently played tracks, and detailed audio
                            information about each track. Create and save new playlists of
                            recommended tracks based on your existing playlists and more.
                        </div>
                        <div className="flex justify-end gap-4 xl:mt-10 lg:mt-5 mt-3">
                            <GitHubButton />
                            <TwitterButton />
                            <LinkedInButton />
                        </div>
                    </div>
                    <div className="absolute -left-30 lg:top-0 top-5 z-0">
                        <Image className="2xl:w-[583px] 2xl:h-[341px] xl:w-[450px] xl:h-[300px] lg:w-[400px] lg:h-[280px] w-[300px] h-[200px]" src="/work-4.svg" height={100} width={100} alt="work-4" />
                    </div>
                </div>
            </section>




            
            <section id="work" className="md:hidden bg-[#100425] 2xl:py-20 py-15 z-50 overflow-hidden">
                <div className="flex flex-col items-center">
                    <h2 className={`2xl:text-[66px] xl:text-[46px] lg:text-[35px] text-[25px] font-semibold bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent ${josefinSans.className}`}>Recent Work</h2>
                    <p className={`${josefinSans.className} 2xl:text-[18px] xl:text-[16px] lg:text-[14px] text-[10px] font-normal text-center text-[#FAFAFA]`}>A collection of projects I've worked on.</p>
                </div>

                <div className="2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl max-w-2xl mx-auto 2xl:mt-50 xl:mt-30 lg:mt-25 mt-15 px-4 flex flex-col justify-center items-center relative">
                    <Image className="absolute -right-100 2xl:-top-100 top-0 z-0 w-[1300px] h-[700px] rounded-full" src="/work-light.svg" height={100} width={100} alt="work-light" />
                    <div className="z-50">
                        <div>
                            <h4 className={`2xl:text-16px xl:text-[14px] lg:text-[13px] text-[10px] font-semibold ${josefinSans.className} text-[#5DFFFF]`}>Featured  Project</h4>
                            <h2 className={`2xl:text-[34px] xl:text-[24px] lg:text-[22px] text-[16px] font-bold text-[#FAFAFA] ${josefinSans.className}`}>Example Project</h2>
                        </div>
                        <div className={`bg-[url(/work-bg.png)] xl:mt-13 mt-10 bg-cover bg-center z-50 2xl:w-[620px] 2xl:h-[165px] xl:w-[500px] xl:h-[130px] lg:w-[450px] lg:h-[120px] w-[300px] h-[100px] py-6 xl:px-10 lg:px-8 px-4 text-white ${josefinSans.className} 2xl:text-[18px] xl:text-[14px] lg:text-[13px] text-[9px] font-normal`}>
                            A web app for visualizing personalized Spotify data. View your
                            top artists, top tracks, recently played tracks, and detailed audio
                            information about each track. Create and save new playlists of
                            recommended tracks based on your existing playlists and more.
                        </div>
                        <div className="flex gap-4 xl:mt-10 lg:mt-5 mt-3">
                            <GitHubButton />
                            <TwitterButton />
                            <LinkedInButton />
                        </div>
                    </div>
                    <div className="">
                        <Image className="2xl:w-[583px] 2xl:h-[341px] xl:w-[450px] xl:h-[300px] lg:w-[400px] lg:h-[280px] w-[300px] h-[200px]" src="/work-1.svg" height={100} width={100} alt="work-1" />
                    </div>
                </div>



                <div className="2xl:max-w-5xl xl:max-w-3xl lg:max-w-2xl max-w-[450px] mx-auto 2xl:mt-50 xl:mt-30 mt-25 px-4 flex flex-col-reverse justify-center items-center relative">
                    <Image className="absolute lg:rotate-0 rotate-180 -left-150 -top-100 z-0 w-[1300px] h-[700px] rounded-full" src="/work-light.svg" height={100} width={100} alt="work-light" />
                    <div className="z-50">
                        <div>
                            <h4 className={`2xl:text-16px xl:text-[14px] lg:text-[13px] text-[10px] text-right font-semibold ${josefinSans.className} text-[#5DFFFF]`}>Featured  Project</h4>
                            <h2 className={`2xl:text-[34px] xl:text-[24px] lg:text-[22px] text-[16px] text-right font-bold text-[#FAFAFA] ${josefinSans.className}`}>Example Project</h2>
                        </div>
                        <div className={`bg-[url(/work-bg.png)] xl:mt-13 mt-10 bg-cover bg-center z-50 2xl:w-[620px] 2xl:h-[165px] xl:w-[500px] xl:h-[130px] lg:w-[450px] lg:h-[120px] w-[300px] h-[100px] py-6 xl:px-10 lg:px-8 px-4 text-white ${josefinSans.className} 2xl:text-[18px] xl:text-[14px] lg:text-[13px] text-[9px] font-normal`}>
                            A web app for visualizing personalized Spotify data. View your
                            top artists, top tracks, recently played tracks, and detailed audio
                            information about each track. Create and save new playlists of
                            recommended tracks based on your existing playlists and more.
                        </div>
                        <div className="flex justify-end gap-4 xl:mt-10 lg:mt-5 mt-3">
                            <GitHubButton />
                            <TwitterButton />
                            <LinkedInButton />
                        </div>
                    </div>
                    <div className="">
                        <Image className="2xl:w-[583px] 2xl:h-[341px] xl:w-[450px] xl:h-[300px] lg:w-[400px] lg:h-[280px] w-[300px] h-[200px]" src="/work-2.svg" height={100} width={100} alt="work-2" />
                    </div>
                </div>



                <div className="2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl max-w-2xl mx-auto 2xl:mt-50 xl:mt-30 mt-25 px-4 flex flex-col justify-center items-center relative">
                    <Image className="absolute -right-100 -top-100 z-0 w-[1300px] h-[700px] rounded-full" src="/work-light.svg" height={100} width={100} alt="work-light" />
                    <div className="z-50">
                        <div>
                            <h4 className={`2xl:text-16px xl:text-[14px] lg:text-[13px] text-[10px] font-semibold ${josefinSans.className} text-[#5DFFFF]`}>Featured  Project</h4>
                            <h2 className={`2xl:text-[34px] xl:text-[24px] lg:text-[22px] text-[16px] font-bold text-[#FAFAFA] ${josefinSans.className}`}>Example Project</h2>
                        </div>
                        <div className={`bg-[url(/work-bg.png)] xl:mt-13 mt-10 bg-cover bg-center z-50 2xl:w-[620px] 2xl:h-[165px] xl:w-[500px] xl:h-[130px] lg:w-[450px] lg:h-[120px] w-[300px] h-[100px] py-6 xl:px-10 lg:px-8 px-4 text-white ${josefinSans.className} 2xl:text-[18px] xl:text-[14px] lg:text-[13px] text-[9px] font-normal`}>
                            A web app for visualizing personalized Spotify data. View your
                            top artists, top tracks, recently played tracks, and detailed audio
                            information about each track. Create and save new playlists of
                            recommended tracks based on your existing playlists and more.
                        </div>
                        <div className="flex gap-4 xl:mt-10 lg:mt-5 mt-3">
                            <GitHubButton />
                            <TwitterButton />
                            <LinkedInButton />
                        </div>
                    </div>
                    <div className="">
                        <Image className="2xl:w-[583px] 2xl:h-[341px] xl:w-[450px] xl:h-[300px] lg:w-[400px] lg:h-[280px] w-[300px] h-[200px]" src="/work-3.svg" height={100} width={100} alt="work-3" />
                    </div>
                </div>



                <div className="2xl:max-w-5xl xl:max-w-3xl lg:max-w-2xl max-w-[450px] mx-auto 2xl:mt-50 xl:mt-30 mt-25 px-4 flex flex-col-reverse justify-center items-center relative">
                    <Image className="absolute lg:rotate-0 rotate-180 -left-150 -top-100 z-0 w-[1300px] h-[700px] rounded-full" src="/work-light.svg" height={100} width={100} alt="work-light" />
                    <div className="z-50">
                        <div>
                            <h4 className={`2xl:text-16px xl:text-[14px] lg:text-[13px] text-[10px] text-right font-semibold ${josefinSans.className} text-[#5DFFFF]`}>Featured  Project</h4>
                            <h2 className={`2xl:text-[34px] xl:text-[24px] lg:text-[22px] text-[16px] text-right font-bold text-[#FAFAFA] ${josefinSans.className}`}>Example Project</h2>
                        </div>
                        <div className={`bg-[url(/work-bg.png)] xl:mt-13 mt-10 bg-cover bg-center z-50 2xl:w-[620px] 2xl:h-[165px] xl:w-[500px] xl:h-[130px] lg:w-[450px] lg:h-[120px] w-[300px] h-[100px] py-6 xl:px-10 lg:px-8 px-4 text-white ${josefinSans.className} 2xl:text-[18px] xl:text-[14px] lg:text-[13px] text-[9px] font-normal`}>
                            A web app for visualizing personalized Spotify data. View your
                            top artists, top tracks, recently played tracks, and detailed audio
                            information about each track. Create and save new playlists of
                            recommended tracks based on your existing playlists and more.
                        </div>
                        <div className="flex justify-end gap-4 xl:mt-10 lg:mt-5 mt-3">
                            <GitHubButton />
                            <TwitterButton />
                            <LinkedInButton />
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

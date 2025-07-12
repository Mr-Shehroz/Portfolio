import { josefinSans } from "../fonts";
import Image from "next/image";

export default function Conatct() {
    return (
        <footer id="contact" className="bg-[#100425] 2xl:py-20 lg:py-10 py-5">
            <div className="flex items-center justify-center mb-8">
                <h2 className={`${josefinSans.className} 2xl:text-[66px] xl:text-[46px] lg:text-[35px] text-[25px] font-semibold bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent`}>Contact</h2>
            </div>
            <div className="2xl:max-w-7xl xl:max-w-[1100px] lg:max-w-[950px] max-w-[620px] px-6 mx-auto flex flex-col md:flex-row justify-between items-center">

                <div className="xl:max-w-[520px] lg:max-w-[420px] max-w-[300px]">
                    <h3 className={`2xl:text-[40px] xl:text-[30px] lg:text-[25px] text-[18px] font-semibold text-[#5DFFFF] ${josefinSans.className}`}>Drop me a message</h3>
                    <p className={`2xl:text-[18px] xl:text-[16px] lg:text-[14px] text-[10px] font-normal mt-4 text-[#FAFAFA] ${josefinSans.className}`}>A web app for visualizing personalized Spotify data. View your
                        top artists, top tracks, recently played tracks, and detailed audio
                        information about each track.</p>

                    <div className="flex flex-col lg:gap-6 gap-4 xl:mt-12 mt-8">
                        <div className="flex items-center xl:gap-4 gap-2">
                            <Image className="2xl:w-[35px] 2xl:h-[35px] lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]" src="/phone.svg" height={100} width={100} alt="phone Icon" />
                            <h4 className={`${josefinSans.className} 2xl:text-[18px] xl:text-[16px] lg:text-[14px] text-[10px] font-normal text-[#FAFAFA]`}>+91 7894567890</h4>
                        </div>
                        <div className="flex items-center xl:gap-4 gap-2 xl:mt-6">
                            <Image className="2xl:w-[35px] 2xl:h-[35px] lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]" src="/email.svg" height={100} width={100} alt="email Icon" />
                            <h4 className={`${josefinSans.className} 2xl:text-[18px] xl:text-[16px] lg:text-[14px] text-[10px] font-normal text-[#FAFAFA]`}>mail@example.com</h4>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('/contact-bg.png')] bg-cover bg-center bg-no-repeat 2xl:h-[467px] 2xl:w-[527px] xl:h-[400px] xl:w-[480px] lg:w-[420px] lg:h-[350px] w-[300px] h-[250px] rounded-2xl shadow-lg lg:px-8 lg:py-8 px-2 flex items-center justify-center mt-10 md:mt-0">
                    <form className="flex flex-col w-full text-white space-y-3 md:p-6 p-4">
                        <div className="flex flex-col">
                            <label className={`mb-2 font-bold 2xl:text-[14px] xl:text-[12px] lg:text-[10px] text-[8px] text-[#FAFAFA] ${josefinSans.className}`}>Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className={`2xl:px-4 2xl:py-4 px-3 xl:py-3 lg:py-2 md:py-[4px] py-2 2xl:text-[14px] xl:text-[12px] lg:text-[10px] text-[8px] font-normal rounded-[6px] bg-[#33274b] text-[#FAFAFA] placeholder:text-[#FAFAFA] focus:outline-none ${josefinSans.className}`}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className={`mb-2 font-bold 2xl:text-[14px] xl:text-[12px] lg:text-[10px] text-[8px] text-[#FAFAFA] ${josefinSans.className}`}>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={`2xl:px-4 2xl:py-4 px-3 xl:py-3 lg:py-2 md:py-[4px] py-2 2xl:text-[14px] xl:text-[12px] lg:text-[10px] text-[8px] font-normal rounded-[6px] bg-[#33274b] text-[#FAFAFA] placeholder:text-[#FAFAFA] focus:outline-none ${josefinSans.className}`}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className={`mb-2 font-bold 2xl:text-[14px] xl:text-[12px] lg:text-[10px] text-[8px] text-[#FAFAFA] ${josefinSans.className}`}>Message</label>
                            <textarea
                                placeholder="How can i help ?"
                                className={`xl:p-4 px-4 lg:py-2 md:py-[4px] py-2 2xl:text-[14px] xl:text-[12px] lg:text-[10px] text-[8px] font-normal rounded-[6px] bg-[#33274b] text-[#FAFAFA] placeholder:text-[#FAFAFA] focus:outline-none ${josefinSans.className}`}
                                rows={4}
                            />
                        </div>
                        <button
                            type="submit"
                            className={`lg:mt-4 mt-2 2xl:w-[145px] xl:w-[110px] md:w-[70px] w-[80px] 2xl:text-[14px] xl:text-[12px] text-[8px] lg:leading-[20px] xl:leading-[30px] bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] text-white lg:py-2 md:py-[6px] 2xl:px-4 md:px-2 py-2 px-3 rounded-full font-semibold hover:from-[#AE0CA7] hover:to-[#5DFFFF] transition-all ${josefinSans.className}`}
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </footer>
    )
}
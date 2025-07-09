import { josefinSans } from "../fonts";
import Image from "next/image";

export default function Conatct() {
    return (
        <footer id="contact" className="bg-[#100425] py-20">
            <div className="flex items-center justify-center mb-8">
                <h2 className={`${josefinSans.className} text-[66px] font-semibold bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent`}>Contact</h2>
            </div>
            <div className="max-w-7xl mx-auto flex justify-between">

                <div className="max-w-[520px]">
                    <h3 className={`text-[40px] font-semibold text-[#5DFFFF] ${josefinSans.className}`}>Drop me a message</h3>
                    <p className={`text-[18px] font-normal mt-4 text-[#FAFAFA] ${josefinSans.className}`}>A web app for visualizing personalized Spotify data. View your
                        top artists, top tracks, recently played tracks, and detailed audio
                        information about each track.</p>

                    <div className="flex flex-col gap-6 mt-12">
                        <div className="flex items-center gap-4">
                            <Image className="w-[35px] h-[35px]" src="/phone.svg" height={100} width={100} alt="phone Icon" />
                            <h4 className={`${josefinSans.className} text-[18px] font-normal text-[#FAFAFA]`}>+91 7894567890</h4>
                        </div>
                        <div className="flex items-center gap-4 mt-6">
                            <Image className="w-[35px] h-[35px]" src="/email.svg" height={100} width={100} alt="email Icon" />
                            <h4 className={`${josefinSans.className} text-[18px] font-normal text-[#FAFAFA]`}>mail@example.com</h4>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('/contact-bg.png')] bg-cover bg-center bg-no-repeat h-[467px] w-[527px] rounded-2xl shadow-lg p-8 flex items-center justify-center">
                    <form className="flex flex-col w-full text-white space-y-3 p-6">
                        <div className="flex flex-col">
                            <label className={`mb-2 font-bold text-[14px] text-[#FAFAFA] ${josefinSans.className}`}>Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className={`px-4 py-4 text-[14px] font-normal rounded-[10px] bg-[#33274b] text-[#FAFAFA] placeholder:text-[#FAFAFA] focus:outline-none ${josefinSans.className}`}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className={`mb-2 font-bold text-[14px] text-[#FAFAFA] ${josefinSans.className}`}>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={`px-4 py-4 text-[14px] font-normal rounded-[10px] bg-[#33274b] text-[#FAFAFA] placeholder:text-[#FAFAFA] focus:outline-none ${josefinSans.className}`}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className={`mb-2 font-bold text-[14px] text-[#FAFAFA] ${josefinSans.className}`}>Message</label>
                            <textarea
                                placeholder="How can i help ?"
                                className={`p-4 text-[14px] font-normal rounded-[10px] bg-[#33274b] text-[#FAFAFA] placeholder:text-[#FAFAFA] focus:outline-none ${josefinSans.className}`}
                                rows={4}
                            />
                        </div>
                        <button
                            type="submit"
                            className={`mt-4 w-[145px] text-[14px] leading-[30px] bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] text-white py-2 px-4 rounded-full font-semibold hover:from-[#AE0CA7] hover:to-[#5DFFFF] transition-all ${josefinSans.className}`}
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </footer>
    )
}
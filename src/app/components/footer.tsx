'use client';

import Image from "next/image";
import { josefinSans } from "../fonts";
import { GitHubButton, LinkedInButton, TwitterButton } from "./icons";
import { motion, Variants} from "framer-motion";

const fadeUpVariant:Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

export default function Footer() {
  return (
    <footer className="bg-[#100425] lg:py-5 py-3">
      {/* Footer Line Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUpVariant}
        viewport={{ once: true, amount: 0.2 }}
        custom={0}
      >
        <Image
          className="md:w-[90%] w-[100%] mx-auto sm:h-[2px]"
          src="/footer-line.png"
          height={100}
          width={100}
          alt="Footer line"
        />
      </motion.div>

      {/* Footer Content */}
      <motion.div
        className="2xl:max-w-7xl xl:max-w-[980px] lg:max-w-[850px] max-w-[630px] mx-auto flex items-center justify-between md:mt-6 mt-3 px-6"
        initial="hidden"
        whileInView="visible"
        variants={fadeUpVariant}
        viewport={{ once: true, amount: 0.2 }}
        custom={0.3}
      >
        <h4
          className={`2xl:text-[18px] xl:text-[16px] lg:text-[14px] sm:text-[12px] text-[8px] font-light text-[#FAFAFA] ${josefinSans.className}`}
        >
          2024 - Shehroz Khan, All rights reserved
        </h4>
        <div className="flex items-center gap-4">
          <GitHubButton />
          <TwitterButton />
          <LinkedInButton />
        </div>
      </motion.div>
    </footer>
  );
}

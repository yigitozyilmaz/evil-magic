import Image from "next/image";
import { AnimatePresence, motion, useScroll } from "framer-motion";

export default function Minting() {
  return (
    <>
      <div className="flex flex-col items-center xs:pb-32 z-50">
        <motion.h1
          style={{ transform: "scale(1, 1.2)", zIndex: "99" }}
          className="z-50 xs:mt-20 xl:mt-[240px] 2xl:mt-[250px] text-center lg:text-[2rem] font-Boucherie 2xl:text-[3rem] text-[1.2rem] 2xl:tracking-[5px] md:tracking-[7px] 2xl:leading-[60px] text-[#38F7A1] green-glow 2xl:mt-[350px] whitespace-nowrap "
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Every ancestor leaves a mark.
          <br />
          Some leave a legacy.
          <br />
        </motion.h1>
      </div>
    </>
  );
}

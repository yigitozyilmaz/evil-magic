import Image from 'next/image';
import { AnimatePresence, motion, useScroll } from 'framer-motion';

export default function Minting() {


  return (
    <>
<div className='flex flex-col items-center'>
            <motion.h1 className='text-center text-5xl font-bold font-BecauseYouWereHome tracking-[5px] leading-[80px] text-[#38F7A1] green-glow mt-[350px] whitespace-nowrap ' initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
              MINTING DATE<br />
              XX : XX : 2024
            </motion.h1>
            <motion.p className='banlancedText text-sm font-medium max-w-[600px] text-justify mt-[50px]' initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
              Being wickedl y brilliant is the norm here, not the exception. Join our mischievous coven of resurrected ancestors, each more delightfully narcissistic than the last. <br></br>  <br></br>It's more than just an NFT collection; it's a family reunion with a cursed twist.
            </motion.p>

          
                        </div>
    </>
  );
}

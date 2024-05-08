'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { FaXTwitter } from 'react-icons/fa6';
import { FiInstagram } from 'react-icons/fi';
import { FaLinkedin, FaMedium, FaYoutube, FaDiscord } from 'react-icons/fa';
import { MdMenu, MdClose } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = {

    'TEAM': '/#team',
    'FAQ': '/#freq'

  };

  const socials = {
    'https://twitter.com': <FaXTwitter className='hover:text-[#00ff80] transition-colors cursor-pointer' />,
    'https://medium.com': <FaMedium className='hover:text-[#00ff80] transition-colors cursor-pointer' />,
    'https://youtube.com': <FaYoutube className='hover:text-[#00ff80] transition-colors cursor-pointer' />,
    'https://discord.com': <FaDiscord className='hover:text-[#00ff80] transition-colors cursor-pointer' />

  };

  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <motion.div id='fontbalance' className='w-full min-h-[100dvh] bg-black/80 backdrop-blur text-white z-[10001] fixed flex justify-end' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <motion.div className='h-[100dvh] w-[80%] flex flex-col gap-y-8 bg-white/10 max-w-[400px]' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <div className='flex items-center justify-between w-full h-[25px] relative top-[40px] mb-8'>
                <Image src='/textlogo.png' width={137} height={75} />
                <MdClose className='relative cursor-pointer right-[29px]' size={38} onClick={() => setMenuOpen(false)} />
              </div>

              <div className='flex flex-col px-6 gap-y-2 mt-[25px]'>
                {Object.keys(links).map(link => (
                  <Link className='w-full p-2 font-semibold text-center rounded-md bg-white/10' key={link} href={links[link]} onClick={() => setMenuOpen(false)}>
                    {link}
                  </Link>
                ))}

                <div className='w-full p-2 font-semibold text-center rounded-md opacity-50 cursor-not-allowed select-none bg-white/10'>
                  GALLERY
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className='banlancedText flex absolute left-0 right-0 top-0 justify-between w-full px-4 lg:px-16 py-4 z-[9999] transition-all duration-200 ease-in-out'>
        <Link href='/'>
          <Image src='/textlogo.png' width={137} height={75} />
        </Link>
        <div className='flex gap-x-4 sm:gap-x-14'>
          <div className='items-center hidden text-white gap-x-6 sm:flex'>
            {Object.keys(links).map(link => (
              <Link className={twMerge(
                'font-BecauseYouWereHome group tracking-[1px] transition-colors relative select-none',
                pathname === links[link] ? 'text-[#00ff80]' : 'hover:text-[#00ff80]'
              )} href={links[link]} key={link}>
                {link}
              </Link>
            ))}
<div className='font-BecauseYouWereHome w-[60px] text-center after:content-["GALLERY"] hover:after:content-["SOON"] tracking-[1px] transition-colors relative opacity-30 cursor-not-allowed select-none'>

          
            </div>
          </div>

          <div className='flex items-center text-white gap-x-5'>
            {Object.keys(socials).map(social => (
              <Link href={social} key={social}>
                {socials[social]}
              </Link>
            ))}
          </div>

          <div className='flex items-center justify-center h-full sm:hidden hover:text-[#00ff80] transition-colors cursor-pointer text-white' onClick={() => setMenuOpen(!menuOpen)}>
            <MdMenu size={38} />
          </div>
        </div>
      </div>
    </>
  );
}

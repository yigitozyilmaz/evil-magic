'use client';

import FaQ from '@/components/faq';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { usePrevious, useMedia, useCookie } from 'react-use';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import TeamMember from '@/components/teammember';
import { MdClose } from 'react-icons/md';
import { LuChevronRight } from 'react-icons/lu';
import { FaDiscord } from 'react-icons/fa';
import MyComponent from '@/components/altasker';
import TopLightPhoto from '@/components/TopLightPhoto';
import Kayma from '@/components/kayma';
import BotSideMobile from '@/components/botSideMobile';
import BotSideDeskop from '@/components/botSideDeskop';
import Minting from '@/components/minting';
import Slider from '@/components/slider';

export default function Page() {

  const [activeTab, setActiveTab] = useState(null);
  const isMobile = useMedia('(max-width: 1023px)');
  const isTablet = useMedia('(max-width: 1023px)');
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  const prevTab = usePrevious(activeTab);
  const [emailIsSent, setEmailIsSent] = useCookie('emailIsSent');



  useEffect(() => {
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    if (emailIsSent !== 'true') wait(500).then(() => setPopupIsOpen(false));
  }, []);

  const sendEmail = async (email) => {
    try {
      const response = await fetch(`/api/email/${encodeURIComponent(email)}/route`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (response.ok) {
        setEmail('');
        setPopupIsOpen(false);
        setEmailIsSent('true');
      } else {
        console.error('Error:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    sendEmail();
  };




  return (
    <div className=' w-full min-h-[100dvh] flex flex-col bg-[#00001d]'>
      <Header />
      <main className="flex text-white  flex-col items-center relative mb-[5rem]">
        <TopLightPhoto />

        <div className='relative w-full'>
          <Image className='w-full h-full relative top-[-60px] lg:top-[-150px] xl:top-[-260px] z-[9] object-contain' src='/leaves.png' width='1920' height='1080' />
          <div className='z-[10] absolute -top-[100px] sm:top-[100px] w-full flex flex-col items-center  sm:px-0'>
            <Minting />
          </div>
          <div className='relative -top-[300px]'>
            <Slider />
          </div>
          <Kayma />

        </div>
        {isMobile ? (

          <>
            <BotSideMobile />
          </>
        ) : (
          <>
            <BotSideDeskop />
          </>
        )}

      </main>
      <Footer />

    </div >

  );
}

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
import TopLightPhoto from '@/components/topLightPhoto';
import Kayma from '@/components/kayma';
import KaymaMobile from '@/components/kaymaMobile';
import BotSideMobile from '@/components/botSideMobile';
import BotSideDeskop from '@/components/botSideDeskop';
import Minting from '@/components/minting';
import Slider from '@/components/slider';
import SliderMobile from '@/components/sliderMobile';
import { db } from '@/app/firebase/firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

export default function Page() {

  const [activeTab, setActiveTab] = useState(null);
  const isMobile = useMedia('(max-width: 1023px)');
  const isTablet = useMedia('(max-width: 1023px)');
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  const prevTab = usePrevious(activeTab);
  const [emailIsSent, setEmailIsSent] = useCookie('emailIsSent');
  const [isValidEmail, setIsValidEmail] = useState(true);



  useEffect(() => {
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    if (emailIsSent !== 'false') wait(2000).then(() => setPopupIsOpen(true));
  }, []);

  const sendEmail = async (email) => {
    try {
      // Firestore'da 'e-mail' koleksiyonuna yeni bir belge ekle
      await addDoc(collection(db, 'e-mail'), { mail: email });

      setEmail(''); // Email alanını temizle
      setPopupIsOpen(false);
      setEmailIsSent(true); // Email gönderildi olarak işaretle

      console.log("Email Firebase'e başarıyla kaydedildi:", email);
    } catch (error) {
      console.error('Firebase\'e email kaydedilirken hata oluştu:', error);
    }
  };


  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      if (email.includes('@')) {
        setIsValidEmail(true); // Email geçerli ise, arka plan rengi normal
        sendEmail(email);
      } else {
        setIsValidEmail(false); // Email geçersizse, arka plan rengi kırmızı
      }
      e.preventDefault();
    }
  };

  const button = (e) => {
    {
      if (email.includes('@')) {
        setIsValidEmail(true); // Email geçerli ise, arka plan rengi normal
        sendEmail(email);
      } else {
        setIsValidEmail(false); // Email geçersizse, arka plan rengi kırmızı
      }
      e.preventDefault();
    }
  };

  return (
    <div className=' w-full min-h-[100dvh] flex flex-col bg-[#00001d]'>
      <Header />
      <div> {popupIsOpen && (
        <div className={twMerge(
          'fixed text-white top-0 left-0 w-full h-full overflow-hidden bg-black/80 z-[100000] flex items-center justify-center'
        )}>
          <div className='relative'>
            <div className='absolute right-[24px] top-2 md:right-[50px] md:top-5 xl:right-[60px]'>
              <MdClose className='pointer-events-auto cursor-pointer size-5 md:size-7' onClick={() => setPopupIsOpen(false)} />
            </div>
            <div className='absolute bottom-[20px] flex items-start left-5 right-0 md:left-[100px] md:bottom-[30px] lg:left-[120px] lg:bottom-10'>
              <div className='flex gap-x-1 rounded-xl p-1 bg-[#a9615c]'>
                <input type='text' className={`bg-neutral-900 md:w-[190px] lg:w-[260px] rounded-l-lg  text-center text-sm sm:text-sm md:text-lg lg:text-lg outline-none ${!isValidEmail ? 'text-red-500' : 'text-white'
                  }`} placeholder='Enter your email' value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsValidEmail(true); // Yazma sırasında rengi normalleştir
                  }}
                  onKeyUp={handleKeyUp}
                />
                <button className='p-1 rounded text-black text-center text-lg font-semibold outline-none' onClick={button}>
                  <LuChevronRight className='size-5 sm:size-5 md:size-10 text-white' />
                </button>
              </div>
            </div>
            <img src='/popupbg2.png' width={1809} height={915} className='w-[1400px] sm:w-[500px] xs:w-[400px] md:w-[800px] lg:w-[1000px] h-auto pointer-events-none' />
          </div>
        </div>
      )}</div>
      <main className="flex text-white  flex-col items-center relative mb-[5rem]">
        <TopLightPhoto />

        <div className='relative w-full'>
          <Image className='w-full h-full relative top-[-60px] lg:top-[-150px] xl:top-[-260px] z-[9] object-contain' src='/leaves.png' width='1920' height='1080' />
          <div className='z-[1] absolute xs:top-[0px] 2xl:top-[100px] xs:top-[100px] w-full flex flex-col items-center  sm:px-0 2xl:pb-80' style={{ backgroundImage: `url('/16.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Minting />
          </div>
          <div className='relative 2xl:-top-[300px] lg:top-[-300px] '>

            {isMobile ? (

              <>
                <SliderMobile />
              </>
            ) : (
              <>
                <Slider />
              </>
            )}
          </div>
          {isMobile ? (

            <>
              <KaymaMobile />

            </>
          ) : (
            <>
              <Kayma />
            </>
          )}


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

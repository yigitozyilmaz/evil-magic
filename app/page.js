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

export default function Page() {
  const [lightOn, setLightOn] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const isMobile = useMedia('(max-width: 1023px)');
  const isTablet = useMedia('(max-width: 1023px)');
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [email, setEmail] = useState('');



  const [data, setData] = useState({
    'Hair': null,
    'Hat': null,
    'Eyewear': null,
    'Beard': null,
    'Torso': null,
    'Skin': null,
    'Item': null
  });
  const prevTab = usePrevious(activeTab);
  const [emailIsSent, setEmailIsSent] = useCookie('emailIsSent');
  const [a, setA] = useState(0);

  const ref = useRef(null)
  const { scrollYProgress } = useScroll(ref, { threshold: 0.5 });

  useEffect(() => {
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    if (emailIsSent !== 'true') wait(500).then(() => setPopupIsOpen(true));
  }, []);

  async function sendEmail() {
    try {
      const response = await fetch('/api/email/' + encodeURIComponent(email), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      });
      const data = await response.text();
      if (data === 'OK') {
        setEmail('');
        setPopupIsOpen(false);
        setEmailIsSent('true');
      }
    } catch (error) {
      return console.error(error);
    }
  }


  useEffect(() =>
    scrollYProgress.on("change", b => {
      if (b >= 0.18 && b <= 0.21) {
        const _a = 1;
        setA(_a);
      } else if (b < 0.18) {
        const _a = 0;
        setA(_a);
      } else if (b >= 0.21 && b <= 0.24) {
        const _a = 2;
        setA(_a);
      }
      else if (b >= 0.24 && b <= 0.27) {
        const _a = 3;
        setA(_a);
      }
      else if (b >= 0.27 && b <= 0.30) {
        const _a = 4;
        setA(_a);
      }
      else if (b >= 0.30 && b <= 0.34) {
        const _a = 5;
        setA(_a);
      }
      else if (b >= 0.34 && b <= 0.38) {
        const _a = 6;
        setA(_a);
      }
      else if (b >= 0.38 && b <= 0.5) {
        const _a = 7;
        setA(_a);
      }
      else if (b > 0.5) {
        const _a = 7;
        setA(_a);
      }
    }), []);

  return (
    <div className='relative w-full min-h-[100dvh] flex flex-col bg-[#00001d]'>
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
                <input type='text' className='bg-neutral-900 md:w-[190px] lg:w-[260px] rounded-l-lg text-white text-center text-sm sm:text-sm md:text-lg lg:text-lg font-semibold outline-none' placeholder='Enter your email' value={email} onChange={e => setEmail(e.target.value)} onKeyUp={e => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    sendEmail();
                  }
                }} />
                <button className='p-1 rounded text-black text-center text-lg font-semibold outline-none' onClick={sendEmail}>
                  <LuChevronRight className='size-5 sm:size-5 md:size-10 text-white' />
                </button>
              </div>
            </div>
            <img src='/popupbg2.png' width={1809} height={915} className='w-[1400px] sm:w-[500px] xs:w-[400px] md:w-[800px] lg:w-[1000px] h-auto pointer-events-none' />
          </div>
        </div>
      )}</div>
      <main className="flex text-white min-h-[100dvh] flex-col items-center relative mb-[5rem]">
        <Image src='/lightsoff.png' className={twMerge(
          'object-cover w-[100%] h-[100dvh] transition-all duration-500 ease-in-out',
          lightOn ? 'opacity-0' : 'opacity-100'
        )} width='1920' height='1080' />
        <Image src='/lightson.png' className={twMerge(
          'object-cover w-full h-[100dvh] transition-all duration-500 ease-in-out absolute',
          lightOn ? 'opacity-100' : 'opacity-0'
        )} width='1920' height='1080' />

        <Image src={lightOn ? '/button_open.png' : '/button_closed.png'} width={620} height={213} className='w-[100px] lg:w-[150px] h-auto object-contain absolute right-[20px] lg:right-[55px] top-[100px] cursor-pointer' onClick={() => setLightOn(!lightOn)} />
        <div className='relative w-full'>
          <Image className='w-full h-full relative top-[-60px] lg:top-[-150px] xl:top-[-260px] z-[9] object-contain' src='/leaves.png' width='1920' height='1080' />
          <div className='z-[10] absolute -top-[100px] sm:top-[100px] w-full h-max flex flex-col items-center px-4 sm:px-0'>
            <motion.h1 className='text-center text-5xl font-bold font-BecauseYouWereHome tracking-[5px] leading-[80px] text-[#38F7A1] green-glow mt-[350px] whitespace-nowrap ' initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
              MINTING DATE<br />
              XX : XX : 2024
            </motion.h1>
            <motion.p className='banlancedText text-sm font-medium max-w-[600px] text-justify mt-[50px]' initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
              Being wickedly brilliant is the norm here, not the exception. Join our mischievous coven of resurrected ancestors, each more delightfully narcissistic than the last. <br></br>  <br></br>It's more than just an NFT collection; it's a family reunion with a cursed twist.
            </motion.p>
            <Image className=' top-[250px]  relative z-[9] object-contain' src='/wizard.png' width='174' height='116' />
            <div className='flex flex-row  lg:flex-row px-8 lg:px-0 gap-[60px] w-full mt-[300px] h-[100vh] lg:h-[200vh] relative'>
              <div className='flex flex-col items-center w-full relative ' style={{
                height: '4000px',
                backgroundImage: 'url(/webUI.png)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>

                <div className='flex flex-col gap-y-4 w-full max-w-[650px] items-center sticky top-[15%] xl:top-[10%]' ref={ref}>
                  <div className='w-[300px] h-[300px] lg:w-[600px] lg:h-[750px] mt-20 relative group'>
                    {a >= 0 && <Image src='/person/1.png' width='600' height='600' className='absolute top-0 object-contain ' style={{ zIndex: 30 }} />}

                    <Image src='/borderson4.png' width={686} height={678} className='pointer-events-none absolute  z-[90] w-[300px] h-[300px] lg:w-[570px] lg:h-[570px] scale-[1.3] lg:ml-4 lg:mt-4 ' />
                    {a >= 1 && <Image src='/person/2.png' width='600' height='600' className='absolute top-0 object-contain ' style={{ zIndex: 41 }} />}
                    {(a >= 1) && <motion.div className='flex justify-end pointer-events-none items-center h-[600px] fixed mt-32 w-full right-4 bottom-[-200px] z-[99] ' initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.25, ease: 'easeInOut' }}>
                    </motion.div>}
                    {a >= 2 && <Image src='/person/3.png' width='600' height='600' className='absolute top-0 object-contain ' style={{ zIndex: 42 }} />}
                    {a >= 2 && <Image src='/person/3.1.png' width='600' height='600' className='absolute top-0 object-contain ' style={{ zIndex: 40 }} />}
                    {(a == 2) && <motion.div className='flex justify-start pointer-events-none items-center h-[600px] fixed mt-32 w-full left-4 bottom-[-200px] z-[99]' initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.25, ease: 'easeInOut' }}>
                    </motion.div>}
                    {a >= 3 && <Image src='/person/4.png' width='600' height='600' className='absolute top-0 object-contain ' style={{ zIndex: 41 }} />}
                    {(a == 3) && <motion.div className='flex justify-end pointer-events-none items-center h-[600px] fixed mt-32 w-full right-4 bottom-[-200px] z-[99]' initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.25, ease: 'easeInOut' }}>
                    </motion.div>}
                    {a >= 4 && <Image src='/person/5.png' width='600' height='600' className='absolute top-0 object-contain ' style={{ zIndex: 40 }} />}
                    {(a == 4) && <motion.div className='flex justify-start pointer-events-none items-center h-[600px] fixed mt-32 w-full left-4 bottom-[-200px] z-[99]' initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.25, ease: 'easeInOut' }}>
                    </motion.div>}
                    {a >= 5 && <Image src='/person/6.png' width='600' height='600' className='absolute top-0 object-contain ' style={{ zIndex: 41 }} />}
                    {(a == 5) && <motion.div className='flex justify-end pointer-events-none items-center h-[600px] fixed mt-32 w-full right-4 bottom-[-200px] z-[99]' initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.25, ease: 'easeInOut' }}>
                    </motion.div>}
                    {a >= 6 && <Image src='/person/7.png' width='600' height='600' className='absolute top-0 object-contain ' style={{ zIndex: 41 }} />}
                    {(a == 6) && <motion.div className='flex justify-start pointer-events-none items-center h-[600px] fixed mt-32 w-full left-4 bottom-[-200px] z-[99]' initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.25, ease: 'easeInOut' }}>
                    </motion.div>}
                    {a >= 7 && <Image src='/person/8.png' width='600' height='600' className='absolute top-0 object-contain ' style={{ zIndex: 43 }} />}
                    {(a == 7) && <motion.div className='flex justify-end pointer-events-none items-center h-[600px] fixed mt-32 w-full right-4 bottom-[-200px] z-[99]' initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.25, ease: 'easeInOut' }}>
                    </motion.div>}
                  </div>
                </div>
                {/*<AnimatePresence>
                  {text[activeTab] && (
                    <motion.div className='flex justify-end pointer-events-none items-center h-[600px] fixed mt-32 w-full right-4 bottom-[-200px] z-[99]' initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.25, ease: 'easeInOut' }}>
                      <div className='w-max bg-black/20 pointer-events-auto backdrop-blur-sm max-w-[400px] whitespace-pre-wrap font-medium h-max p-5 rounded-xl border-2 border-[#232349]'>
                        {text[activeTab]}
                      </div>
                    </motion.div>
                  )}
                  </AnimatePresence>*/}
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div className='flex h-[100dvh] w-full flex-col items-center mt-[280vh]' style={{
          backgroundImage: 'url(/25opasite.png)',
          backgroundSize: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className='flex w-full px-8 lg:ml-[500px] mt-[300px] relative'>
            <Image src='/mantar.png' width='741' height='648' className='object-contain scale-[1.5] relative left-[-400px] top-[-50px] z-[10] hidden lg:block' />
            <div className='relative lg:right-[550px] z-[9] flex flex-col gap-y-4 w-full'>
              <h1 className='font-BecauseYouWereHome text-5xl lg:text-7xl tracking-[5px] leading-[60px] lg:leading-[100px]'>
                <span className='relative lg:right-[50px] z-[9]'>AN EXPERIMENT</span>
                <br />
                WENT WRONG
              </h1>
              <p className='text-sm font-medium max-w-[800px] lg:max-w-[1000px] 3xl:max-w-[600px] text-justify mt-8'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis cupiditate dolor ducimus explicabo harum hic id inventore labore minus nemo neque obcaecati optio reiciendis, rerum saepe sit, vel, velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquid debitis doloremque ducimus eligendi est eum ex expedita hic illum incidunt itaque molestiae, natus, quam ut voluptatibus, voluptatum! Omnis. sit amet, consectetur adipisicing elit. A alias aliquid debitis doloremque ducimus eligendi est eum ex expedita hic illum incidunt itaque molestiae, natus, quam ut voluptatibus, voluptatum! Omnis<br /><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aliquam deserunt dolorem eius est expedita fugit in, incidunt minima optio porro quaerat quas quasi rem reprehenderit sed suscipit velit.
              </p>
            </div>
            <Image src={!skullIsHovered ? '/more.png' : '/hovermoreson2.png'} width={200} height={100} className='absolute -top-[120px] sm:top-0 right-0 cursor-pointer h-[100px] z-[10]' onMouseEnter={() => setSkullIsHovered(true)} onMouseLeave={() => setSkullIsHovered(false)} />
          </div>
        </div>
        */}
        {isMobile ? (

          <>
            <div className='flex h-max w-full flex-col items-center justify-center mt-[310vh] lg:mt-[240vh]'>
              <div className='z-[10] w-full relative bg-[#00001d] flex flex-col gap-y-14 mt-[1200px] pt-[10rem] sm:pt-0 text-white'>
                <div className='absolute -top-[400px] w-full h-[800px] bg-gradient-to-b from-transparent z-[-10] via-[#00001d] to-[#00001d]'></div>
                <div className='relative flex w-max h-max rotate-[-4deg] bottom-[300px]'>
                  <div className='slides-to-right'>
                    <Image src='/slide1/1.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/2.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/3.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/4.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/5.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/6.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/7.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/8.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/9.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                  </div>
                  <div className='slides-to-right'>
                    <Image src='/slide1/1.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/2.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/3.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/4.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/5.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/6.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/7.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/8.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/9.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                  </div>
                  <div className='slides-to-right'>
                    <Image src='/slide1/1.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/2.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/3.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/4.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/5.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/6.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/7.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/8.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/9.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                  </div>
                </div>
                <div className='w-full -mt-[150px] h-[880px] flex gap-x-10 justify-center pr-0 xl:pr-0 2xl:pr-[150px]'>
                  <Image src='/ewilhero.png' width={780} height={780} objectFit='cover' className='hidden xl:block w-[680px] h-[680px] top-[100px] xl:left-0 2xl:left-[100px] relative z-[10]' />
                  <div className='flex flex-col items-center w-full gap-y-8'>
                    <div className='relative'>
                      <Image src='/Logo3Dpng.png' width={612} height={350} className='w-[612px] h-[270px] relative mt-40 lg:mt-8' />
                      <Image src='/popupbubble.png' width={250} height={250} className='absolute -right-[150px] top-[45px] 2xl:flex hidden' />
                      <Image src='/skull.png' width={700} height={700} className='absolute -right-[600px] -top-[20px] scale-x-[-1] 2xl:flex hidden' />
                    </div>

                    <p className='banlancedText max-w-[540px] font-medium text-sm lg:text-lg mt-[20px] text-justify px-4 2xl:px-0 '>
                      Immerse yourself in the legacy of the 'Evil Wizards,' where every NFT is a gateway to a long line of powerful ancestors. Each wizard in this exclusive collection represents a piece of a centuries-old family saga, rich with evil magic and curses. By owning a piece of this collection, you don't just acquire a digital collectible; you become part of a lineage of an untold prophecy. Join now and be part of the master plan!
                    </p>

                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id='gooeysvg'>

                      <defs>
                        <filter id="gooey">
                          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                          <feColorMatrix
                            in="blur"
                            type="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="highContrastGraphic" />
                          <feComposite
                            in="SourceGraphic"
                            in2="highContrastGraphic"
                            operator="atop" />
                        </filter>
                      </defs>
                    </svg>
                    <div id="gooey-button" className='mt-8 h-18 w-24 font-BecauseYouWereHome w-[60px] text-center after:content-["GALLERY"] hover:after:content-["SOON"] tracking-[1px] transition-colors relative cursor-not-allowed select-none '>

                      <span className="bubbles">
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                      </span>
                    </div>

                  </div>
                </div>
                <div className='relative flex w-max h-max rotate-[3deg] top-[120px] lg:top-[180px] z-[9]'>
                  <div className='slides-to-left'>
                    <Image src='/slide2/1.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/2.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/3.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/4.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/5.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/6.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/7.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/8.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/9.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                  </div>
                  <div className='slides-to-left'>
                    <Image src='/slide2/1.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/2.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/3.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/4.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/5.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/6.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/7.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/8.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/9.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                  </div>

                  <div className='slides-to-left mt-8'>
                    <Image src='/slide2/1.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/2.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/3.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/4.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/5.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/6.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/7.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/8.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/9.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                  </div>
                </div>
              </div>
              <div className='relative pt-[700px] text-white w-full sm:h-[2000px] xl:h-[2500px] bg-[#00001d] sm:-mb-[800px] -mt-[20px]' style={{
                backgroundImage: 'url(/Team_BG2.png)',
                backgroundSize: '100%',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat'
              }}>

                <div className='absolute -top-[200px] w-full h-[1000px] bg-gradient-to-b from-transparent via-[#00001d] to-transparent z-[12]'></div>
                <div className='px-4 xl:px-0 z-[12] relative flex items-center justify-center flex-col text-center gap-y-8 -scroll-mt-[40rem] -mt-[550px]' id='team'>
                  <h1 style={{ transform: "scale(0.9, 0.9)" }} className='text-shadow font-BecauseYouWereHome font-semibold tracking-[5px] text-[4rem]'>
                    ABOUT US
                  </h1>

                  <p className='banlancedText max-w-[700px] font-medium text-sm lg:text-lg text-justify'>
                    At Fusion Up, we're driven by a philosophy that mirrors the principles of alchemy, believing in the transformative power of fusion. Our team, deeply entrenched in the art world, brings a unique blend of creative artistry and scientific precision to every project. We approach game development as an art form, where imaginative design and data-driven strategies fuse to create immersive experiences. By mixing these elements, we craft games that are not just played, but felt and remembered.<br /><br />
                  </p>

                  <div className='flex flex-wrap max-w-[1000px] items-center justify-center gap-12'>
                    <TeamMember name='ERIM CAKIR' imagePath='/team.png' q position='CEO' linkedIn='https://www.linkedin.com' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur doloremque esse hic illum molestiae porro provident veritatis!' />
                    <TeamMember name='ERIM CAKIR' imagePath='/team.png' q position='CEO' linkedIn='https://www.linkedin.com' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur doloremque esse hic illum molestiae porro provident veritatis!' />
                    <TeamMember name='ERIM CAKIR' imagePath='/team.png' q position='CEO' linkedIn='https://www.linkedin.com' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur doloremque esse hic illum molestiae porro provident veritatis!' />
                    <TeamMember name='ERIM CAKIR' imagePath='/team.png' q position='CEO' linkedIn='https://www.linkedin.com' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur doloremque esse hic illum molestiae porro provident veritatis!' />
                    <TeamMember name='ERIM CAKIR' imagePath='/team.png' q position='CEO' linkedIn='https://www.linkedin.com' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur doloremque esse hic illum molestiae porro provident veritatis!' />
                    <TeamMember name='ERIM CAKIR' imagePath='/team.png' q position='CEO' linkedIn='https://www.linkedin.com' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur doloremque esse hic illum molestiae porro provident veritatis!' />
                    <TeamMember name='ERIM CAKIR' imagePath='/team.png' q position='CEO' linkedIn='https://www.linkedin.com' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur doloremque esse hic illum molestiae porro provident veritatis!' />
                    <TeamMember name='ERIM CAKIR' imagePath='/team.png' q position='CEO' linkedIn='https://www.linkedin.com' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur doloremque esse hic illum molestiae porro provident veritatis!' />
                    <TeamMember name='ERIM CAKIR' imagePath='/team.png' q position='CEO' linkedIn='https://www.linkedin.com' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur doloremque esse hic illum molestiae porro provident veritatis!' />
                  </div>
                  <div className='absolute mt-[1200px] w-full h-[800px]  bg-gradient-to-b from-transparent z-[-10] via-[#00001d] to-[#00001d]'></div>
                </div>

              </div>

              <h1 className='font-BecauseYouWereHome text-5xl leading-[60px] mt-36 text-center lg:text-7xl tracking-[5px] lg:leading-[100px]' id='freq'>
                FREQUENTLY ASKED QUESTIONS
              </h1>
              <div className='flex flex-col gap-4 max-w-[800px] mt-24 w-full h-full px-8'>
                <FaQ q='Lorem ipsum dolor sit amet?' a='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aliquam deserunt dolorem eius est expedita fugit in, incidunt minima optio porro quaerat quas quasi rem reprehenderit sed suscipit velit.' />
                <FaQ q='Lorem ipsum dolor sit amet?' a='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aliquam deserunt dolorem eius est expedita fugit in, incidunt minima optio porro quaerat quas quasi rem reprehenderit sed suscipit velit.' />
                <FaQ q='Lorem ipsum dolor sit amet?' a='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aliquam deserunt dolorem eius est expedita fugit in, incidunt minima optio porro quaerat quas quasi rem reprehenderit sed suscipit velit.' />
                <FaQ q='Lorem ipsum dolor sit amet?' a='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aliquam deserunt dolorem eius est expedita fugit in, incidunt minima optio porro quaerat quas quasi rem reprehenderit sed suscipit velit.' />
                <FaQ q='Lorem ipsum dolor sit amet?' a='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aliquam deserunt dolorem eius est expedita fugit in, incidunt minima optio porro quaerat quas quasi rem reprehenderit sed suscipit velit.' />
                <FaQ q='Lorem ipsum dolor sit amet?' a='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aliquam deserunt dolorem eius est expedita fugit in, incidunt minima optio porro quaerat quas quasi rem reprehenderit sed suscipit velit.' />
              </div>
              <div className='relative flex items-center justify-center w-full mt-24'>
                <div><Image src='/Group.png' width='1500' height='500' className='object-contain z-[0] p-4 relative opacity-[0,8] ' style={{ marginBottom: '-92px' }} /></div>
                <div className='absolute top-[30px] flex [&>h2]:z-[9] left-0 opacity-50'>
                  <h2 className='slides-to-left slides-to-left-45s text-5xl font-BecauseYouWereHome tracking-[5px] bottom-[50px] w-max [&>*]:mx-[20px]'>
                    <span className='flex'> JoIn DIscord<FaDiscord className='hover:text-[#5865F2] transition-colors cursor-pointer ml-8 ' /></span>
                    <span className='flex'>JoIn DIscord <FaDiscord className='hover:text-[#5865F2] transition-colors cursor-pointer ml-8 ' /></span>
                    <span className='flex'>JoIn DIscord <FaDiscord className='hover:text-[#5865F2] transition-colors cursor-pointer  ml-8 ' /></span>
                  </h2>
                  <h2 className='slides-to-left slides-to-left-45s z-[9] text-5xl font-BecauseYouWereHome tracking-[5px] bottom-[50px] w-max [&>*]:mx-[20px]'>
                    <span className='flex'> JoIn DIscord<FaDiscord className='hover:text-[#5865F2] transition-colors cursor-pointer ml-8 ' /></span>
                    <span className='flex'>JoIn DIscord <FaDiscord className='hover:text-[#5865F2] transition-colors cursor-pointer ml-8 ' /></span>
                    <span className='flex'>JoIn DIscord <FaDiscord className='hover:text-[#5865F2] transition-colors cursor-pointer  ml-8 ' /></span>
                  </h2>
                  <h2 className='slides-to-left slides-to-left-45s z-[9] text-5xl font-BecauseYouWereHome tracking-[5px] bottom-[50px] w-max [&>*]:mx-[20px]'>
                    <span className='flex'> JoIn DIscord<FaDiscord className='hover:text-[#5865F2] transition-colors cursor-pointer ml-8 ' /></span>
                    <span className='flex'>JoIn DIscord <FaDiscord className='hover:text-[#5865F2] transition-colors cursor-pointer ml-8 ' /></span>
                    <span className='flex'>JoIn DIscord <FaDiscord className='hover:text-[#5865F2] transition-colors cursor-pointer  ml-8 ' /></span>
                  </h2>
                </div>
              </div>
              <a href="discordlink" target="_blank" rel="noopener noreferrer"><Image src='/ctu.png' width='190' height='500' className='object-contain z-[12] relative opacity-[1] mr-10' style={{ top: '-105px', marginBottom: '-400px' }} /></a>
            </div></>
        ) : (
          <>
            <div className='flex h-max w-full flex-col items-center justify-center mt-[310vh] lg:mt-[240vh]'>
              <div className='z-[10] w-full relative bg-[#00001d] flex flex-col gap-y-14 mt-[1200px] pt-[10rem] sm:pt-0 text-white'>
                <div className='absolute -top-[800px] w-full h-[950px] md:-top-[860px]  bg-gradient-to-b from-transparent z-[-10] via-[#00001d] to-[#00001d]'></div>
                <div className='relative flex w-max h-max rotate-[-4deg] bottom-[300px]'>
                  <div className='slides-to-right'>
                    <Image src='/slide1/1.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/2.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/3.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/4.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/5.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/6.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/7.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/8.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/9.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                  </div>
                  <div className='slides-to-right'>
                    <Image src='/slide1/1.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/2.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/3.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/4.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/5.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/6.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/7.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/8.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/9.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                  </div>
                  <div className='slides-to-right'>
                    <Image src='/slide1/1.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/2.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/3.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/4.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/5.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/6.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/7.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/8.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide1/9.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                  </div>
                </div>
                <div className='w-full -mt-[150px] h-[780px] flex gap-x-10 justify-center pr-0 xl:pr-0 2xl:pr-[150px] max-2xl:h-[920px]'>
                  <Image src='/ewilhero.png' width={780} height={780} objectFit='cover' className='hidden xl:block w-[680px] h-[680px] top-[100px] xl:left-0 2xl:left-[100px] relative z-[10]' />
                  <div className='flex flex-col items-center w-full gap-y-8'>
                    <div className='relative '>
                      <Image src='/Logo3Dpng.png' width={1000} height={1000} className='w-[612px] h-[350px] relative mt-24 lg:mt-8   ' />
                      <Image src='/popupbubble.png' width={350} height={350} className='absolute -right-[200px] top-[105px] 2xl:flex hidden' />
                      <Image src='/skull.png' width={1000} height={1000} className='absolute -right-[600px] top-[160px] scale-x-[-1] 2xl:flex hidden' />
                    </div>

                    <p className='banlancedText max-w-[540px] font-medium text-sm lg:text-lg -mt-[40px] text-justify px-4 2xl:px-0 '>
                      Immerse yourself in the legacy of the 'Evil Wizards,' where every NFT is a gateway to a long line of powerful ancestors. Each wizard in this exclusive collection represents a piece of a centuries-old family saga, rich with evil magic and curses. By owning a piece of this collection, you don't just acquire a digital collectible; you become part of a lineage of an untold prophecy. Join now and be part of the master plan!
                    </p>

                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id='gooeysvg'>
                      <defs>
                        <filter id="gooey">
                          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                          <feColorMatrix
                            in="blur"
                            type="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="highContrastGraphic" />
                          <feComposite
                            in="SourceGraphic"
                            in2="highContrastGraphic"
                            operator="atop" />
                        </filter>
                      </defs>
                    </svg>
                    <div id="gooey-button" className='mt-8 h-18 w-24 font-BecauseYouWereHome w-[60px] text-center after:content-["GALLERY"] hover:after:content-["SOON"] tracking-[1px] transition-colors relative cursor-not-allowed select-none '>

                      <span className="bubbles">
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='relative flex w-max h-max rotate-[3deg] top-[120px] lg:top-[180px] z-[9] '>
                  <div className='slides-to-left'>
                    <Image src='/slide2/1.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/2.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/3.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/4.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/5.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/6.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/7.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/8.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/9.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                  </div>
                  <div className='slides-to-left'>
                    <Image src='/slide2/1.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/2.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/3.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/4.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/5.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/6.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/7.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/8.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/9.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                  </div>

                  <div className='slides-to-left mt-8'>
                    <Image src='/slide2/1.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/2.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/3.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/4.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/5.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/6.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/7.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/8.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                    <Image src='/slide2/9.png' width={657} height={626} objectFit='cover' className='w-[260px] h-[250px]' />
                  </div>
                </div>
              </div>

              <div className='relative pt-[700px] text-white w-full sm:h-[2000px] xl:h-[2500px] bg-[#00001d] sm:-mb-[800px] -mt-[150px]' style={{
                backgroundImage: 'url(/Team_BG2.png)',
                backgroundSize: 'cover',

                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat'
              }}>
                <div className='absolute -top-[500px] w-full h-[1000px] bg-gradient-to-b from-transparent via-[#00001d] to-transparent'></div>
                <div className='px-4 xl:px-0 z-[12] relative flex items-center justify-center flex-col text-center gap-y-8 -scroll-mt-[40rem]' id='team'>
                  <h1 style={{ transform: "scale(1, 1.2)" }} className='text-shadow font-BecauseYouWereHome font-semibold tracking-[5px] text-[4rem]'>
                    ABOUT US
                  </h1>

                  <p className='banlancedText max-w-[800px] font-medium text-sm lg:text-lg text-justify'>
                    At Fusion Up, we're driven by a philosophy that mirrors the principles of alchemy, believing in the transformative power of fusion. Our team, deeply entrenched in the art world, brings a unique blend of creative artistry and scientific precision to every project. We approach game development as an art form, where imaginative design and data-driven strategies fuse to create immersive experiences. By mixing these elements, we craft games that are not just played, but felt and remembered.<br /><br />
                  </p>

                  <div className='flex flex-wrap max-w-[1000px] items-center justify-center gap-12'>
                    <TeamMember name='ERIM CAKIR' imagePath='/team.png' q position='CEO' linkedIn='https://www.linkedin.com' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur doloremque esse hic illum molestiae porro provident veritatis!' />
                    <TeamMember name='ERIM CAKIR' imagePath='/team.png' q position='CEO' linkedIn='https://www.linkedin.com' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur doloremque esse hic illum molestiae porro provident veritatis!' />
                    <TeamMember name='ERIM CAKIR' imagePath='/team.png' q position='CEO' linkedIn='https://www.linkedin.com' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur doloremque esse hic illum molestiae porro provident veritatis!' />
                    <TeamMember name='ERIM CAKIR' imagePath='/team.png' q position='CEO' linkedIn='https://www.linkedin.com' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur doloremque esse hic illum molestiae porro provident veritatis!' />
                    <TeamMember name='ERIM CAKIR' imagePath='/team.png' q position='CEO' linkedIn='https://www.linkedin.com' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur doloremque esse hic illum molestiae porro provident veritatis!' />
                    <TeamMember name='ERIM CAKIR' imagePath='/team.png' q position='CEO' linkedIn='https://www.linkedin.com' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur doloremque esse hic illum molestiae porro provident veritatis!' />
                    <TeamMember name='ERIM CAKIR' imagePath='/team.png' q position='CEO' linkedIn='https://www.linkedin.com' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur doloremque esse hic illum molestiae porro provident veritatis!' />
                    <TeamMember name='ERIM CAKIR' imagePath='/team.png' q position='CEO' linkedIn='https://www.linkedin.com' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur doloremque esse hic illum molestiae porro provident veritatis!' />
                    <TeamMember name='ERIM CAKIR' imagePath='/team.png' q position='CEO' linkedIn='https://www.linkedin.com' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur doloremque esse hic illum molestiae porro provident veritatis!' />
                  </div>
                  <div className='absolute mt-[1200px] w-full h-[800px] bg-gradient-to-b from-transparent z-[-10] via-[#00001d] to-[#00001d]'></div>
                </div>

              </div>
              <div className='mt-[1000px]'> <h1 className='font-BecauseYouWereHome text-5xl leading-[60px] text-center lg:text-7xl tracking-[5px] lg:leading-[100px]' id='freq'>
                FREQUENTLY ASKED QUESTIONS
              </h1>

                <div className='flex flex-col gap-4 max-w-[800px] mt-24 w-full h-full px-8'>
                  <FaQ q='Lorem ipsum dolor sit amet?' a='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aliquam deserunt dolorem eius est expedita fugit in, incidunt minima optio porro quaerat quas quasi rem reprehenderit sed suscipit velit.' />
                  <FaQ q='Lorem ipsum dolor sit amet?' a='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aliquam deserunt dolorem eius est expedita fugit in, incidunt minima optio porro quaerat quas quasi rem reprehenderit sed suscipit velit.' />
                  <FaQ q='Lorem ipsum dolor sit amet?' a='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aliquam deserunt dolorem eius est expedita fugit in, incidunt minima optio porro quaerat quas quasi rem reprehenderit sed suscipit velit.' />
                  <FaQ q='Lorem ipsum dolor sit amet?' a='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aliquam deserunt dolorem eius est expedita fugit in, incidunt minima optio porro quaerat quas quasi rem reprehenderit sed suscipit velit.' />
                  <FaQ q='Lorem ipsum dolor sit amet?' a='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aliquam deserunt dolorem eius est expedita fugit in, incidunt minima optio porro quaerat quas quasi rem reprehenderit sed suscipit velit.' />
                  <FaQ q='Lorem ipsum dolor sit amet?' a='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aliquam deserunt dolorem eius est expedita fugit in, incidunt minima optio porro quaerat quas quasi rem reprehenderit sed suscipit velit.' />
                </div>
              </div>
              <div className='relative flex items-center justify-center w-full mt-20'>
                <div><Image src='/Group.png' width='1500' height='500' className='object-contain z-[0] p-4 relative opacity-[0,8] ' style={{ marginBottom: '-275px' }} /></div>
                <div className='absolute top-[420px] flex [&>h2]:z-[9] left-0 opacity-50 '>
                  <h2 className='slides-to-left slides-to-left-35s text-9xl font-BecauseYouWereHome tracking-[5px] bottom-[50px] w-max [&>*]:mx-[20px]'>
                    <span className='flex'>JoIn DIscord <FaDiscord className='hover:text-[#5865F2] transition-colors cursor-pointer ml-8 mt-2' /></span>
                    <span className='flex'> JoIn DIscord <FaDiscord className='hover:text-[#5865F2] transition-colors cursor-pointer ml-8 mt-2' /></span>
                    <span className='flex'>JoIn DIscord <FaDiscord className='hover:text-[#5865F2] transition-colors cursor-pointer ml-8 mt-2' /></span>
                  </h2>
                  <h2 className='slides-to-left slides-to-left-35s z-[9] text-9xl font-BecauseYouWereHome tracking-[5px] bottom-[50px] w-max [&>*]:mx-[20px]'>
                    <span className='flex'>JoIn DIscord <FaDiscord className='hover:text-[#5865F2] transition-colors cursor-pointer ml-8 mt-2' /></span>
                    <span className='flex'>JoIn DIscord <FaDiscord className='hover:text-[#5865F2] transition-colors cursor-pointer ml-8 mt-2' /></span>
                    <span className='flex'>JoIn DIscord <FaDiscord className='hover:text-[#5865F2] transition-colors cursor-pointer ml-8 mt-2' /></span>
                  </h2>
                  <h2 className='slides-to-left slides-to-left-35s z-[9] text-9xl font-BecauseYouWereHome tracking-[5px] bottom-[50px] w-max [&>*]:mx-[20px]'>
                    <span className='flex'> JoIn DIscord<FaDiscord className='hover:text-[#5865F2] transition-colors cursor-pointer ml-8 mt-2' /></span>
                    <span className='flex'>JoIn DIscord <FaDiscord className='hover:text-[#5865F2] transition-colors cursor-pointer ml-8 mt-2' /></span>
                    <span className='flex'>JoIn DIscord <FaDiscord className='hover:text-[#5865F2] transition-colors cursor-pointer  ml-8 mt-2' /></span>
                  </h2>
                </div>
              </div>
              <MyComponent />
            </div></>
        )}

      </main>
      <Footer />

    </div >

  );
}

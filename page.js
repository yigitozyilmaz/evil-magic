'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useCookie, useMedia, useWindowScroll } from 'react-use';
import Header from '@/components/header';
import TeamMember from '@/components/teammember';
import Footer from '@/components/footer';
import { twMerge } from 'tailwind-merge';
import { MdClose } from 'react-icons/md';
import { LuChevronRight } from 'react-icons/lu';

export default function Page() {
  const videoAreaIsShown = useMedia('(min-width: 1024px)', false);
  const { y } = useWindowScroll();
  const [skullIsHovered, setSkullIsHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);
  //const isLargeScreen = useMedia('(min-width: 1921px)', false);
  const [videoEnded, setVideoEnded] = useState(false);
  const isMobile = useMedia('(max-width: 1023px)', false);

  const [email, setEmail] = useState('');
  const [emailIsSent, setEmailIsSent] = useCookie('emailIsSent');

  useEffect(() => {
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    const a = setInterval(() => {
      window.scrollTo(0, 0);
    }, 100);
    wait(2000).then(() => {
      clearInterval(a);
      document.body.style.overflowX = 'clip';
      document.getElementById('full').style.display = 'block'; setLoaded(true)
    });
    if (emailIsSent !== 'true' && isMobile) wait(5000).then(() => setPopupIsOpen(true));
  }, []);

  useEffect(() => {
    setVideoIsPlaying(false);
  }, [videoAreaIsShown]);

  useEffect(() => {
    if (popupIsOpen) {
      document.body.style.overflowX = 'hidden';
      document.getElementById('full').style.display = 'none';
    } else {
      if (loaded) {
        document.body.style.overflowX = 'clip';
        document.getElementById('full').style.display = 'block';
      }
    }
  }, [popupIsOpen]);

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


  return (
    <>
      <Header />

      <div className='h-screen w-full flex items-center justify-center'>
        {/*<Image src='/logo.png' width={750} height={750} className="z-[10003]" /> */}
        <video src='/logointro.webm' autoPlay muted className='z-[10003] object-cover' width={1200} />
      </div>

      <div className={twMerge(
        'fixed z-[10002] top-0 left-0 right-0 bottom-0 overflow-hidden bg-black flex items-center justify-center',
        loaded && 'pointer-events-none animate-bottom-slide-out'
      )}>
        <div className='absolute left-0 right-0 top-0 bottom-0 bg-inside bg-center bg-no-repeat bg-cover animate-opacity'></div>
      </div>

      {popupIsOpen && (
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
      )}

      <div className='h-[calc(100vh+400px)] w-full fixed top-0 z-[-1]' style={{
        background: 'url(/bg.png) no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        transform: `translateY(${(y / 20) - 150}px)`,
      }} />

      {videoAreaIsShown ? (
        <>
          <div className='z-[9999] w-full h-full relative mt-[150px] lg:mt-[200px] xl:mt-[200px]' >
            <div className='absolute top-0 sm:top-[500px] md:top-[400px] lg:top-[50px] xl:top-[00px] 2xl:-top-[200px] 3xl:-top-[290px] 4xl:top-[20px] left-0 right-0'>
              <Image
                src='/bulutlarson.png'
                width={1920}
                height={1080}
                objectFit='cover'
                className='absolute z-[6] opacity-50 w-full'
                style={{
                  top: `${y / 5 - 250}px`,
                }}
              />
            </div>
            <Image
              src='/bulutalt.png'
              width={1920}
              height={1080}
              objectFit='cover'
              className='absolute z-[6] bottom-0 w-full'
            />
            <div className='absolute bottom-[15rem] flex items-center z-[10] w-full justify-center'>
              <h1 className='uppercase max-w-[500px] text-center text-[5.5rem] font-bold font-BecauseYouWereHome tracking-[5px] leading-[120px] text-[#3effc7] green-glow'>
                JOIN THE DEFENSE
              </h1>
            </div>
          </div>

          <div className='bg-[#00051c] text-white relative z-[99999]'>
            <div className='relative flex items-center justify-center h-full'>
              <Image src='/videombg.png' width={1920} height={1080} objectFit='cover' className=' relative top-[-45px] z-[13] pointer-events-none w-full' />
              <div className='w-full h-[70%] top-0 z-[6] absolute' style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }} />
              <video src='/gameplay.mp4' autoPlay muted className=' w-[68%] h-[73%] top-[0]  z-[6] absolute' />
              <div className='w-full h-[70%] top-0 z-[7] absolute bg-black/40'></div>
              <div className='w-full h-[70%] top-0 z-[7] absolute flex items-center justify-center'>
                <Image src='/playiconsmal.png' width={1024} height={495} className='cursor-pointer mt' style={{ opacity: 0 }} onClick={() => setVideoIsPlaying(true)} />
              </div>
              {videoIsPlaying && (
                <div className='fixed top-0 left-0 w-full h-full bg-black/80 z-[9999999] flex items-center justify-center p-[100px]' onClick={() => setVideoIsPlaying(false)}>
                  <div className='absolute right-[24px] top-2 md:right-[50px] md:top-5 xl:right-[60px]'>
                    <MdClose className='pointer-events-auto cursor-pointer size-5 md:size-7' onClick={() => setPopupIsOpen(false)} />
                  </div>
                  <iframe
                    src='https://www.youtube.com/embed/HTHx1z_HYOg?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&autoplay=1'
                    allowFullScreen
                    className='relative w-full h-full'
                  />
                </div>
              )}
            </div>
            <p className='absolute flex items-center justify-center bottom-[15px] w-full h-[400px] z-[999] ' style={{ opacity: 0.4 }}>
              The art elements in the video is not representing the final result.
            </p>
          </div>
        </>
      ) : (
        <>
          <div className='h-[570px] z-[999]' style={{
            backgroundImage: 'url(/hero.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }} />

          <div className='h-[400px] sm:h-[900px] relative w-full bg-[#00051c] z-[99]' onClick={() => setVideoIsPlaying(true)}>

            <> <Image src='/videombg.png' width={1024} height={595} className='absolute top-[50px] z-[10003]' />
              <video src='/gameplay.mp4' autoPlay muted className='z-[10003] w-[75%] h-[70%] top-0 left-14 z-[6] absolute' /></>
            {videoIsPlaying && (
              <div className='fixed top-0 left-0 w-full h-full bg-black/80 z-[9999999] flex items-center justify-center p-[100px]' onClick={() => setVideoIsPlaying(false)}>
                <iframe
                  src='https://www.youtube.com/embed/HTHx1z_HYOg?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&autoplay=1'
                  allowFullScreen
                  className='relative w-[auto] h-[auto]'
                />
              </div>
            )}

          </div>
        </>
      )}
      <div className='bg-transparent sm:bg-[#00051c] text-white flex relative -mt-[100px] sm:-mt-[400px] z-[999] lg:-mt-[120px] h-[1200px] justify-center' style={{
        backgroundImage: 'url(/arknewbg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className='sm:flex hidden absolute -top-[100px] w-full h-[400px] bg-gradient-to-b from-transparent via-[#00051c] to-transparent'></div>
        <div className='text-4xl relative lg:text-7xl text-white mt-[250px] sm:z-[12] px-[24px] lg:px-0 xl:left-[-300px] 2xl:left-[-370px] top-[50px] flex flex-col 2xl:rotate-[-3deg]'>
          <span className='my-8  lg:leading-[100px] tracking-[5px] font-BecauseYouWereHome font-semibold text-5xl text-shadow leading-[70px]' style={{ transform: "scale(1, 1.2)" }}>
            CARDS ARE TELLING THAT,
          </span>

          <span className='text-shadow   lg:leading-[100px] tracking-[5px] font-BecauseYouWereHome font-semibold leading-[50px] ' style={{ transform: "scale(1, 1.2)" }}>
            IT{'\''}S YOUR TURN TO
          </span>
          <span style={{ transform: "scale(1, 1.2)" }} className='whitespace-nowrap text-[#f40868] lg:leading-[100px] tracking-[5px] font-BecauseYouWereHome font-semibold   text-5xl lg:text-8xl text-shadow mt-4 leading-[70px]'>
            RULE THE WORLD
          </span>

          <p className='banlancedText absolute w-auto p-4  w-[350px] text-[1rem] break-words tracking-normal leading-normal sm:tracking-normal top-[400px] md:left-[20px] lg:top-[450px] lg:left-[50px] rotate-[0deg] 2xl:rotate-[3deg] font-inherit'>
            {`Step into the realm of Wickedverse, a battlefield ripe for those who dare to wield power and cunning. Each match is a meticulously crafted dance of power, where deck-building prowess and auto chess tactics collide in a spectacle of strategy and skill. Pulse-pounding matches challenging you to outsmart in a mesmerizing dance of cards and champions.`}
          </p>
        </div>

        <Image src='/tarotson.png' width={1412} height={2012} objectFit='cover' className='hidden xl:block absolute pointer-events-none w-[500px] h-[700px] xl:right-[100px] 2xl:right-[250px] top-[320px] rotate-[5deg]' />


      </div>

      <div className='z-[20] flex min-h-[1200px] text-white items-center justify-center -mt-[80px] w-full relative h-[1200px]' id='story' style={{
        backgroundImage: 'url(/storybgson.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <Image src='/storyson.png' width={2607} height={2100} className='hidden xl:block w-[700px] 3xl:w-[1040px] h-auto object-contain absolute left-0' />
        <div className='flex flex-col px-8 absolute right-0 sm:right-[90px] 3xl:right-[100px]'>
          <h1 style={{ transform: "scale(1, 1.2)" }} className='text-shadow font-BecauseYouWereHome font-semibold leading-[80px] lg:leading-[150px] tracking-[5px] text-4xl lg:text-7xl max-w-[700px] ml-[30px] mt-[80px] relative'>
            <div>EVIL WIZARD CUT THE</div>
            <div className='-mt-[30px]'> <span className='rotate-[5deg] inline-block relative top-9 text-6xl lg:text-8xl'>INTERNET</span></div>
            <Image src={!skullIsHovered ? '/learnmorehoversiz.webp' : '/learnmorehover.webp'} width={160} height={60} objectFit='cover' className='absolute top-[-65px] right-0 cursor-pointer z-[9999]' onMouseEnter={() => setSkullIsHovered(true)} onMouseLeave={() => setSkullIsHovered(false)} />
          </h1>

          <p className='banlancedText max-w-[700px] pl-10 font-medium text-sm text-justify sm:text-lg relative top-[100px]'>
            {`In the heart of a mysterious mountain, an ancient prophecy unfolds within the halls of a formidable castle, home to a lineage of nefarious wizards. The latest scion of this dark family, after years of searching, uncovers the secret of an ancestor, a powerful wizard who had discovered the means to sever the world's internet - a source of immense power`}
          </p>
          <p className='banlancedText max-w-[700px] pl-10 font-medium text-sm text-justify sm:text-lg relative top-[120px]'>
            "Evil Magic Defense" is not just a game of strategy; it's a saga of cunning, legacy, and the unyielding pursuit of domination, where defending the castle becomes a dark ritual of its own.
          </p>
        </div>
        <div className='absolute -bottom-[600px] w-full h-[600px] bg-gradient-to-b from-[#00051c]   via-[#00051c] to-transparent'></div>
      </div>

      <div className='w-full h-max pt-[200px]' id="full">
        <Image src='/bg2.png' width={7919} height={13237} className='h-[2800px] object-cover w-full absolute z-[10]' />
        <div className='bg-[#00051c] h-[2800px] object-cover w-full absolute z-[9]'></div>

        <div className='z-[40] text-white relative flex gap-x-24 items-center justify-center h-[1200px] -mt-1'>

          <div className='flex flex-col absolute px-0 3xl:px-12 left-10 3xl:left-[100px] gap-y-12'>
            <h1 style={{ transform: "scale(1, 1.2) rotate(-2deg)" }} className='text-shadow font-BecauseYouWereHome font-semibold leading-[50px] 2xl:leading-[150px] tracking-[5px] text-5xl 2xl:text-7xl max-w-[1000px] relative'>
              UNLOCK AND UPGRADE
              <span className='text-[#38F7A1] inline-block text-5xl xl:text-9xl leading-[80px] xl:leading-[150px] mt-0 sm:-mt-[25px]'>NEW CHAMPIONS</span>
            </h1>

            <p className='banlancedText ml-0 sm:ml-[8px] max-w-[700px] pr-8 sm:pr-0 font-medium text-sm lg:text-lg z-[11] mt-[30px] text-justify'>
              A vast array of champions awaits your command. Each game is an opportunity to unlock new, powerful champions, each with their unique abilities and dark secrets. As you progress, strategically upgrade your champions, enhancing their skills and adapting their powers to suit your evolving strategy. Master the art of dark necromancy and lead your legion to victory!
            </p>
          </div>

          <Image src='/upgrade.png' width={1200} height={1200} objectFit='cover' className='w-[950px] h-[1200px] 4xl:w-[1100px] 4xl:h-[1300px] object-contain absolute right-0 hidden 2xl:block' style={{ top: y / 8 - 800 }} />
        </div>

        <div className='z-[10] text-white relative flex items-center px-8 justify-center h-screen -mt-[150px] right-0 sm:-right-[100px]'>
          <Image src='/rewards.png' width={1300} height={1511} objectFit='cover' className='sm:w-[1400px] h-auto relative hidden lg:flex lg:w-[900px] 3xl:w-[1400px] bottom-[150px] lg:-left-[300px] 3xl:-left-[500px]' />
          <div className='flex w-full mt-[80px] !text-center min-w-[700px] flex-col items-center justify-center gap-y-12 relative right-[0] lg:right-[300px] 3xl:right-[410px]'>
            <h1 style={{ transform: "scale(1, 1.2) rotate(5deg)" }} className='text-shadow font-BecauseYouWereHome font-semibold leading-[80px] xl:leading-[120px] tracking-[5px] text-4xl xl:text-8xl max-w-[1000px] relative text-center'>
              GET <span className='text-[#38F7A1] inline-block text-5xl xl:text-9xl'>REWARDS</span><br />
              AND UPGRADE <br />
              <span className='text-[#38F7A1] inline-block'>YOUR BASE</span>
            </h1>
            <p className='banlancedText max-w-[320px] sm:max-w-[650px] font-medium text-sm lg:text-lg z-[11] mt-[40px] text-justify'>
              In "Evil Magic Defense," every victory yields rewards crucial for expanding your dominion. Utilize the spoils of war to build and enhance key structures like the dark altar, the blood-stained fighting pit, mine, the tactical tent and more. Upgrading these buildings not only strengthens your base but also unlocks new strategic possibilities for your conquests. Transform your lair into an unassailable fortress, each improvement solidifying your rule and setting the stage for your reign.
            </p>
          </div>
        </div>
        <div className='text-white relative flex bg-[#00001d] h-[800px] mt-[500px] w-full'>
          <div className='absolute -top-[100px] left-0 right-0 h-[600px] z-[10] bg-gradient-to-b from-transparent via-[#00051c] to-transparent'></div>
          <div className='flex flex-col w-full'>
            <div className='left-0 sm:left-[0px] w-full h-full px-[2rem] sm:px-[5rem] xl:px-[15rem] relative z-[20] top-[250px]'>
              <h1 className='left-0 sm:left-[100px] text-shadow text-[#38F7A1] font-BecauseYouWereHome font-semibold max-w-[500px] leading-[120px] tracking-[5px] text-8xl relative mb-[40px]' style={{ transform: "scale(1, 1.2)" }}>
                <div className='absolute text-white rotate-[-10deg] -top-[120px] left-[5px] sm:left-[-50px] lg:left-[-75px] text-[5rem]'>CRAFT</div><div className='lg:text-[7rem] text-[4rem]'>NEW CARDS</div>
              </h1>
              <p className='banlancedText mt-[60px] max-w-[600px] font-medium text-sm lg:text-lg text-justify'>
                Crafting unique cards that transform into powerful spells on the battlefield. Experiment with different combinations to enhance your strategy, adapting to each match's challenges. Perfect your deck, unleash spell synergies, and outmaneuver opponents, showcasing your skill in the art of magical warfare.
              </p>
            </div>
            <div className='hidden lg:block absolute w-full h-full -right-[400px] 3xl:-right-[100px] top-[100px] 2xl:top-[200px] 3xl:top-[250px] z-[15] scale-75 3xl:scale-100'>
              <Image src='/craft4.png' width={473} height={572} objectFit='cover' className='w-[402px] h-[472px] absolute right-[1100px] z-[10]' style={{ top: y / 18 - 850 }} />
              <Image src='/glowcards.webp' width={600} height={600} objectFit='cover' className='w-[2420px] h-[1450px] absolute right-[100px] z-[5] object- opacity-[.8]' style={{ top: y / 18 - 1300 }} />
              <Image src='/craft3.png' width={502} height={680} objectFit='cover' className='w-[500px] h-[700px] absolute right-[800px] top-[-200px] z-[10] scale-[0.9]' style={{ top: y / 16 - 1100 }} />
              <Image src='/craft2.png' width={673} height={908} objectFit='cover' className='w-[800px] h-[1100px] absolute right-[350px] top-[-350px] z-[10] scale-75' style={{ top: y / 12 - 1400 }} />
              <Image src='/craft1.png' width={955} height={1135} objectFit='cover' className='w-[1255px] h-[1335px] absolute right-[-300px] top-[-200px] z-[10] scale-[0.8] object-contain' style={{ top: y / 5.5 - 2000 }} />
            </div>
          </div>
          <div className='absolute bottom-2 w-full h-[800px] bg-gradient-to-b from-transparent z-[10] via-[#00001d] to-[#00001d]'></div>
        </div>
      </div>
      <div className='z-[10] w-full relative bg-[#00001d] flex flex-col gap-y-14 mt-[200px] pt-[10rem] sm:pt-0 text-white'>
        <div className='absolute -top-[800px] w-full h-[800px] bg-gradient-to-b from-transparent z-[-10] via-[#00001d] to-[#00001d]'></div>
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
        <div className='w-full -mt-[150px] h-[780px] flex gap-x-10 justify-center pr-0 xl:pr-0 2xl:pr-[150px]'>
          <Image src='/ewilhero.png' width={780} height={780} objectFit='cover' className='hidden xl:block w-[680px] h-[680px] top-[100px] xl:left-0 2xl:left-[100px] relative z-[10]' />
          <div className='flex flex-col items-center w-full gap-y-8'>
            <div className='relative'>
              <Image src='/Logo3Dpng.png' width={1000} height={1000} className='w-[650px] h-[300px] relative mt-24 lg:mt-8' />
              <Image src='/popupbubble.png' width={250} height={250} className='absolute -right-[150px] top-[45px] 2xl:flex hidden' />
              <Image src='/skull.png' width={700} height={700} className='absolute -right-[600px] -top-[20px] scale-x-[-1] 2xl:flex hidden' />
            </div>

            <p className='banlancedText max-w-[540px] font-medium text-sm lg:text-lg -mt-[40px] text-justify px-4 2xl:px-0 '>
              Immerse yourself in the legacy of the 'Evil Wizards,' where every NFT is a gateway to a long line of powerful ancestors. Each wizard in this exclusive collection represents a piece of a centuries-old family saga, rich with dark magic and curses. By owning a piece of this collection, you don't just acquire a digital collectible; you become part of a lineage of an untold prophecy. Embrace this unique opportunity to connect with history's most formidable wizards and claim your place in the 'Evil Wizards' family.
              Collect, trade, and celebrate the mystical heritage that each NFT embodies. Join now and wield the power of generations!
            </p>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id='gooeysvg'>
              <defs>
                <filter id="gooey">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                  <feColorMatrix
                    in="blur"
                    type="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="highContrastGraphic"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="highContrastGraphic"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>

            <button id="gooey-button" className='mt-2 mb-10'>
              Explore
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
            </button>
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

      <div className='relative pt-[800px] text-white sm:h-[2000px] xl:h-[1800px] bg-[#00001d] sm:-mb-[400px] -mt-[150px]' style={{
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
        </div>
        <div className='absolute flex -bottom-[500px] w-full h-[1000px] from-transparent via-[#00001d] to-transparent'></div>
      </div>

      <div className='text-white h-max bg-[#00001d] top-[1100px] z-[10] relative w-full scroll-mt-32 px-4 lg:px-0 pt-[1200px] -mt-[2000px] sm:-mt-[800px] md:-mt-[1800px] lg:-mt-[1300px]' id='investors'>
        <div className='absolute -z-10 -top-[900px] w-[200vw] -left-10 h-[1000px] bg-gradient-to-b from-transparent via-[#00001d] to-[#00001d]'></div>
        <div className='flex flex-col items-center w-full'>
          <h1 style={{ transform: "scale(1, 1.2)" }} className='flex flex-row gap-2 text-shadow font-BecauseYouWereHome font-semibold text-center leading-[50px] lg:leading-[90px] lg:leading-[150px] tracking-[5px] text-3xl lg:text-5xl'>
            SOME OF <div className='text-4xl lg:text-8xl '>OUR INVESTORS</div> <div className='text-3xl text-[#38F7A1] pt-[60px]'>VC</div>
          </h1>

          {/*<div className='flex flex-col items-center gap-24 my-12 xl:flex-row'>
            <Image src='/ref22.png' width={361} height={167} className='h-[115px] object-contain' />

            <Image src='/ref3.png' width={249} height={231} className='h-[115px] object-contain' />
            <Image src='/ref11.png' width={548} height={114} className='h-[115px] object-contain' />
          </div> */}

          {/*<h1 style={{ transform: "scale(1, 1.2)" }} className='text-shadow font-BecauseYouWereHome font-semibold leading-[100px] tracking-[5px] text-5xl mt-[10rem] text-center'>
            SOME OF THE <span className='text-5xl sm:text-6xl lg:text-8xl'>BACKGROUNDS</span><br />
            OF <span className='text-6xl lg:'>OUR INVESTORS</span> <span className='text-4xl text-[#00ff80]'>ANGEL</span>
          </h1> */}

          {/* <div className='flex flex-col items-center gap-24 my-12 mb-48 xl:flex-row'>
            <Image src='/ref22.png' width={361} height={167} className='h-[115px] object-contain' />
            <Image src='/ref3.png' width={249} height={231} className='h-[115px] object-contain' />
            <Image src='/ref11.png' width={548} height={114} className='h-[115px] object-contain' />
          </div>*/}
        </div>
      </div>

      <div className='h-[806px] -mt-1 relative top-[1100px] text-white flex items-center w-full justify-center flex-col gap-y-4 px-4' style={{
        backgroundImage: 'url(/nftfooterust.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className='absolute -top-[200px] w-full h-[500px] bg-gradient-to-b from-transparent via-[#00001d] to-transparent'></div>
        <h1 style={{ transform: "scale(1, 1.2) rotate(-5deg)" }} className='text-5xl leading-[80px] lg:leading-[100px] lg:text-7xl font-semibold text-center text-shadow font-BecauseYouWereHome max-w-[500px] mb-8'>
          IT{'\''}S YOUR TURN TO <span className='text-[#f1036a]'>RULE THE WORLD</span>
        </h1>

        <p className='text-center font-medium text-sm lg:text-xl max-w-[500px]'>
          Subscribe to the newsletter for opportunities like early beta access and lots of free stuff
        </p>

        <div className='flex flex-wrap items-center justify-center p-1 mt-4 bg-[#a9615c] rounded-lg'>
          <input type='text' className='w-[400px] h-[50px] bg-neutral-900 text-white rounded-lg text-center text-lg font-semibold outline-none' placeholder='Enter your email' value={email} onChange={e => setEmail(e.target.value)} onKeyUp={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              sendEmail();
            }
          }} />
          <button className='w-max px-4 rounded py-2  text-white text-center text-lg font-semibold outline-none' onClick={sendEmail}>
            <LuChevronRight size={30} />
          </button>
        </div>
      </div>

      <div className='text-white h-max z-[10] relative w-full top-[1100px]'>
        <Footer />
      </div>
    </>
  );
}
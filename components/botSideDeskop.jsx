import Image from 'next/image';
import TeamMember from '@/components/teammember';
import FaQ from '@/components/faq';
import { FaDiscord } from 'react-icons/fa';
import MyComponent from '@/components/altasker';

export default function botSideDeskop() {
  return (
    <div className='flex h-max w-full flex-col items-center justify-center  mt-[10vh] xl:mt-[50vh] 2xl:mt-[40vh]'  >
    <div className='z-[10] w-full relative bg-[#00001d] flex flex-col gap-y-14 mt-[1200px] pt-[10rem] sm:pt-0 text-white'>
      <div className='absolute -top-[800px] w-full h-[950px] md:-top-[860px]  bg-gradient-to-b from-transparent z-[-10] via-[#00001d] to-[#00001d]'></div>
      <div className='relative flex w-max h-max rotate-[-4deg] bottom-[300px]'  >
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
      <div className='w-full -mt-[150px] h-[780px] flex gap-x-10 justify-center pr-0 xl:pr-0 2xl:pr-[150px] max-2xl:h-[920px] '  style={{ backgroundImage: `url('/17.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Image src='/ewilhero.png' width={780} height={780} objectFit='cover' className='hidden xl:block w-[680px] h-[680px] top-[100px] xl:left-0 2xl:left-[100px] relative z-[10]' />
        <div className='flex flex-col items-center w-full gap-y-8'>
          <div className='relative '>
            <Image src='/Logo3Dpng.png' width={1000} height={1000} className='w-[612px] h-[350px] relative mt-24 lg:mt-16   ' />
            <Image src='/popupbubble.png' width={350} height={350} className='absolute -right-[200px] top-[105px] 2xl:flex hidden' />
            <Image src='/skull.png' width={1000} height={1000} className='absolute -right-[600px] top-[160px] scale-x-[-1] 2xl:flex hidden' />
          </div>

          <p className='banlancedText max-w-[540px] font-medium text-sm lg:text-lg -mt-[40px]  px-4 2xl:px-0 text-center'>
          The curse lives on. And so do they.
          <br />
          <br />
          Each Evil Wizard holds a piece of forbidden magic and a story untold. Each NFT is a key to their story.
          <br />
          <br />

          Unlock their secrets. Shape the prophecy.
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
      <div className='relative flex w-max h-max rotate-[3deg] top-[120px] lg:top-[180px] z-[9] ' >
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
      <div className='px-4 xl:px-0 z-[12] relative flex items-center justify-center flex-col text-center gap-y-8 -scroll-mt-[40rem]' id='team' >
        <h1 style={{ transform: "scale(1, 1.2)" }} className='text-shadow font-Boucherie tracking-[5px] text-[4rem] mt-4'>
        WHO WE ARE
        </h1>

        <p className='banlancedText max-w-[800px] font-medium text-sm lg:text-lg text-center'>
        We are the storytellers, creators, and visionaries bound by a shared love for dark fantasy and interactive worlds. Our core team combines expertise in game development, digital art, and world-building, backed by years of hands-on industry experience.<br /><br />

        We don’t just tell tales — we bring them to life.
        A living world of mystery, magic, and sagas awaits those bold enough to step in.
        <br /><br />
        The journey begins now. Will you be part of it?
        </p>

        <div className='flex flex-wrap max-w-[1000px] items-center justify-center gap-12'>
          <TeamMember name='Royal Dead' imagePath='/team/royal.png' q position='EXECUTER'  />
          <TeamMember name='Wolffe' imagePath='/team/wolffe.png' q position='ART DIRECTOR'  />
          <TeamMember name='MACHEWIZlI' imagePath='/team/mache.png' q position='TECH'  />
          <TeamMember name='RIVERA' imagePath='/team/rivera.png' q position='WORLD BUILDING'  />
          <TeamMember name='SACRED' imagePath='/team/sacred.png' q position='PRODUCT'  />
        </div>
        <div  className='absolute mt-[1600px] w-full h-[1650px] bg-gradient-to-b from-transparent z-[-10] via-[#00001d] to-[#00001d]'></div>
      </div>

    </div>
    
    <div className='relative z-50 flex items-center justify-center w-full mt-20'>
      <div><Image src='/Group.png' width='1500' height='500' className='object-contain z-[0] p-4  relative opacity-[0,8] 2xl:mb-[-275px] md:mb-[-175px]' /></div>
    </div>
    <MyComponent />

  </div>
  );
}

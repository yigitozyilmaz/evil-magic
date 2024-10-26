import Image from 'next/image';
import TeamMember from '@/components/teammember';
import FaQ from '@/components/faq';
import { FaDiscord } from 'react-icons/fa';
import MyComponent from '@/components/altasker';

export default function botSideDeskop() {
  return (
    <div className='flex h-max w-full flex-col items-center justify-center mt-[10vh] xl:mt-[150vh] 2xl:mt-[40vh]'  >
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
          ABOUT US
        </h1>

        <p className='banlancedText max-w-[800px] font-medium text-sm lg:text-lg text-justify'>
          At Fusion Up, we're driven by a philosophy that mirrors the principles of alchemy, believing in the transformative power of fusion. Our team, deeply entrenched in the art world, brings a unique blend of creative artistry and scientific precision to every project. We approach game development as an art form, where imaginative design and data-driven strategies fuse to create immersive experiences. By mixing these elements, we craft games that are not just played, but felt and remembered.<br /><br />
        </p>

        <div className='flex flex-wrap max-w-[1000px] items-center justify-center gap-12'>
          <TeamMember name='Royal Dead' imagePath='/team/royal.png' q position='EXECUTER' linkedIn='https://www.linkedin.com' />
          <TeamMember name='Wolffe' imagePath='/team/wolffe.png' q position='ART DIRECTOR' linkedIn='https://www.linkedin.com' />
          <TeamMember name='Lev VercettI' imagePath='/team/lev.png' q position='ADVISOR' linkedIn='https://www.linkedin.com' />
          <TeamMember name='OldnIcker' imagePath='/team/oldnick.png' q position='ADVISOR' linkedIn='https://www.linkedin.com' />
          <TeamMember name='SACRED' imagePath='/team/Yigit.png' q position='TECHNICAL' linkedIn='https://www.linkedin.com' />
          <TeamMember name='CORVUS' imagePath='/team/Anıl.png' q position='FINANCIAL' linkedIn='https://www.linkedin.com' />
          <TeamMember name='SOLRIVERA' imagePath='/team/yesim.png' q position='WORLD BUILDING' linkedIn='https://www.linkedin.com' />
          <TeamMember name='HELLO MOON' imagePath='/team/hellomoon.png' q position='INFRASTRUCTURE' linkedIn='https://www.linkedin.com' />
        </div>
        <div className='absolute mt-[1200px] w-full h-[1150px] bg-gradient-to-b from-transparent z-[-10] via-[#00001d] to-[#00001d]'></div>
      </div>

    </div>
    <div className='mt-[800px] 2xl: mt-[550px] z-[999]' > <h1 className='font-Boucherie text-5xl leading-[60px] text-center lg:text-7xl tracking-[5px] lg:leading-[100px]' id='freq'>
      FREQUENTLY ASKED QUESTIONS
    </h1>

      <div className='flex flex-col gap-4 max-w-[800px] mt-24 w-full h-full 'style={{marginLeft: '4.7rem'}}>
        <FaQ q='What is the Collection?' a='The Collection is part of a new brand called Evil Magic, which is heavily focused on creating a culture and intellectual property (IP). The NFT collection serves as a premium subscription model that connects the brands by-products, including games and other content, offering users exclusive privileges in both digital and physical realms. Additionally, it aims to create an inner circle for the brand itself.' />
        <FaQ q='What Benefits Do Our NFTs Offer?' a={` Revenue Sharing: Be part of the revenue sharing model in future product releases.
Event Entries: Access to exclusive events.
Priority and various advantages in upcoming product releases.
VIP Membership: Become a VIP member of the Evil Magic community and an alpha tester.
Design Participation: Get involved in the design processes of the EM world.
Exclusive Collectibles: Special physical collectibles for community members.`} />
        <FaQ q='What is the Release Date and Price of the Collection?' a='The release date and price of the Collection are yet to be announced. Stay tuned for updates. (TBA - To Be Announced)' />
        <FaQ q='How Many Pieces Will the Collection Include?' a=' Details will be announced soon. (TBA - To Be Announced)' />
      </div>
    </div>
    <div className='relative flex items-center justify-center w-full mt-20'>
      <div><Image src='/Group.png' width='1500' height='500' className='object-contain z-[0] p-4  relative opacity-[0,8] 2xl:mb-[-275px] sm:mb-[-275px]' /></div>
      <div className='absolute top-[250px] 2xl:top-[420px] flex [&>h2]:z-[9] left-0 opacity-50 '>
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

  </div>
  );
}

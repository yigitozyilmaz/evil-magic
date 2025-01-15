import { FaXTwitter } from 'react-icons/fa6';
import { FiInstagram } from 'react-icons/fi';
import { FaLinkedin, FaMedium, FaYoutube, FaDiscord } from 'react-icons/fa';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {

  const links = {
  };

  const socials = {
    'https://x.com/evilwizardsNFT': FaXTwitter,
  };

  function SocialIcon({ Icon, href }) {
    return (
      <Link className='bg-neutral-900 rounded-full p-4 transition-all duration-500 hover:shadow-[0px_0px_20px_5px_#38F7A1]' href={href}>
        <Icon size={32} />
      </Link>
    );
  }

  return (
    <div className="text-white  lg:h-[336px] py-16 pt-8 pb-0 sm:px-32 sm:items-center items-center flex-col lg:flex-row flex bg-black border-t-2 border-t-[#00ff80] justify-between z-50">
      <div className="flex flex-col items-center   gap-x-4 min-w-[300px]">
        <div className='flex items-end justify-center sm:justify-start flex-1 mt-4 gap-x-2 mb-[8px]'>
          <Image src='/textlogo.png' width={160} height={70} className=''/>
        </div>

        <div className='opacity-50 sm:text-start text-center text-sm mt-4 lg:justify-between lg:items-end mb-4'>
          © Evil Magic. All rights reserved.
        </div>
      </div>

      <div className='flex flex-col items-center gap-2  justify-end pb-4'>
        <div className='flex items-center justify-center gap-6 mb-[44px] px-[60px]'>
            <SocialIcon href={"https://x.com/evilwizardsNFT"} Icon={FaXTwitter} key={"https://x.com/evilwizardsNFT"}  />
        </div>
      </div>

      <Image src='/iskelet.png' width={1035} height={529} className='w-[835px] h-[427px] relative bottom-[65px]  hidden xl:block' />
    </div>
  );
}
import { FaXTwitter } from 'react-icons/fa6';
import { FiInstagram } from 'react-icons/fi';
import { FaLinkedin, FaMedium, FaYoutube, FaDiscord } from 'react-icons/fa';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {

  const links = {
    'Privacy Policy': '/privacy',
    'Terms and Conditions': '/terms'
  };

  const socials = {
    'https://x.com/evilwizardsNFT': FaXTwitter,
    //'https://instagram.com': FiInstagram,
    //'https://linkedin.com': FaLinkedin,
    'https://medium.com/@evilwizardsNFT': FaMedium,
    'https://www.youtube.com/channel/UCUu_jwb8PZDU1sDe-Nx-4YA': FaYoutube,
    '/discordlink': FaDiscord
  };

  function SocialIcon({ Icon, href }) {
    return (
      <Link className='bg-neutral-900 rounded-full p-4 transition-all duration-500 hover:shadow-[0px_0px_20px_5px_#38F7A1]' href={href}>
        <Icon size={32} />
      </Link>
    );
  }

  return (
    <div className="text-white h-[500px] lg:h-[336px] py-16 pt-8 pb-0 sm:px-32 sm:items-center items-center flex-col lg:flex-row flex bg-black border-t-2 border-t-[#00ff80] justify-between">
      <div className="flex flex-col items-center  h-full gap-x-4 min-w-[300px]">
        <div className='flex items-end justify-center sm:justify-start flex-1 mt-4 gap-x-2 mb-[80px]'>
          <Image src='/textlogo.png' width={160} height={70} className=''/>
        </div>

        <div className='opacity-50 sm:text-start text-center text-sm mt-4 lg:justify-between lg:items-end mb-8'>
          © Fusion Up. All rights reserved.
        </div>
      </div>

      <div className='flex flex-col items-center gap-2 h-full justify-end pb-8'>
        <div className='flex items-center justify-center gap-6 mb-[84px]'>
          {Object.keys(socials).map(social => (
            <SocialIcon href={social} Icon={socials[social]} key={social} />
          ))}
        </div>
        <div className='flex flex-row gap-2'>
          {Object.keys(links).map(link => (
            <a className='hover:text-[#00ff80] transition-all opacity-50 hover:opacity-100' href={links[link]} key={link}>
              {link}
            </a>
          ))}
        </div>
      </div>

      <Image src='/iskelet.png' width={1035} height={529} className='w-[835px] h-[427px] relative bottom-[65px] left-[120px] hidden xl:block' />
    </div>
  );
}
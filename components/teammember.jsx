import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

export default function TeamMember({ imagePath, name, position, linkedIn  }) {
        //<Link href={linkedIn} className='hover:text-[#38F7A1] transition-colors mt-4'>
        //<FaXTwitter size={18} />
     // </Link>
  return (
    <div className="flex flex-col items-center">
      <Image src={imagePath} alt={name} width={256} height={256} />
      <h2 className="font-BecauseYouWereHome font-semibold tracking-[5px] text-[2rem] mt-[-55px]">
        {name}
      </h2>
      <span className='text-base text-[#38F7A1] font-semibold  tracking-[5px] mt-1'>{position}</span>


    </div>
  );
}
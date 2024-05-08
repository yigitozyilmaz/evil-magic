import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

export default function TeamMember({ imagePath, name, position, linkedIn, description }) {
  return (
    <div className="flex flex-col items-center">
      <Image src={imagePath} alt={name} width={256} height={256} />
      <h2 className="font-BecauseYouWereHome font-semibold tracking-[5px] text-[2rem] mt-[-80px]">
        {name}
      </h2>
      <span className='text-base text-[#38F7A1] font-semibold font-BecauseYouWereHome tracking-[5px] mt-1'>{position}</span>
      <Link href={linkedIn} className='hover:text-[#38F7A1] transition-colors mt-4'>
        <FaXTwitter size={18} />
      </Link>

      <p className="mt-4 max-w-[240px] text-justify text-sm opacity-70 font-medium">
        {description}
      </p>
    </div>
  );
}
import Image from 'next/image';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function TopLightPhoto() {
  const [lightOn, setLightOn] = useState(false);

  return (
    <>
      <Image
        src='/lightsoff.png'
        className={twMerge(
          'object-cover w-[100%] h-[100dvh] transition-all duration-500 ease-in-out',
          lightOn ? 'opacity-0' : 'opacity-100'
        )}
        width='1920'
        height='1080'
      />
      <Image
        src='/lightson.png'
        className={twMerge(
          'object-cover w-full h-[100dvh] transition-all duration-500 ease-in-out absolute',
          lightOn ? 'opacity-100' : 'opacity-0'
        )}
        width='1920'
        height='1080'
      />

      <Image
        src={lightOn ? '/button_open.png' : '/button_closed.png'}
        width={620}
        height={213}
        className='w-[100px] lg:w-[150px] h-auto object-contain absolute right-[20px] lg:right-[55px] top-[100px] cursor-pointer'
        onClick={() => setLightOn(!lightOn)}
      />
    </>
  );
}

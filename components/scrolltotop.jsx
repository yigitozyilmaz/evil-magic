'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { MdArrowUpward } from 'react-icons/md';
import { useWindowScroll } from 'react-use';
import { twMerge } from 'tailwind-merge';

export default function ScrollToTop() {
  const pathname = usePathname();
  const { y } = useWindowScroll();

  useEffect(() => {
    if (pathname !== '/') return;
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={twMerge(
      'fixed bottom-2 bg-black right-2 z-[999999] w-[48px] h-[48px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 ease-in-out',
      y > 50 ? 'opacity-100' : 'opacity-0 pointer-events-none'
    )} onClick={() => window.scrollTo(0, 0)}>
      <MdArrowUpward className='text-[#38F7A1]' size={20} />
    </div>
  );
}
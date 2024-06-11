import { LuChevronDown } from 'react-icons/lu';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function FaQ({ q, a }) {
  const [isOpen, setIsOpen] = useState(false);

  const renderAnswer = (answer) => {
    const items = answer.split(/\n|•/).filter(item => item.trim() !== '');
    return items.map((item, index) => (
      <li key={index}>{item.trim()}</li>
    ));
  };

  return (
    <div className={twMerge(
      'flex gap-y-2 rounded-lg transition-all flex-col bg-[#3effc810]',
      isOpen ? 'bg-[#3effc830]' : 'hover:bg-[#3effc820]'
    )}>
      <div className={twMerge(
        'flex gap-x-2 items-center transition-all select-none text-xl font-semibold cursor-pointer px-4 pt-4',
        isOpen ? 'text-[#00ff80]' : 'pb-4'
      )} onClick={() => setIsOpen(!isOpen)}>
        {q} <LuChevronDown size={16} className={twMerge(
          'transition-all',
          isOpen && 'rotate-180'
        )} />
      </div>

      <div className={twMerge(
        'flex flex-col gap-y-2 transition-all pb-4 px-4 opacity-0 max-h-0 overflow-hidden cursor-text',
        isOpen ? 'opacity-100 max-h-[30vh]' : '-mt-7 pointer-events-none'
      )}>
        <ul className="list-disc pl-5">
          {renderAnswer(a)}
        </ul>
      </div>
    </div>
  );
}

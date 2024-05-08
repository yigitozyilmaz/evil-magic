import { twMerge } from 'tailwind-merge';

export default function Button({ children, activeTab, setActiveTab }) {
  return (
    <button className={twMerge(
      'px-6 py-2 font-semibold bg-[#232349] w-max lg:w-[130px] hover:scale-110 transition-all rounded-full',
      activeTab === children ? 'bg-white/80 text-black' : ' hover:bg-white hover:text-black'
    )} onClick={() => {
      if (activeTab === children) return setActiveTab(null);
      setActiveTab(children);
    }}>
      {children}
    </button>
  );
}
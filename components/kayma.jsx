import Image from 'next/image';
import { useEffect, useRef,useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';


export default function Kayma() {
    const ref = useRef(null)
    const [topValue, setTopValue] = useState('8%'); // Varsayılan değer
    const { scrollYProgress } = useScroll(ref, { threshold: 0.5 });
    const [data, setData] = useState({
        'Hair': null,
        'Hat': null,
        'Eyewear': null,
        'Beard': null,
        'Torso': null,
        'Skin': null,
        'Item': null
      });
      const [a, setA] = useState(0);
  
    useEffect(() =>
    scrollYProgress.on("change", b => {
      if (b >= 0.28 && b <= 0.31) {
        const _a = 1;
        setA(_a);
      } else if (b < 0.28) {
        const _a = 0;
        setA(_a);
      } else if (b >= 0.31 && b <= 0.34) {
        const _a = 2;
        setA(_a);
      }
      else if (b >= 0.34 && b <= 0.37) {
        const _a = 3;
        setA(_a);
      }
      else if (b >= 0.37 && b <= 0.40) {
        const _a = 4;
        setA(_a);
      }
      else if (b >= 0.40 && b <= 0.44) {
        const _a = 5;
        setA(_a);
      }
      else if (b >= 0.44 && b <= 0.48) {
        const _a = 6;
        setA(_a);
      }
      else if (b >= 0.48 && b <= 0.6) {
        const _a = 7;
        setA(_a);
      }
      else if (b > 0.6) {
        const _a = 7;
        setA(_a);
      }
    }), []);
    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const zoom = window.devicePixelRatio;
    
        // Ekran zoom ve yüksekliğini kontrol et
        if (zoom >= 1.25 && height <= 1080 &&width >=765) {
          setTopValue('-10%'); // %125 zoom için top değeri
        } 
        // Mobil cihazlar için (765px altı)
        else if (width < 765) {
          setTopValue('10%'); // Mobilde top değeri
        } 
        // Diğer tüm ekran boyutları için varsayılan değer
        else if (width<1800 && height>800)
        setTopValue('-6%');
        else {
          setTopValue('1%'); 
        }
      };
    
      handleResize(); // İlk render'da çağır
    
      // Pencere yeniden boyutlandırıldığında işleyici ekleyin
      window.addEventListener('resize', handleResize);
    
      return () => {
        window.removeEventListener('resize', handleResize); // Temizleme
      };
    }, []);
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Tarayıcı genişliğine göre mobil veya masaüstü kontrolü yap
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // İlk yüklendiğinde kontrol et
    handleResize();

    // Genişlik değiştikçe yeniden kontrol et
    window.addEventListener('resize', handleResize);

    // Temizlik işlemi (event listener'ı kaldır)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    
  return (<>
   
        <div className="flex justify-center 2xl:mb-42  sm:mt-[100px] 2xl:mt-0 " >

          <Image className='object-contain' src='/wizard.png' width='174' height='116' />
          </div>
          <div>
          <div className='h-full w-full'>
            <div className='flex flex-row  lg:flex-row px-8 lg:px-0 gap-[60px] w-full  h-[100vh] lg:h-[200vh] relative'>
              <div className='flex flex-col items-center w-full relative bg-contain'    style={{
        height: '4000px',
        backgroundImage: isMobile
          ? 'url(/bg1.png), url(/bg3.png)' // Mobil için iki arka plan
          : 'url(/bgD.png)', // Masaüstü için tek arka plan
        backgroundRepeat: isMobile ? 'repeat, repeat' : 'no-repeat',
        backgroundPosition: isMobile ? 'center top, center bottom' : 'center',
        backgroundSize: isMobile ? '100% auto' : 'cover', // Mobilde genişliği %100 yap
      }}
    >
          
          <div className='flex flex-col gap-y-4 w-full max-w-[650px] items-center sticky' style={{ top: `calc(10% + ${topValue})` }} ref={ref}>

                  <div className='w-[300px] h-[300px] lg:w-[600px] xl:h-[750px] 2xl:h-[700px] mt-20 relative group'>
                    {a >= 0 && <Image src='/person/1.png' width='600' height='600' className='absolute top-0 object-contain ' style={{ zIndex: 30 }} />}

                    <Image src='/borderson4.png' width={686} height={678} className='pointer-events-none absolute  z-[90] w-[300px] h-[300px] lg:w-[570px] lg:h-[570px] scale-[1.3] lg:ml-4 lg:mt-4 ' />
                    {a >= 1 && <Image src='/person/2.png' width='600' height='600' className='absolute top-0 object-contain ' style={{ zIndex: 41 }} />}
                    {(a >= 1) && <motion.div className='flex justify-end pointer-events-none items-center h-[600px] fixed mt-32 w-full right-4 bottom-[-200px] z-[99] ' initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.25, ease: 'easeInOut' }}>
                    </motion.div>}
                    {a >= 2 && <Image src='/person/3.png' width='600' height='600' className='absolute top-0 object-contain ' style={{ zIndex: 42 }} />}
                    {a >= 2 && <Image src='/person/3.1.png' width='600' height='600' className='absolute top-0 object-contain ' style={{ zIndex: 40 }} />}
                    {(a == 2) && <motion.div className='flex justify-start pointer-events-none items-center h-[600px] fixed mt-32 w-full left-4 bottom-[-200px] z-[99]' initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.25, ease: 'easeInOut' }}>
                    </motion.div>}
                    {a >= 3 && <Image src='/person/4.png' width='600' height='600' className='absolute top-0 object-contain ' style={{ zIndex: 41 }} />}
                    {(a == 3) && <motion.div className='flex justify-end pointer-events-none items-center h-[600px] fixed mt-32 w-full right-4 bottom-[-200px] z-[99]' initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.25, ease: 'easeInOut' }}>
                    </motion.div>}
                    {a >= 4 && <Image src='/person/5.png' width='600' height='600' className='absolute top-0 object-contain ' style={{ zIndex: 40 }} />}
                    {a >= 4 && <Image src='/person/5.1.png' width='600' height='600' className='absolute top-0 object-contain ' style={{ zIndex: 42 }} />}
                    {(a == 4) && <motion.div className='flex justify-start pointer-events-none items-center h-[600px] fixed mt-32 w-full left-4 bottom-[-200px] z-[99]' initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.25, ease: 'easeInOut' }}>
                    </motion.div>}
                    {a >= 5 && <Image src='/person/6.png' width='600' height='600' className='absolute top-0 object-contain ' style={{ zIndex: 41 }} />}
                    {(a == 5) && <motion.div className='flex justify-end pointer-events-none items-center h-[600px] fixed mt-32 w-full right-4 bottom-[-200px] z-[99]' initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.25, ease: 'easeInOut' }}>
                    </motion.div>}
                    {a >= 6 && <Image src='/person/7.png' width='600' height='600' className='absolute top-0 object-contain ' style={{ zIndex: 41 }} />}
                    {(a == 6) && <motion.div className='flex justify-start pointer-events-none items-center h-[600px] fixed mt-32 w-full left-4 bottom-[-200px] z-[99]' initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.25, ease: 'easeInOut' }}>
                    </motion.div>}
                    {a >= 7 && <Image src='/person/8.png' width='600' height='600' className='absolute top-0 object-contain ' style={{ zIndex: 62 }} />}
                    {a >= 7 && <Image src='/person/8.1.png' width='600' height='600' className='absolute top-0 object-contain ' style={{ zIndex: 29 }} />}
                    {(a == 7) && <motion.div className='flex justify-end pointer-events-none items-center h-[600px] fixed mt-32 w-full right-4 bottom-[-200px] z-[99]' initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      
                      
                    </motion.div>}
                  </div>
                </div>
                {/*<AnimatePresence>
                  {text[activeTab] && (
                    <motion.div className='flex justify-end pointer-events-none items-center h-[600px] fixed mt-32 w-full right-4 bottom-[-200px] z-[99]' initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.25, ease: 'easeInOut' }}>
                      <div className='w-max bg-black/20 pointer-events-auto backdrop-blur-sm max-w-[400px] whitespace-pre-wrap font-medium h-max p-5 rounded-xl border-2 border-[#232349]'>
                        {text[activeTab]}
                      </div>
                    </motion.div>
                  )}
                  </AnimatePresence>*/}
              </div>
            </div>
          </div>
          </div>
      </>
  );
}
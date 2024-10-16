import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      main: '/slider/Asset2.png',
      side: '/slider/Asset2-2.png',
      chain: '/slider/chain.png',
      background: '/slider/Asset2-2.png',
      hrefGreen: 'https://www.greenexample.com', // URL for the green section
      hrefOrange: 'https://www.orangeexample.com', // URL for the orange section
    },
    {
      main: '/slider/Asset1.png',
      side: '/slider/Asset1-2.png',
      chain: '/slider/chain.png',
      background: '/slider/Asset1-2.png',
      hrefGreen: 'https://www.greenexample2.com', // URL for the green section on second slide
      hrefOrange: 'https://www.orangeexample2.com', // URL for the orange section on second slide
    },
  ];


  const handleDotClick = (index) => {
    console.log(index)
    setCurrentSlide(index);
  };

  return (
    <> 
    <h1 style={{ transform: "scale(1, 1.2)" }} className='text-shadow text-[#38F7A1] green-glow text-center font-Boucherie tracking-[5px] text-[4rem] mt-4'>
          GAMES
        </h1>              
    <div className="slider-container relative w-full h-[700px] flex flex-col items-center justify-center">

      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: 1,
            scale: currentSlide === 1 ? 1.5 : 1.9, // Conditionally set scale to 1.7 if the slide is 1 bg
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4,ease: "easeInOut" }}
          className="absolute inset-0 bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${images[currentSlide].background})`,
            backgroundPosition: currentSlide === 0 ? 'left' : 'right',
            backgroundSize: 'contain',
            transformOrigin: currentSlide === 0 ? 'left' : 'right',
          }}
        />
      </AnimatePresence>

      {/* Slides */}
      <div className="slides relative w-full h-full flex items-center justify-center overflow-hidden mb-8  cursor-pointer " >
        {images.map((image, index) => (
          
          <motion.div
            key={index}
            onClick={() => handleDotClick(index)}
            className="slide absolute w-1/2 h-full flex items-center justify-center"
            initial={{
              x: index === currentSlide ? '0%' : index === 0 ? '-100%' : '100%',
              scale: index === currentSlide ? 1.3 : 0.8,
              zIndex: index === currentSlide ? 2 : 1,
              opacity: index === currentSlide ? 0.6 : 1,
            }}
            animate={{
              x: index === currentSlide ? '0%' : index === 0 ? '-100%' : '100%',
              scale: index === currentSlide ? 1.30 : 0.8,
              zIndex: index === currentSlide ? 2 : 1,
              opacity: index === currentSlide ? 1 : 0.6,
            }}
            transition={{ duration: 0.8 }}
          >
            
            {/* Main Image */}

            <div className="h-full flex items-center justify-center relative z-10">
              <Image
                src={image.main}
                width={1200}
                height={800}
                objectFit="contain"
                alt={`Main Slide ${index}`}
                className="object-contain"
              />

              {/* Clickable areas for green and orange sections */}
              <a
               // href={image.hrefGreen}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-[80px] bottom-[220px] w-[130px] h-[50px] bg-transparent z-99 cursor-not-allowed"
              >
                {/* Invisible clickable area for the green section */}
              </a>

              <a
                //href={image.hrefOrange}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-[225px] bottom-[215px] w-[130px] h-[50px] bg-transparent z-99 cursor-not-allowed"
              >
                {/* Invisible clickable area for the orange section */}
              </a>

            </div>
          </motion.div>
        ))}
      </div>

      {/* Dots */}
      <div className="dots absolute bottom-0 flex justify-center gap-5">
  {images.map((_, index) => (
    <button
      key={index}
      onClick={() => handleDotClick(index)}
      className={`w-4 ml-2 h-4 ${
        index === currentSlide
          ? currentSlide === 0
            ? 'bg-orange-500 scale-150'
            : 'bg-blue-500 scale-150'
          : 'bg-gray-300 scale-80'
      } transform rotate-45 transition-transform duration-300`}
    />
  ))}
</div>
    </div>
    </>
  );
}

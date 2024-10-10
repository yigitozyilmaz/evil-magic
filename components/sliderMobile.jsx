import Image from 'next/image';
import { useState } from 'react';

export default function SliderMobile() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      main: '/mobileSlide/1.png',
      hrefGreen: 'https://www.greenexample.com',
      hrefOrange: 'https://www.orangeexample.com',
    },
    {
      main: '/mobileSlide/2.png',
      hrefGreen: 'https://www.greenexample2.com',
      hrefOrange: 'https://www.orangeexample2.com',
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <h1
        style={{ transform: 'scale(1, 1.2)' }}
        className="text-shadow text-center font-Boucherie tracking-[5px] 2xl:text-[4rem] sm:text-[2rem] 2xl:mt-4 mt-96"
      >
        GAMES
      </h1>
      <div className="slider-container relative w-full flex flex-col items-center justify-center">
        
        {/* Current Image */}
        <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
  <Image
    src={images[currentSlide].main}
    width={490}  // Original width
    height={436} // Original height
    alt={`Slide ${currentSlide}`}
    className="object-contain" // Maintain the original aspect ratio
  />
</div>

        {/* Dots */}
        <div className="dots absolute bottom-0 flex justify-center gap-5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 ml-2 h-4 ${
                index === currentSlide
                  ? 'bg-blue-500 scale-150'
                  : 'bg-gray-300 scale-80'
              } transform rotate-45 transition-transform duration-300`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

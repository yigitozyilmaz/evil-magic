import Image from 'next/image';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

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

  const handleSwipe = (direction) => {
    if (direction === 'LEFT') {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else if (direction === 'RIGHT') {
      setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('LEFT'),
    onSwipedRight: () => handleSwipe('RIGHT'),
  });
  const handleDotClick = (index) => {
    console.log(index)
    setCurrentSlide(index);
  };

  return (
    <>
      <h1
        style={{ transform: 'scale(1, 1.2)' }}
        className="text-shadow text-center font-Boucherie tracking-[5px] 2xl:text-[4rem] sm:text-[2rem] mt-44"
      >
        GAMES
      </h1>
      <div
        {...swipeHandlers}
        className="slider-container relative w-full flex flex-col items-center justify-center"
      >
        {/* Current Image */}
        <div className="relative w-screen flex items-center justify-center overflow-hidden">
          <Image
            src={images[currentSlide].main}
            width={490} // Original width
            height={436} // Original height
            alt={`Slide ${currentSlide}`}
            className="object-contain" // Maintain the original aspect ratio
          />

          {/* Clickable areas for green and orange sections */}
          <a
            // href={images[currentSlide].hrefGreen}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-[115px] bottom-[30px] w-[90px] h-[35px] bg-transparent z-99 cursor-not-allowed"
          >
            {/* Invisible clickable area for the green section */}
          </a>

          <a
            // href={images[currentSlide].hrefOrange}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-[210px] bottom-[30px] w-[90px] h-[35px] bg-transparent z-99 cursor-not-allowed"
          >
            {/* Invisible clickable area for the orange section */}
          </a>
        </div>

        {/* Dots */}
        <div className="dots absolute mt-[450px] flex justify-center gap-3">
          {images.map((_, index) => (
        <button
        key={index}
        onClick={() => handleDotClick(index)}
        className={`w-4 ml-2 h-4 ${
          index === currentSlide
            ? currentSlide === 0
              ? 'bg-orange-500 scale-110'
              : 'bg-blue-500 scale-110'
            : 'bg-gray-300 scale-70'
        } transform rotate-45 transition-transform duration-300`}
      />
    ))}
        </div>
      </div>
    </>
  );
}

import React, { useState } from 'react';

const MyComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };



  return (



          <a href="discordlink" target="_blank" rel="noopener noreferrer"          onMouseEnter={handleHover} 
        onMouseLeave={handleHover} 
>
            <img 
              src={isHovered ? '/ctu2.png' : '/ctu.png'} 
              alt="CTU Logo" 
              width="700" 
              height="500" 
              className="object-contain z-[12] relative opacity-[1] mr-10 sm:w-[500px] mb-[-500px] sm:top-[-410px] top-[-420px]"

            />
          </a>


  );
};

export default MyComponent;

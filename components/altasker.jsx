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
              className="object-contain z-[12] relative opacity-[1] mr-10  mb-[-500px] md:top-[-420px] 2xl:top-[-420px]"

            />
          </a>


  );
};

export default MyComponent;

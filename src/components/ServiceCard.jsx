import React, { useState } from 'react';

const ServiceCard = ({ name1, name2, image, details, background, arrow }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className={`relative ${background}`} 
      style={{ 
        height: isOpen ? '450px' : '300px', 
        transition: 'height 0.5s ease', 
        backgroundColor: 'lightgrey', // Container background color set to black
        color: 'black' // Set default text color to white
      }}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold">{name1}</h2> {/* Text color white by default */}
            <h2 className="text-3xl font-semibold">{name2}</h2> {/* Text color white by default */}
          </div>
          <div>
            <img src={image} alt="service" className="h-40 w-40 object-contain" />
          </div>
        </div>
        <div className="absolute bottom-6 right-6">
          <img
            src={arrow}
            alt="arrow"
            className={`cursor-pointer transform transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`}
            onClick={handleToggle}
          />
        </div>
        {isOpen && (
          <div 
            className="mt-4 p-4 rounded-b-3xl shadow-md transition-all duration-500"
            style={{
              backgroundColor: 'black', // Details box background color set to grey
              color: 'lightblue' // Details text color set to blue
            }}
          >
            <p>{details}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;

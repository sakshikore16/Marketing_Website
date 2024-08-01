import React, { useState } from 'react';

const CollapseSection = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="outline-none accordion-section" tabIndex="1" onClick={handleToggle}>
        <div className={`shadow-card bg-zinc-100 rounded-3xl flex justify-between px-4 py-3 items-center transition-colors ease duration-500 cursor-pointer pr-10 relative ${isOpen ? 'group-focus:bg-lime group-focus:shadow-none group-focus:rounded-b-none group-focus:rounded-t-3xl' : ''}`}>
          <div className="flex items-center px-10 pt-10 w-full transition ease duration-500">
            <div className="flex pb-10 gap-5 w-full items-center">
              <div className="flex justify-between w-full items-center rounded-full">
                <div className="flex items-center gap-5">
                  <p className="lg:text-3xl text-lg">{label}</p>
                </div>
                <div className={`rounded-full after:h-[2px] relative accodion-chevron border-black md:border-2 flex md:items-center md:bg-zinc-100 h-12 w-12 ${isOpen ? 'rotate-90' : ''}`}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={`shadow-card rounded-b-3xl bg-zinc-100 px-4 overflow-hidden transition-max-height ease duration-500 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <p className="text-justify text-blue-500 p-12">  {/* Changed text color to blue */}
            {children}
          </p>
        </div>
      </div>

      <style jsx>{`
        .accodion-chevron::after {
          content: "";
          height: 70%;
          width: 8px;
          transform: translate(-50%);
          transition: transform 0.5s ease;
          background-color: black;
          position: absolute;
          left: 50%;
        }
        .accodion-chevron::before {
          content: "";
          height: 70%;
          width: 8px;
          transform: translate(-50%) rotate(90deg);
          background-color: black;
          position: absolute;
          left: 50%;
        }
        .rotate-90::after {
          transform: translate(-50%) rotate(90deg);
        }
      `}</style>
    </>
  );
};

export default CollapseSection;

import React from 'react';

const CollapseSection = ({ label, index = null, children }) => {
  return (
    <>
      <div className="group outline-none accordion-section" tabIndex="1">
        <div className="group group-focus:bg-lime group-focus:shadow-none shadow-card bg-zinc-100 group-focus:rounded-b-none group-focus:rounded-t-3xl rounded-3xl flex justify-between px-4 py-3 items-center transition-colors ease duration-500 cursor-pointer pr-10 relative">
          <div className="flex items-center group-focus:text-black px-10 pt-10 w-full transition ease duration-500">
            <div className="flex pb-10 gap-5 w-full items-center">
              <div className="flex justify-between w-full items-center rounded-full">
                <div className="flex items-center gap-5">
                  {index && (
                    <>
                      <p className="text-6xl font-medium flex items-center">
                        {index}
                      </p>
                      <p className="lg:text-3xl text-lg">{label}</p>
                    </>
                  )}
                </div>
                <div className="rounded-full after:h-[2px] relative accodion-chevron border-black md:border-2 flex md:items-center md:bg-zinc-100 h-12 w-12"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-focus:max-h-screen max-h-0 shadow-card rounded-b-3xl bg-zinc-100 group-focus:bg-lime px-4 overflow-hidden transition ease duration-500">
          <p className="text-justify text-black p-10">
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
        .group:focus-within .accodion-chevron::after {
          transform: translate(-50%) rotate(90deg);
        }
      `}</style>
    </>
  );
};

export default CollapseSection;

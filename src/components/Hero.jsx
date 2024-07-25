import React from 'react';
import Container from './Container';

const HeroSection = () => {
  return (
    <Container>
      <div className="relative flex flex-col-reverse items-center md:flex-row" id="hero">
        <div className="row items-center py-5 md:w-6/12 md:pb-20 md:pt-10">
          <div className="text-left space-y-3">
            <h1 className="text-5xl font-medium leading-none md:text-6xl">
              Navigating the <br /> digital landscape <br /> for success
            </h1>
            <p className="mt-6 mb-8 text-xl font-normal leading-7 sm:mb-12">
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <a
              className="px-9 py-5 bg-zinc-900 hover:bg-white text-white hover:text-black border rounded-2xl justify-items-center md:justify-items-start gap-2.5 inline-flex"
              rel="noopener noreferrer"
              href=" https://wa.me/918291318921"
              target="_blank"
            >
              <h2 className="text-center text-xl font-normal leading-7">
                Book a consultation
              </h2>
            </a>
          </div>
        </div>
        <div className="flex items-center py-5 md:w-6/12 md:pb-20 md:pt-10">
          <img src="/Hero.svg" width="100%" alt="Hero" />
        </div>
      </div>

      <div className="flex-row items-center">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6">
          <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="./clients/01.svg"
              className="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
            />
          </div>
          <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="./clients/02.svg"
              className="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
            />
          </div>
          <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
            <img
              src="./clients/03.svg"
              className="h-9 w-auto m-auto"
              loading="lazy"
              alt="client logo"
            />
          </div>
          <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="./clients/04.svg"
              className="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
            />
          </div>
          <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
            <img
              src="./clients/05.svg"
              className="h-8 w-auto m-auto"
              loading="lazy"
              alt="client logo"
            />
          </div>
          <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="./clients/06.svg"
              className="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;

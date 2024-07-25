import React from 'react';
import Container from './Container';
import Topic from './Topic';
import servicesData from './Data/services.json';

const Services = () => {
  return (
    <Container>
      <div className="relative flex flex-col items-center md:flex-row" id="services">
        <Topic
          title="Our Services"
          description="Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation"
        />
      </div>

      <div className="flex-row items-center py-5">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {/* card start*/}
          {servicesData.map(({ background, name1, name2, arrow, link, image }, index) => (
            <div className={background} key={index}>
              <div className="flex-col justify-center items-start gap-[93px] inline-flex">
                <div className="flex-col justify-start items-start flex">
                  <div className="px-[7px] bg-blue-300 rounded-[7px] flex-col justify-start items-start gap-2.5 flex">
                    <div className="text-3xl font-medium">{name1}</div>
                  </div>
                  <div className="px-[7px] bg-blue-300 rounded-[7px] flex-col justify-start items-start gap-2.5 flex">
                    <div className="text-3xl font-medium">{name2}</div>
                  </div>
                </div>
                <a className="justify-start items-center gap-[15px] inline-flex" href={link}>
                  <div className="w-[41px] h-[41px] relative">
                    <img className="w-[41px] h-[41px] left-0 top-0 absolute" src={arrow} alt="arrow"/>
                  </div>
                  <div className="text-xl font-normal leading-7">Learn more</div>
                </a>
              </div>
              <div className="w-[210px] h-[170px] pt-0.5 pb-[1.95px] justify-center items-center flex">
                <img className="hidden md:block" src={image} alt="service" />
              </div>
            </div>
          ))}
          {/* card end */}
        </div>
      </div>

      <div className="flex-row items-center my-6 p-14 bg-zinc-100 rounded-[45px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="justify-start items-center gap-[275px] flex">
            <div className="flex-col justify-start items-start gap-[26px] inline-flex text-black">
              <div className="text-3xl font-medium">Let’s make things happen</div>
              <div className="text-lg font-normal">
                Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
              </div>
              <a href="/" className="px-[35px] py-5 bg-zinc-900 hover:bg-white text-white hover:text-black border rounded-[14px] justify-start items-start gap-2.5 inline-flex">
                <div className="text-center text-xl font-normal leading-7">Get your free proposal</div>
              </a>
            </div>
          </div>
          <div className="hidden md:grid justify-items-center -m-20">
            <img src="/services/Illustration.svg" width="50%" alt="cat" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;

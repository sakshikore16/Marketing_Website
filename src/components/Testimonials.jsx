import React from 'react';
import Container from './Container';
import Topic from './Topic';

const Testimonials = () => {
  return (
    <Container>
      <div className="relative flex flex-col items-center md:flex-row">
        <Topic title="Testimonials" description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between my-6 space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex-1 p-10 bg-black text-white rounded-[45px]">
          <div className="justify-items-center relative w-full border border-lime rounded-3xl">
            <div className="p-4 md:p-10">
              <p className="text-white text-sm md:text-lg font-normal mb-4">
                "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business."
              </p>
              <span className="text-lime text-base md:text-xl font-medium">
                John Smith<br />
              </span>
              <span className="text-white text-lg font-normal">
                Marketing Director at XYZ Corp
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 p-10 bg-black text-white rounded-[45px]">
          <div className="justify-items-center relative w-full border border-lime rounded-3xl">
            <div className="p-4 md:p-10">
              <p className="text-white text-sm md:text-lg font-normal mb-4">
                "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business."
              </p>
              <span className="text-lime text-base md:text-xl font-medium">
                John Smith<br />
              </span>
              <span className="text-white text-lg font-normal">
                Marketing Director at XYZ Corp
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;

import React from 'react';
import Container from './Container';
import Topic from './Topic';

const Contact = () => {
  return (
    <Container>
      <div className="relative flex flex-col items-center md:flex-row">
        <Topic
          title="Contact"
          description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        />
      </div>

      <div className="relative flex flex-col items-center md:flex-row my-6 bg-zinc-100 rounded-[45px]">
        <div className="row items-center py-12 px-4 md:px-20 md:w-8/12 md:py-10">
          <form action="#" className="space-y-8 md:w-full">
            <div className="flex">
              <div className="flex items-center me-4">
                <input
                  id="inline-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  className="w-4 h-4 text-lime bg-black border-black focus:ring-lime"
                />
                <label
                  htmlFor="inline-radio"
                  className="ms-2 text-base font-medium text-black"
                >
                  Say Hi
                </label>
              </div>
              <div className="flex items-center me-4 mx-8 md:mx-20">
                <input
                  id="inline-2-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  className="w-4 h-4 text-lime bg-black border-black focus:ring-lime"
                />
                <label
                  htmlFor="inline-2-radio"
                  className="ms-2 text-base font-medium text-black"
                >
                  Get a Quote
                </label>
              </div>
            </div>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-base font-medium text-black"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-white border text-black text-base rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-base font-medium text-black"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block p-3 w-full text-base text-black bg-white rounded-lg border shadow-sm focus:ring-black focus:border-black"
                placeholder="Email"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-base font-medium text-black"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-base text-black bg-white rounded-lg shadow-sm border focus:ring-black focus:border-black"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-5 bg-zinc-900 rounded-[14px] justify-center gap-2.5 inline-flex"
            >
              <div className="text-center text-white text-xl font-normal leading-7">
                Send Message
              </div>
            </button>
          </form>
        </div>
        <div className="hidden md:grid md:justify-items-end md:w-4/12 md:py-2">
          <img src="./clients/contact.svg" alt="Contact" width="80%" />
        </div>
      </div>
    </Container>
  );
};

export default Contact;

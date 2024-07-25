import React from 'react';
import Container from './Container';
import Topic from './Topic';
import Counter from './Counter'; // Import the Counter component

const Cases = () => {
  return (
    <Container>
      <div className="relative flex flex-col items-center md:flex-row" id="projects">
        <Topic
          title="Case Studies"
          description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />
      </div>

      <div className="w-full p-12 bg-zinc-900 rounded-[45px] justify-start items-start gap-16 inline-flex text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 divide-x-0 md:divide-x divide-y md:divide-y-0">
          <div className="flex-col items-start gap-5 inline-flex px-2 md:px-6 py-6 md:py-2">
            <div className="w-full text-lg font-normal">
              For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
            </div>
            <div className="justify-start items-center gap-[15px] inline-flex">
              <div className="text-lime text-xl font-normal leading-7">Learn more</div>
              <img src="/services/agc.svg" alt="arrow" />
            </div>
          </div>
          <div className="flex-col items-start gap-5 inline-flex px-2 md:px-6 py-6 md:py-2">
            <div className="w-full text-lg font-normal">
              For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
            </div>
            <div className="justify-start items-center gap-[15px] inline-flex">
              <div className="text-lime text-xl font-normal leading-7">Learn more</div>
              <img src="/services/agc.svg" alt="arrow" />
            </div>
          </div>
          <div className="flex-col items-start gap-5 inline-flex px-2 md:px-6 py-6 md:py-2">
            <div className="w-full text-lg font-normal">
              For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
            </div>
            <div className="justify-start items-center gap-[15px] inline-flex">
              <div className="text-lime text-xl font-normal leading-7">Learn more</div>
              <img src="/services/agc.svg" alt="arrow" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center md:flex-row pt-6">
        <Topic title="Results" description="The Results that We have delivered to our Clients" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
        <div className="h-[120px] px-[20px] py-10 bg-white rounded-[20px] shadow-card border border-zinc-900 flex flex-col justify-center items-center text-black">
          <Counter end={62713} duration={5000} />
          <p className="text-center">Qualified Leads Generated</p>
        </div>
        <div className="h-[120px] px-[20px] py-10 bg-white rounded-[20px] shadow-card border border-zinc-900 flex flex-col justify-center items-center text-black">
          <Counter end={96256} duration={5000} />
          <p className="text-center">Total Amount Of Reach Generated for Brands</p>
        </div>
        <div className="h-[120px] px-[20px] py-10 bg-white rounded-[20px] shadow-card border border-zinc-900 flex flex-col justify-center items-center text-black">
          <Counter end={4526510} duration={5000} />
          <p className="text-center">E-commerce Transactions</p>
        </div>
        <div className="h-[120px] px-[20px] py-10 bg-white rounded-[20px] shadow-card border border-zinc-900 flex flex-col justify-center items-center text-black">
          <Counter end={115622} duration={5000} />
          <p className="text-center">Average Brand Engagement</p>
        </div>
      </div>
    </Container>
  );
};

export default Cases;

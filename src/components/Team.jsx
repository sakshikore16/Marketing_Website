import React from 'react';
import Container from './Container';
import Topic from './Topic';
import teamData from './Data/team.json';
import Collapse from './Collapse';

const ProcessAndTeam = () => {
  return (
    <Container>
      <div className="relative flex flex-col items-center md:flex-row">
        <Topic title="Process" description="Step-by-Step Guide to Achieving Your Business Goals" />
      </div>

      <div className="my-6">
        <div className="space-y-10">
          {teamData.process.map((process, key) => (
            <Collapse label={process.label} index={key + 1} key={key}>
              {process.content}
            </Collapse>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col items-center md:flex-row pt-6">
        <Topic title="Team" description="Meet the skilled and experienced team behind our successful digital marketing strategies" />
      </div>

      <div className="flex-row items-center py-5" id="team">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
          {teamData.team.map(({ title, description, name, link, profile }, index) => (
            <div
              key={index}
              className="h-[331px] px-[35px] py-10 bg-white rounded-[45px] shadow-card border border-zinc-900 flex-col justify-start items-start gap-2.5 inline-flex text-black"
            >
              <div className="flex-col justify-start items-start gap-7 flex">
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 justify-start items-center gap-8 flex">
                    <div className="h-[82px] w-[82px] left-0 top-0 relative">
                      <img src={profile} alt={name} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="flex-col justify-end items-start inline-flex">
                      <div className="text-lg font-normal">{title}</div>
                      <div className="text-xl font-medium">{name}</div>
                    </div>
                  </div>
                  <a className="top-0 right-0" href={link}>
                    <img src="/team/lng.svg" alt="vector" />
                  </a>
                </div>
                <hr className="w-full border border-black" />
                <p className="text-sm md:text-lg">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full justify-center md:justify-end items-center inline-flex">
        <button className="px-8 py-5 bg-zinc-900 hover:bg-white rounded-2xl text-center text-white hover:text-black border text-xl font-normal leading-7">
          See all team
        </button>
      </div>
    </Container>
  );
};

export default ProcessAndTeam;

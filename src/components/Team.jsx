import React from 'react';
import Container from './Container';
import Topic from './Topic';
import Collapse from './Collapse';
import teamData from './Data/team.json'

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
    </Container>
  );
};

export default ProcessAndTeam;
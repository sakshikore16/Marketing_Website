import React from 'react';
import ServiceCard from './ServiceCard';
import servicesData from './Data/services.json';
import Topic from './Topic';

const Services = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="relative flex flex-col items-center md:flex-row" id="projects">
        <Topic
          title="Services"
          description="Services involve providing specialized expertise to meet clients' expectations"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map(service => (
          <ServiceCard
            key={service.id}
            name1={service.name1}
            name2={service.name2}
            image={service.image}
            details={service.details}
            background={service.background}
            arrow={service.arrow}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

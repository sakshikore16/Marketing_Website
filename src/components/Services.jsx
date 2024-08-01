import React from 'react';
import Topic from './Topic';
import ServiceCard from './ServiceCard';
import servicesData from './Data/services.json';

const Services = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative flex flex-col items-center md:flex-row" id="services">
        <Topic
          title="Our Services"
          description="Services involve providing specialized expertise to meet clients' needs, and engaging with audiences through various digital channels."
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-screen-lg mx-auto">
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

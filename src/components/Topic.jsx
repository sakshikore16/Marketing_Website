import React from 'react';

const Topic = ({ title, description }) => {
  return (
    <div className="grid place-items-center gap-5 mb-10 md:flex">
      <span className="text-4xl sm:text-6xl px-1.5 font-medium bg-lime rounded-md">
        {title}
      </span>
      <p className="text-xl font-normal text-center md:text-start lg:w-2/3">
        {description}
      </p>
    </div>
  );
};

export default Topic;

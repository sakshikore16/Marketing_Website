import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14">
      {children}
    </div>
  );
};

export default Container;

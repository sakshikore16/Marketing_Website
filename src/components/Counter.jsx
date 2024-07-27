import React, { useEffect, useState } from 'react';

const Counter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const range = end - start;
    const incrementTime = 10; // Set the interval time in milliseconds
    const totalIncrements = Math.floor(duration / incrementTime);
    const increment = Math.ceil(range / totalIncrements); // Calculate increment value based on total increments

    const timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount + increment >= end) {
          clearInterval(timer);
          return end;
        }
        return prevCount + increment;
      });
    }, incrementTime);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  return (
    <div className="text-4xl font-bold text-center">
      {count.toLocaleString()}
    </div>
  );
};

export default Counter;

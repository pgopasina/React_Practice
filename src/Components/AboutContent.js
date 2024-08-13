import React, { useMemo, useState } from "react";

const AboutContent = () => {
    const [order, setOrder] = useState('ascending');

    const numbers = [45, 23, 78, 10, 2, 98, 33, 61];
  
    const sortedNumbers = useMemo(() => {
      console.log('Sorting numbers...');
      return order === 'ascending'
        ? [...numbers].sort((a, b) => a - b)
        : [...numbers].sort((a, b) => b - a);
    }, [order]);

  return (
    <div>
    <h1>useMemo Example:</h1>
    <h2>Number Sorter</h2>
    <button onClick={() => setOrder('ascending')}>Sort Ascending</button>
    <button onClick={() => setOrder('descending')}>Sort Descending</button>

    <ul>
      {sortedNumbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  </div>
  );
};

export default AboutContent;

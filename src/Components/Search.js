import React, { useState, useCallback } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple'];

  // useCallback to memoize the filterItems function
  const filterItems = useCallback(() => {
    return items.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  }, [query, items]);

  const filteredItems = filterItems();

  return (
    <div>
      <h1>useCallback Example:</h1>
      <input
        type="text"
        placeholder="Search items..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

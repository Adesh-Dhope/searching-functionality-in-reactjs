import React, { useState, useEffect, useMemo } from "react";

const DebouncedSearch = () => {
  const data = useMemo(() => ["Let & Const","Arrow Function","Template Literals","Rest and Spread Operator",
    "Destructuring","Callback","Promises Async Await", "Symbol data type","Regex : Regular Expressions","Generators",
     "Iterators", "High Order Functions","Map, Filter, Reduce","Slice vs Splice"],[]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      const filtered = data.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }, 300); // Debounce time of 300ms

    return () => clearTimeout(delaySearch);
  }, [searchQuery, data]);

  return (
    <div style={{padding:'2em'}}>
        <h3>Search with Debouncing / Delayed execution</h3>
      <input
        type="text"
        placeholder="debounced search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DebouncedSearch;

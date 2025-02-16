import React, { useState } from "react";

const Search = () => {
  // Sample data
  const data = ["map","1604","1705","1905","filter","reduce","isaray","pop", "push", "shift","unshift", "concat", "join","some","every","includes","sort","reverse","Alice", "Bob", "Charlie", "David", "Edward"];

  // State for search input and filtered results
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  // Function to handle search
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = data.filter((item) =>
      item.toLowerCase().includes(query)
    );

    setFilteredData(filtered);
  };

  return (
    <div >
    <div style={{padding:'2em'}}>
        <h3>Simple Searching Functionality in Reactjs</h3>
      <input
        type="text"
        placeholder="simple search..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
    </div>
  );
};

export default Search;

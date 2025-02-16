import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchedSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data);
        console.log(response.data)
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(query)
    );

    setFilteredUsers(filtered);
  };

  return (
    <div style={{padding:'2em'}}>
        <h3>Search with Fetched API Data</h3>
      <input
        type="text"
        placeholder="fetched search ..."
        value={searchQuery}
        onChange={handleSearch}
        style={{padding:"3px"}}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchedSearch;

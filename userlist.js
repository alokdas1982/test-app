import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      });
  }, []);

  const filterUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>User List</h1>

      <input
        type="text"
        placeholder="Search User"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {filterUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>

      {filterUsers.length === 0 && !error && (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default App;
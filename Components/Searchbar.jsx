
"use client"
import React, { useState } from 'react';


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search  "
        className="px-4 py-2 w-56"
      />
      <div> 
      <button type="submit" className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2">
        Search
      </button>
      </div>    
    </form>


  );
}

export default SearchBar;
import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Search button clicked");
    console.log("Query:", query);
    if (!query.trim()) return;
    onSearch(query);
  };
  return (
    <div className='w-full max-w-xl mx-auto mt-10 flex gap-2'>
      <input
        id="book-search"
        name="bookSearch"
        type="text"
        placeholder="Search for books by title or author..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleSearch}
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
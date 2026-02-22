function SearchBar() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for books by title or author..."
        className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
        Search
      </button>
    </div>
  );
}
export default SearchBar;
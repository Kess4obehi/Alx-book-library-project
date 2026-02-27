import SearchBar from "./components/SearchBar";

function App() {
  const searchBooks = async (query) => {
    console.log("Searching for:", query);

    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      console.log("API response:", data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600">
        Book Library
      </h1>
      <SearchBar onSearch={searchBooks} />

      <div>
        Open the console to see search results
      </div>
    </div>
  );
}

export default App;
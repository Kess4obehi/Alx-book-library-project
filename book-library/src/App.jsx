import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const searchBooks = async (query) => {
    setLoading(true);
    setHasSearched(false);

    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${import.meta.env.VITE_GOOGLE_BOOKS_KEY}`
      );
            const data = await response.json();

      console.log("BOOKS API RESPONSE 👉", data); // 👈 ADD THIS

      setBooks(data.items || []);
      setHasSearched(true);
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);
      setHasSearched(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600">
        Book Library
      </h1>

      <SearchBar onSearch={searchBooks} />

      {!hasSearched && (
        <p className="text-center mt-6 text-gray-500">
          Search for a book to see results
        </p>
      )}

      {loading && (
        <p className="text-center mt-6 text-gray-600 text-lg">
          Loading books...
        </p>
      )}

      {hasSearched && !loading && books.length === 0 && (
        <p className="text-center mt-6 text-gray-500">
          No books found. Try another search.
        </p>
      )}

      <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => {
          const info = book.volumeInfo;

          return (
            <div
              key={book.id}
              onClick={() => setSelectedBook(book)}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer transition"
            >
              <img
                src={
                  info.imageLinks?.thumbnail ||
                  "https://via.placeholder.com/150x220?text=No+Cover"
                }
                alt={info.title}
                className="w-full h-56 object-cover mb-4 rounded"
              />

              <h2 className="font-semibold text-lg mb-1">
                {info.title}
              </h2>

              <p className="text-sm text-gray-600">
                {info.authors?.join(", ") || "Unknown Author"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
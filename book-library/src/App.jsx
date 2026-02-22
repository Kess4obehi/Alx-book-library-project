import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">
        Book Library App
      </h1>
      
      <SearchBar />

      <div className="mt-10 text-center text-gray-500">
        Search results will appear here
      </div>
    </div>
  );
}

export default App;

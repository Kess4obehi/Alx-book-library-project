import React from "react";

function BookModal({ book, onClose }) {
  if (!book) return null;

  const info = book.volumeInfo;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full relative max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold"
        >
          X
        </button>

        <h2 className="text-2xl font-bold mb-2">{info.title}</h2>
        <p className="text-sm text-gray-600 mb-2">
          {info.authors?.join(", ") || "Unknown Author"}
        </p>
        <p className="text-sm text-gray-500 mb-2">
          Publisher: {info.publisher || "Unknown"}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Published: {info.publishedDate || "Unknown"}
        </p>
        <p className="text-gray-700">{info.description || "No description available."}</p>
      </div>
    </div>
  );
}

export default BookModal;
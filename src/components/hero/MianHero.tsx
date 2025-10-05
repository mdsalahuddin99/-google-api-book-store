import React, { useState } from "react";
import BookCard from "../Card/BookCard";
import StatsCounterSection from "../Card";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    imageLinks?: {
      thumbnail?: string;
    };
    previewLink: string;
  };
}

const HeroSectionWithSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false); // 

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setHasSearched(true); // 

    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=12`
      );
      const data = await res.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#461356] text-white py-20 px-4 text-center">
        <h1 className="text-2xl md:text-5xl font-extrabold mb-6">
          Discover Your Next Favorite Book
        </h1>
        <StatsCounterSection/>
        <p className="text-md md:text-lg mb-8 text-gray-300">
          Search millions of books instantly 
        </p>

        <form
          onSubmit={handleSearch}
          className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-3 px-4"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. JavaScript, Bangla, History"
            className="flex-1 px-5 py-3 rounded-full text-white focus:outline-none shadow-md w-full border-1 border-amber-50"
          />
          <button
            type="submit"
            className="bg-white text-[#461356] font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition shadow-md w-full sm:w-auto"
          >
            Search
          </button>
        </form>
      </div>

      {/* Results Section */}
      <div className=" bg-gray-50">
        {loading ? (
          <div className="text-center text-gray-500 text-lg py-12">Loading...</div>
        ) : hasSearched && books.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center text-gray-600 py-12">
            <h2 className="text-xl font-semibold mb-2">No books found</h2>
            <p className="text-sm text-gray-500 max-w-xs">
              Try a different search like "history", "novel", or "bangla".
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
       
    </>
  );
};

export default HeroSectionWithSearch;

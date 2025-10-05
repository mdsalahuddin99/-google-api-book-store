import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

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

const IslamicBook: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=islamic+books")
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setBooks(data.items);
        }
      })
      .catch((err) => {
        console.error("বই আনতে সমস্যা হয়েছে:", err);
      });
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50">
      {/* Section Header */}
       <div className="text-center mb-10 bg-gradient-to-r from-purple-800 via-purple-500 to-purple-300 py-4 rounded-[10px]">
       <h2 className="text-3xl mb-2 md:text-4xl font-extrabold text-white/80  ">
          Best Islamic Books
        </h2>
        <p className="text-gray-800 max-w-xl mx-auto">
          A collection of inspiring Islamic books from the Google Books API.
        </p>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 text-lg">
            No books found.
          </p>
        ) : (
          books.map((book) => <BookCard key={book.id} book={book} />)
        )}
      </div>
    </section>
  );
};

export default IslamicBook;

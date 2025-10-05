import React from "react";

interface BookInfo {
  title: string;
  authors?: string[];
  imageLinks?: {
    thumbnail?: string;
  };
  previewLink: string;
}

interface Book {
  id: string;
  volumeInfo: BookInfo;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const info = book.volumeInfo;

  return (
    <div className="relative p-[2px] rounded-2xl overflow-hidden group">
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-spin-slow opacity-70"></div>

      {/* Card Inner Content */}
      <div className="relative bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center transition duration-300 group-hover:shadow-xl">
        <img
          src={info.imageLinks?.thumbnail || "/placeholder.jpg"}
          alt={info.title}
          className="mb-4 h-48 w-32 object-cover rounded-lg shadow-sm"
        />
        <h3 className="font-semibold text-[#461356] text-center text-base leading-snug line-clamp-2">
          {info.title}
        </h3>
        <p className="text-sm text-gray-600 mt-2 text-center">
          {info.authors?.join(", ") || "Unknown Author"}
        </p>
        <a
          href={info.previewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-white bg-[#461356] hover:bg-[#5b1a70] px-5 py-2.5 rounded-full transition-colors duration-200"
        >
          Read Now
        </a>
      </div>
    </div>
  );
};

export default BookCard;
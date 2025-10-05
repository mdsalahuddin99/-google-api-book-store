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
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition duration-300">
      <img
        src={info.imageLinks?.thumbnail || "/placeholder.jpg"}
        alt={info.title}
        className="mb-3 h-48 w-auto object-cover rounded-md"
      />
      <h3 className="font-semibold text-[#461356] text-center text-sm line-clamp-2">
        {info.title}
      </h3>
      <p className="text-xs text-gray-500 mt-1 text-center">
        {info.authors?.join(", ") || "Unknown Author"}
      </p>
      <a
        href={info.previewLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-sm font-medium text-white bg-[#461356] hover:bg-[#5b1a70] px-4 py-2 rounded-full transition"
      >
        Read Now
      </a>
    </div>
  );
};

export default BookCard;

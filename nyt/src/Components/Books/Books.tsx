import { useEffect, useState } from "react";
import { getLatestBooks } from "../../api";
import "./Books.css"; // Import the CSS file

interface BookType {
  title: string;
  description: string;
  author: string;
  book_image: string;
  rank: number;
  amazon_product_url: string;
}

const Books = () => {
  const [books, setBooks] = useState<BookType[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await getLatestBooks("7Ruw7RZTs6A6VaRjqrlLty2wlI7WJ1tR");
        setBooks(res);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <>
      {books.map((book) => (
        <div
          key={book.rank}
          className="book-container" // Use the CSS class here
          onClick={() => {
            window.location.href = book.amazon_product_url;
          }}
        >
          <img
            src={book.book_image}
            alt={book.title}
            className="book-image" // Use the CSS class here
          />
          <div className="book-details">
            {" "}
            {/* Container for book details */}
            <h2 className="book-title">{book.title}</h2>
            <h3 className="book-author">by {book.author}</h3>
            <p className="book-description">{book.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Books;

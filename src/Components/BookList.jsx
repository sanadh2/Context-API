import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);
  return (
    <ul className="book-list">
      {books.map((book) => {
        return <BookDetails book={book} key={book.id} />;
      })}
    </ul>
  );
};

export default BookList;

import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  const handleRemove = (id) => {
    removeBook(id);
  };
  return (
    <div className="bookCard" onClick={() => handleRemove(book.id)}>
      <h1 className="title">{book.title}</h1>
      <h3 className="author">{book.author}</h3>
    </div>
  );
};

export default BookDetails;

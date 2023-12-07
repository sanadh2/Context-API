import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: "Shoe Dog", author: "phil Knight", id: 1 },

    { title: "Atomic Habits", author: "James Clear", id: 2 },

    { title: "Can't hurt me", author: "David Goggins", id: 3 },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id != id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

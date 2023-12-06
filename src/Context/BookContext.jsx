import React, { createContext, useState } from "react";
export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: "Alchemist", id: 1 },
    { title: "Casino Royal", id: 2 },
    { title: "GoldFinger", id: 3 },
    { title: "Advetures of Sherlock Holmes", id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>{children}</BookContext.Provider>
  );
};
export default BookContextProvider;

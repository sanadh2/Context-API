import React, { createContext } from "react";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  return <BookContext.Provider>{children}</BookContext.Provider>;
};

export default BookContextProvider;

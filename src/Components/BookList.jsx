import React, { Component, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { BookContext } from "../Context/BookContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  console.log(books);

  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books &&
          books.map((book) => {
            return <li style={{color:"white"}}>{book.title}</li>;
          })}
      </ul>
    </div>
  );
};

export default BookList;

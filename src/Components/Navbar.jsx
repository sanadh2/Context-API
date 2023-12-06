import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";
import BookList from "./BookList";

const Navbar = () => {
  const { books } = useContext(BookContext);
  console.log(books);

  return (
    <nav className="navbar">
      <h1 align="center">My BookList</h1>
      <p>Currently you have {books.length} books</p>
     
    </nav>
  );
};

export default Navbar;

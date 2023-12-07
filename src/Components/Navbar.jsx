import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);

  return (
    <nav className="navbar">
      <h1 align="center">My BookList</h1>
      <p>Currently you have {books.length} books</p>
    </nav>
  );
};

export default Navbar;

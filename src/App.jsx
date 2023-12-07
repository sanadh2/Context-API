import "./App.css";
import React from "react";
import BookContextProvider from "./Context/BookContext";
import BookForm from "./Components/BookForm";
import Navbar from "./Components/Navbar";
import BookList from "./Components/BookList";
const App = () => {
  return (
    <BookContextProvider>
      <Navbar />
      <BookList />
      <BookForm />
    </BookContextProvider>
  );
};

export default App;

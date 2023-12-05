import "./App.css";
import React, { Component } from "react";
import Navigation from "./Components/Navigation";
import BookList from "./Components/BookList";
import ThemeContextProvider from "./Context/ThemeContext";

export class App extends Component {
  render() {
    return (
      <>
        <ThemeContextProvider>
          <Navigation />
          <BookList />
        </ThemeContextProvider>
      </>
    );
  }
}

export default App;

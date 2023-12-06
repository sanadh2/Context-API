import "./App.css";
import React, { Component } from "react";
import Navigation from "./Components/Navigation";
import BookList from "./Components/BookList";
import ThemeContextProvider from "./Context/ThemeContext";
import ThemeToggle from "./Components/ThemeToggle";
import AuthContextProvider from "./Context/AuthContext";
import BookContextProvider from "./Context/BookContext";
export class App extends Component {
  render() {
    return (
      <>
        <ThemeContextProvider>
          <AuthContextProvider>
            <Navigation />
            <BookContextProvider>
              <BookList />
            </BookContextProvider>

            <ThemeToggle />
          </AuthContextProvider>
        </ThemeContextProvider>
      </>
    );
  }
}

export default App;

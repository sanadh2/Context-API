import React, { Component, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export class Navigation extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;

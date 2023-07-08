import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const themeConstant = {
  light: "LIGHT",
  dark: "DARK",
};

const Header = ({ theme }) => {
  const selectIconTheme = (theme) => {
    switch (theme) {
      case themeConstant.light:
        return <FontAwesomeIcon icon={faMoon} />;
      case themeConstant.dark:
        return <FontAwesomeIcon icon={faSun} />;

      default: // Default theme is light
        return <FontAwesomeIcon icon={faMoon} />;
    }
  };

  return (
    <header className="header">
      <h1>TODO</h1>

      <div>{selectIconTheme(theme)}</div>
    </header>
  );
};

export default Header;

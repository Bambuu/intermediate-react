// theme-context.js
import React from "react";

export const theme = {
  textColor: "red"
};

export const ThemeContext = React.createContext();

// app.js
import { ThemeContext, theme } from "./theme-context";

const App = () => {
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <SideBar />
        <Main />
      </ThemeContext.Provider>
      <Footer />
    </div>
  );
};

// nav-link.js
import { ThemeContext } from "./theme-context";

const NavLink = () => {
  return (
    <ThemeContext.Consumer>
      {theme => {
        return (
          <Link
            style={{ color: theme.color }}
            to="/some-link"
          >
            This is a link
          </Link>
        );
      }}
    </ThemeContext.Consumer>
  );
};

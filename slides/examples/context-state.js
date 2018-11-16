// theme-context.js
export const redTheme = {
  textColor: "red"
};
export const orangeTheme = {
  textColor: "orange"
};

export const ThemeContext = React.createContext();

// app.js
import {
  redTheme,
  orangeTheme,
  ThemeContext
} from "./theme-context";

class App extends React.Component {
  state = {
    theme: redTheme, //GUSTAV: USE TOGGLETHEME BEFORE DEFINE?
    toggleTheme: this.toggleTheme
  };

  toggleTheme = () => {
    if (this.state.theme === redTheme) {
      this.setState({ theme: orangeTheme });
    } else {
      this.setState({ theme: redTheme });
    }
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <SideBar />
        <Main />
      </ThemeContext.Provider>
    );
  }
}

// nav-link.js
import { ThemeContext } from "./theme-context";

const NavLink = () => {
  return (
    <ThemeContext.Consumer>
      {context => {
        const theme = context.theme;
        return (
          <Link
            style={{ color: theme.textColor }}
            to="/some-link"
          >
            This is a link
          </Link>
        );
      }}
    </ThemeContext.Consumer>
  );
};

// theme-button.js
import { ThemeContext } from "./theme-context";

const ThemeButton = () => {
  return (
    <ThemeContext.Consumer>
      {context => {
        const toggleTheme = context.toggleTheme;
        return (
          <button onClick={toggleTheme}>
            Change Theme
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
};

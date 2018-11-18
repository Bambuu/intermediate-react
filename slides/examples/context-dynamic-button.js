// themed-button.js
import { ThemeContext } from "./theme-context";

const ThemedButton = () => {
  return (
    <ThemeContext.Consumer>
      {(themeContext) => {
        return (
          <button
            style={{ color: themeContext.theme.color }}
            onClick={themeContext.toggleTheme}
          >
            Change theme!
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
};
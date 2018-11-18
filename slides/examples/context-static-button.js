// themed-button.js
import { ThemeContext } from "./theme-context";

const ThemedButton = () => {
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        return (
          <button style={{ color: theme.color }}>
            Themed button
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
};
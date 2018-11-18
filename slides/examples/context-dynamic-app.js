// app.js
import {
  redTheme,
  greenTheme,
  ThemeContext
} from "./theme-context";

class App extends React.Component {
  toggleTheme = () => {
    if (this.state.theme === redTheme) {
      this.setState({ theme: greenTheme });
    } else {
      this.setState({ theme: redTheme });
    }
  };

  state = {
    theme: redTheme,
    toggleTheme: this.toggleTheme
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
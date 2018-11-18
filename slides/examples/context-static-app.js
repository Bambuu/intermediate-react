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
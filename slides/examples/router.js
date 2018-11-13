import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <MainView />
    </BrowserRouter>
  );
};

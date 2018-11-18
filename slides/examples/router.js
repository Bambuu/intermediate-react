import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <SideBar />
        <MainView />
      </div>
    </BrowserRouter>
  );
};
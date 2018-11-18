import { Route } from "react-router-dom";

const MainView = () => {
  return (
    <div>
      <Route path="/heroes" component={Heroes} />
      <Route path="/villains" component={Villains} />
      <Route path="/" exact component={Home} />
    </div>
  );
};
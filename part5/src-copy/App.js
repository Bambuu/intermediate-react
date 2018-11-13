import React, { Component } from 'react';
import { SideBar } from './SideBar';
import { Header } from './Header';
import { HeroList } from './HeroList';
import { ExtraAssignment } from "./ExtraAssignment";
import { Theming } from "./Theming";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="root">
        <SideBar changePage={this.changePage} />
        <div className="content">
          <Header />
          <Route path="/heroes" component={HeroList} />
          <Route path="/theming" component={Theming} />
          <Route path="/extra" component={ExtraAssignment} />
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

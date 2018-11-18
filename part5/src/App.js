import React, { Component } from 'react';
import { SideBar } from './SideBar';
import { Header } from './Header';
import { HeroList } from './HeroList';
import { ExtraAssignment } from "./ExtraAssignment";
import { Theming } from "./Theming";
import { BrowserRouter, Route } from "react-router-dom";
import { AssignmentDescription } from "./not-important/AssignmentDescription";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="root">
        <SideBar changePage={this.changePage} />
        <div className="content">
          <Header />
          <Route exact path="/" component={HeroList} />
          <Route path="/theming" component={Theming} />
          <Route path="/extra" component={ExtraAssignment} />

          <Route path="/assignment-1" component={AssignmentDescription} />
          <Route path="/assignment-2" component={AssignmentDescription} />
          <Route path="/assignment-3" component={AssignmentDescription} />
          <Route path="/assignment-extra" component={AssignmentDescription} />
        </div>
      </div>


      </BrowserRouter>
    );
  }
}

export default App;

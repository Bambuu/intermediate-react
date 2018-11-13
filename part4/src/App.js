import React, { Component } from "react";
import { SideBar } from "./SideBar";
import { Header } from "./Header";
import { HeroList } from "./HeroList";
import { ExtraAssignment } from "./assignments/extra-exercise";

class App extends Component {
  state = {
    currentPage: "/"
  };

  changePage = newPage => {
    this.setState({ currentPage: newPage });
  };

  render() {
    // Default component is HeroList
    let mainComponent = (
      <div className="hero-list">
        <HeroList />
      </div>
    );
    if (this.state.currentPage === "/movies") {
      mainComponent = (
        <div className="tall-div">
          Here's a fun list of superhero movies.. to be
          implemented later..
        </div>
      );
    } else if (this.state.currentPage === "/theming") {
      mainComponent = (
        <div>
          Here we'll end up changing the theme of our app..
          later
        </div>
      );
    } else if (this.state.currentPage === "/extra") {
      mainComponent = (
        <div>
          <ExtraAssignment prop1="oh my" prop2="oh me" />
        </div>
      );
    }
    return (
      <div className="root">
        <SideBar changePage={this.changePage} />
        <div className="content">
          <Header />
          {mainComponent}
        </div>
      </div>
    );
  }
}

export default App;

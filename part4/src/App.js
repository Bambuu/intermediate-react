import React, { Component } from "react";
import { SideBar } from "./SideBar";
import { Header } from "./Header";
import { HeroList } from "./HeroList";
import { ExtraAssignment } from "./ExtraAssignment";
import { Theming } from "./Theming";

class App extends Component {
  state = {
    currentPage: "/"
  };

  changePage = (newPage) => {
    this.setState({ currentPage: newPage });
  };

  render() {
    // Default component is HeroList
    let mainComponent = <HeroList />;
    if (this.state.currentPage === "/theming") {
      mainComponent = <Theming />;
    } else if (this.state.currentPage === "/extra") {
      mainComponent = <ExtraAssignment />;
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

import React, { Component } from "react";
import { SideBar } from "./SideBar";
import { Header } from "./Header";
import { HeroList } from "./HeroList";
import { ExtraAssignment } from "./ExtraAssignment";
import { Theming } from "./Theming";
import { BrowserRouter, Route } from "react-router-dom";
import { greenTheme, redTheme, ThemeContext } from "./ThemeContext";

class App extends Component {

  toggleTheme = () => {
    if (this.state.theme === redTheme){
      this.setState({
        theme: greenTheme,
      });
    } else {
      this.setState({
        theme: redTheme,
      });
    }
  };

  state = {
    theme: redTheme,
    toggleTheme: this.toggleTheme
  };



  render() {
    return (
      <BrowserRouter>
        <ThemeContext.Provider value={this.state}>
          <div className="root">
            <SideBar changePage={this.changePage}/>
            <div className="content">
              <Header/>
              <Route exact path="/" component={HeroList}/>
              <Route path="/theming" component={Theming}/>
              <Route path="/extra" component={ExtraAssignment}/>
            </div>
          </div>
        </ThemeContext.Provider>

      </BrowserRouter>
    );
  }
}

export default App;

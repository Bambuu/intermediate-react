import React, { Component } from 'react';
import { SideBar } from './SideBar';
import { Header } from './Header';
import { HeroList } from './HeroList';
import { ExtraAssignment } from "./ExtraAssignment";


class App extends Component {
  state = {
    currentPage: '/'
  };

  changePage = (newPage) => {
    this.setState({currentPage: newPage})
  };

  render() {
    // Default component is HeroList
    let mainComponent = <HeroList/>;
    if (this.state.currentPage === '/movies'){
      mainComponent = <div>Here's a fun list of superhero movies.. to be implemented later..</div>
    } else if (this.state.currentPage === '/theming'){
      mainComponent = <div>Here we'll end up changing the theme of our app.. later</div>
    } else if (this.state.currentPage === '/extra'){
      mainComponent = <ExtraAssignment prop1="One prop" prop2="Two props"/>
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

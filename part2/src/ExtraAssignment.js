
import * as React from "react";
import PropTypes from 'prop-types'
import { shuffle } from "./not-important/utils";

export class ExtraAssignment extends React.Component {
  // This is our initial state
  state = {
    movies: [
      {
        name: "Batman returns",
        year: '1989',
      },
      {
        name: "Superman returns",
        year: '1989',
      },
      {
        name: "Aquaman returns",
        year: '1989',
      },
      {
        name: "A movie about chickens",
        year: '1989',
      },
    ]
  };

  // This function takes a movie and changes it to another one.
  changeMovie = () => {
    // Copy the array as we're not allowed to modify state
    const moviesCopy = this.state.movies.slice();
    // Change the second movie into Spiderman
    moviesCopy[1] = {
      name: "Spiderman the Reboot 2",
      year: 2017,
    };
    this.setState({
      movies: moviesCopy
    })
  };

  // This function shuffles the order of the movies.
  shuffleMovies = () => {
    // Copy the array as we're not allowed to modify state
    const moviesCopy = this.state.movies.slice();
    // shuffle is a function we've defined somewhere that sorts
    // the array in-place
    shuffle(moviesCopy);
    this.setState({movies: moviesCopy})
  };

  render() {
    // Here we use map, to create an array of ListItemsWithState components.
    const listComponents = this.state.movies.map((movie, index) => <ListItemWithState key={movie.year} year={movie.year} name={movie.name}/>);
    // Which we then render inside an <ul> below.
    return (
      <div>
        <h1>Extra Exercise 1</h1>
        <button onClick={this.changeMovie}>Change a movie!</button>
        <button onClick={this.shuffleMovies}>Shuffle!</button>
        <ul>
          {listComponents}
        </ul>
      </div>
    );
  }
}

// This is a component that renders a <li/> with the movie contents, but also has a button that keeps track of how many
// times it's been clicked.
class ListItemWithState extends React.Component {
  state = {
    count: 0
  };

  static propTypes = {
    year: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <li>
        {this.props.year}, {this.props.name} - count is: {this.state.count} <button onClick={() => this.setState({count: this.state.count+1})}>+1</button>
      </li>
    );
  }
}

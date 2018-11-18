class AddHero extends React.Component {
  state = {
    value: "" // initial value
  };

  onValueChange = (event) => {
    const nextValue = event.target.value;
    this.setState({ value: nextValue });
  };

  addHero = () => {
    // now we can read whatever the user has inputted,
    // from this.state.value 🎉
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onValueChange}
        />
        <button onClick={this.addHero}>Add Hero</button>
      </div>
    );
  }
}
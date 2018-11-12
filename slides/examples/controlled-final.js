class AddHero extends React.Component {
  state = {
    value: "" // initial value
  };

  onValueChange = event => {
    const nextState = {
      value: event.target.value
    };
    this.setState(nextState);
  };

  submitToBackend = () => {
    postBackend({ data: this.state.value });
    this.setState({ value: "" }); // reset state
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onValueChange}
        />
        <button onClick={this.submitToBackend}>
          Add Hero
        </button>
      </div>
    );
  }
}

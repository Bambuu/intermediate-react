class AddHero extends React.Component {
  submitToBackend = () => {
    // What to submit? What is the value of the input?? 🤨
    postBackend({ data: "????" });
  };

  render() {
    return (
      <div>
        <input type="text" />
        <button onClick={this.submitToBackend}>
          Add Hero
        </button>
      </div>
    );
  }
}

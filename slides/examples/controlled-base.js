class AddHero extends React.Component {
  addHero = () => {
    // What to add? What is the value of the input?? 🤨
  };

  render() {
    return (
      <div>
        <input type="text" />
        <button onClick={this.addHero}>
          Add Hero
        </button>
      </div>
    );
  }
}

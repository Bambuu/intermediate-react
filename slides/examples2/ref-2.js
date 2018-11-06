class AddHeroForm extends React.Component {
  inputRef = React.createRef();

  componentDidMount() {
    // how to focus input element here?!?! 🤷‍♂️
  }

  render() {
    return (
      <form>
        <input type="text" ref={this.inputRef} />
        <button type="submit">Add Hero</button>
      </form>
    );
  }
}

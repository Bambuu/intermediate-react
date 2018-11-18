class AddHeroForm extends React.Component {
  inputRef = React.createRef();

  componentDidMount() {
    this.inputRef.current.focus();
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
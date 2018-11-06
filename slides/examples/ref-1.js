class AddHeroForm extends React.Component {
+  inputRef = React.createRef();

  componentDidMount() {
    // how to focus input element here?!?! 🤷‍♂️
  }

  render() {
    return (
      <form>
        <input type="text" />
        <button type="submit">Add Hero</button>
      </form>
    );
  }
}

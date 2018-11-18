export class Network extends React.Component {
  state = { online: navigator.onLine };

  componentDidMount() {
    window.addEventListener("online", () =>
      this.setState({ online: true })
    );

    window.addEventListener("offline", () =>
      this.setState({ online: false })
    );
  }

  render() {
    return this.props.children(this.state.online);
  }
}
export const withNetwork = WrappedComponent => {
  return class WithNetwork extends React.Component {
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
      return (
        <WrappedComponent
          online={this.state.online}
          {...this.props}
        />
      );
    }
  };
};
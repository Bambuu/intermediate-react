const BaseHeader = props => {
  const currentLocation = props.location.pathname;
  return <p>You are not at {currentLocation}</p>;
};

export const Header = withRouter(BaseHeader);

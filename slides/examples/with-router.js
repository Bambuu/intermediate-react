const BaseHeader = props => {
  const currentLocation = props.location.pathname;
  return <p>You are now at {currentLocation}</p>;
};

export const Header = withRouter(BaseHeader);

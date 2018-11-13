import React from 'react';
import { withRouter } from "react-router-dom";

export const Header = withRouter((props) => {
  console.log(props);
  return <div className="header">You are at <code>{props.location.pathname}</code></div>
});


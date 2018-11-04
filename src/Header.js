import React from 'react';
import { withRouter } from 'react-router-dom';

const HeaderComponent = (props) => {
	return <div>You are at <code>{props.location.pathname}</code></div>
};

export const Header = withRouter(HeaderComponent);

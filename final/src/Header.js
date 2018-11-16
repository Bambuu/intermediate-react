import React from 'react';
import {withRouter} from 'react-router-dom'
import { ThemeContext } from './ThemeContext';

const HeaderBase = (props) => {
  return (<ThemeContext.Consumer>
    {themeContext => {
   return (
    <div className="header" style={{backgroundColor:themeContext.theme.color}}>You are at <code>{props.location.pathname}</code></div>
    )
  }}
  </ThemeContext.Consumer>)
};

export const Header = withRouter(HeaderBase);

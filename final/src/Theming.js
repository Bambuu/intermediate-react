import React from 'react';
import { ThemeContext } from './ThemeContext';

export const Theming = () => {
  return (<div>
    <ThemeContext.Consumer>
      { themeContext => {
        return <div>
          color : {themeContext.theme.color}
          <button style={{backgroundColor: themeContext.theme.color}} onClick={themeContext.toggleTheme}>Toggle Theme</button>
        </div>
      }
      }
    </ThemeContext.Consumer>
  </div>)
};

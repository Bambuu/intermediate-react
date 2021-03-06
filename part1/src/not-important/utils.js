import PropTypes from 'prop-types'
import * as React from "react";

export const calculateBackgroundColor = (scrollPosition) => {
  const percentageScrolled = scrollPosition * 1.5 / window.innerHeight;
  return `rgb(255, 215, 0, ${percentageScrolled})`
};

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
export function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


export class TestRenderProp extends React.Component {
  render(){
    return (<div style={{border: 'solid 2px red'}}>
      {this.props.children("Hello from RenderProp")}
    </div>)
  }

  static propTypes = {
    children: PropTypes.func.isRequired
  }
}
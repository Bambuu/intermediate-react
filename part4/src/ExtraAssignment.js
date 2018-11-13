import * as React from "react";

const withScroll = () => {
  // How does this thing work..?
};

export class ExtraAssignment extends React.Component {
  render() {
    return (
      <div className="tall-div">
        <h1>Extra Assignment 2: Build-a-HOC</h1>
        <p>
          I've got some props: {this.props.prop1}{" "}
          {this.props.prop2}{" "}
        </p>
      </div>
    );
  }
}

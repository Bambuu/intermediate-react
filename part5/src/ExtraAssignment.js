import * as React from "react";

class RenderPropComponent extends React.Component {

  render() {
    return (<div>
      Hi from RenderPropComponent!
    </div>);
  }
}

export class ExtraAssignment extends React.Component {
  render() {
    return (
      <div className="tall-div">
        <h1>Extra Assignment! Render Props!</h1>
        Hi from ExtraAssignment
        <RenderPropComponent>
          <div> I'm a child of RenderPropComponent !!!</div>
        </RenderPropComponent>
      </div>
    );
  }
}

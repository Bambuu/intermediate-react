import React from "react";

export class EvolvingCodeSurfer extends React.Component {
  state = {
    step: 0
  };

  render() {
    return (
      <CodeSurfer
        title="Adding a ref"
        code={require("!raw-loader!./examples/ref-3.js")}
        lang="jsx"
        showNumbers={true}
        theme={nightOwl}
        steps={[{ lines: [5] }]}
      />
    );
  }
}

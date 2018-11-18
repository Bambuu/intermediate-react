import React from "react";
import ReactMarkdown from "react-markdown";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "./github-markdown.css";

export class Assignment extends React.Component {
  state = {
    markdown: null
  };

  async componentDidMount() {
    const file = await fetch(require(`../assignments/assignment-${this.props.file}.md`));
    const markdown = await file.text();
    this.setState({ markdown });
  }

  render() {
    return (
      <ReactMarkdown
        className="markdown-body"
        source={this.state.markdown}
        renderers={{ code: CodeRenderer }}
      />
    );
  }
}

// from https://jsbin.com/mukijamuku/1/edit?html,js,output
const CodeRenderer = props => {
  var html = Prism.highlight(
    props.value,
    Prism.languages[props.language]
  );
  var cls = "language-" + props.language;

  return (
    <pre className={cls}>
      <code
        dangerouslySetInnerHTML={{ __html: html }}
        className={cls}
      />
    </pre>
  );
};

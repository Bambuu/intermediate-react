import React from "react";
import ReactMarkdown from "react-markdown";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "./github-markdown.css";

export class AssignmentDescription extends React.Component {
  state = {
    markdown: null
  };

  fetchNewMarkdown = async () => {
    let name = this.props.file;
    if (!name){
      // If no file given, read from URL
      const pathSplit = document.location.pathname.split('-');
      if (pathSplit.length === 3){
        // Extra assignment of the form assignment-extra-1
        name = pathSplit[1] + '-' + pathSplit[2]
      } else {
        // Extra assignment of the form "assignment-1"
        name = pathSplit[1]
      }
    }

    const file = await fetch(require(`../assignments/assignment-${name}.md`));
    const markdown = await file.text();
    this.setState({ markdown });
  };

  async componentDidMount() {
    this.fetchNewMarkdown()
  }

  async componentDidUpdate(prevProps) {
    if (this.props.file !== prevProps.file){
      this.fetchNewMarkdown()
    }
  }

  render() {
    return (
      <div className="extra-assignment">
      <ReactMarkdown
        className="markdown-body"
        source={this.state.markdown}
        renderers={{ code: CodeRenderer }}
      />
      </div>
    );
  }
}

// from https://jsbin.com/mukijamuku/1/edit?html,js,output
const CodeRenderer = props => {
  var html = Prism.highlight(
    props.value,
    Prism.languages[props.language || 'js']
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

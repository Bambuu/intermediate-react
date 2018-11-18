import React from "react";
import { CodeSurfer } from "mdx-deck-code-surfer";

export const CodeSurferNoZoom = props => {
  const maxFontWidth = getMaxFontWidth(props.code);
  const maxFontHeight = getMaxFontHeight(
    props.code,
    props.title,
    props.steps
  );
  const fontSize = Math.min(maxFontWidth, maxFontHeight);

  return (
    <div
      className="code-surfer-no-zoom"
      style={{ fontSize: `${fontSize}px` }}
    >
      <CodeSurfer {...props} />
    </div>
  );
};

const getMaxFontWidth = code => {
  const maxLineLength = code
    .split("\n")
    .reduce((max, line) => Math.max(line.length, max), 0);
  return 1950 / maxLineLength;
};

const getMaxFontHeight = (code, title, steps) => {
  let containerHeight = window.innerHeight - 60; //dots at bottom are appr. 60px height
  if (title) {
    containerHeight -= 80;
  }
  if (hasNotes(steps)) {
    containerHeight -= 100;
  }
  const numberOfLines = code.split("\n").length;
  return containerHeight / (numberOfLines + 5);
};

const hasNotes = steps => {
  return steps.reduce((result, step) => {
    if (step.notes) {
      return true;
    }
    return result;
  }, false);
};

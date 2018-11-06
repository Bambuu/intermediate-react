import { dark } from "mdx-deck/themes";
import okaidia from "react-syntax-highlighter/styles/prism/okaidia";
import baseTheme from "mdx-deck/themes";

export default {
  ...baseTheme,
  transitionDuration: 0,
  colors: {
    ...baseTheme.colors,
    text: "#d6deeb",
    background: "#011627",
    link: "#addb67",
    code: "rgb(199, 146, 234)"
  }
};
// export default {
// 	...dark,
// 	prism: {
// 		style: okaidia
// 	}
// }

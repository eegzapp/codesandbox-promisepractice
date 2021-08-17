import "./styles.css";
import sanitizeHtml from "sanitize-html";
import { SomeComponent } from "./SomeComponent";

export default function App() {
  const html = "<strong><script></script>hello world</strong>";
  console.log(sanitizeHtml(html, { disallowedTagsMode: "recursiveescape" }));
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <SomeComponent />
    </div>
  );
}

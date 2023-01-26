import { useEffect, useState } from "react";
import "./App.css";
import Document from "./Document";
function App() {
  const [content, setContent] = useState("");
  const title = "Terms and Conditions"
  async function FetchData() {
    const response = await fetch(
      "https://jaspervdj.be/lorem-markdownum/markdown.txt"
    ).catch((response) => {
      console.log(response.status, response.statusText)
    });
    const data = await response.text();
    setContent(data);
  }

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="App">
      <Document title={title} content={content} />
    </div>
  );
}

export default App;

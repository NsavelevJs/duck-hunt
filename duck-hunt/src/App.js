import React from "react";
import "./duckhunt";
import "./duckhunt.css";
import "nes.css/css/nes.min.css";

function App() {
  return (
    <div>
      <title>Duck Hunt</title>
      <link rel="stylesheet" href="duckhunt.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <script src="duckhunt.js"></script>
      <footer>
        <a href="/">
          <button type="submit" className="nes-btn is-error">
            Refresh Button
          </button>
        </a>
      </footer>
    </div>
  );
}

export default App;

import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";

const App = () => {

  return (
    <React.StrictMode>
      <div id="something-important">
        <header>
          <Link to="/"><h1>Adopt Me</h1></Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  )
};
render(<App />, document.getElementById("root"));

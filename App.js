import React from "react";
import ReactDOM from "react-dom/client";

// JSX - HTML likr syntax - JSX is diffrent and React is different.

const heading = <h1 className="heading">This is JSX element.</h1>;

const Title = () => (
  <div>
    <h1> This is title component</h1>
  </div>
);

const HeadingComponent = () => (
  <div>
    <h2>This is HeadingComponent </h2>
    <Title />
    {heading}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

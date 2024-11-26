import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";

// JSX - HTML likr syntax - JSX is diffrent and React is different.

const Header = (prop) => (
  <div class="title">
    {headerElem}
    <h1>Hello Shail This is H1 with header component</h1>
    <h2>Hello {prop.name} This is H2 with header component</h2>
    <h3>This is H3 with header component</h3>
  </div>
);

const headerElem = (
  <div>
    <h1>This is h1 using Element</h1>
    <h2>This is h2 using Element</h2>
    <h3>Thid id h3 using jsx Element</h3>
  </div>
);

const heading = <h1 className="heading">This is JSX element.</h1>;

const Title = () => (
  <div>
    <h1> This is title component</h1>
  </div>
);

const HeadingComponent = () => (
  <div>
    <Header />
    {/* <Header name="Sara" /> */}

    {/* <h2>This is HeadingComponent </h2> */}
    {/* <Title /> */}
    {/* {heading} */}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

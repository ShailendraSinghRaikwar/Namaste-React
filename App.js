import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "childDiv" }, [
    React.createElement("h1", { id: "headingOne" }, "This is H1 through HMR"),
    React.createElement("h2", { id: "headingTwo" }, "This is H2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log(heading);

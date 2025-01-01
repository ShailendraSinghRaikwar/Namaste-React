import { Component } from "react";

class ThirdChildClass extends Component {
  constructor() {
    super();
    console.log("Third Constructor");
  }

  componentDidMount() {
    console.log("Third Component did mount");
  }

  render() {
    console.log("Third Render");
    return (
      <div>
        <h1>Third Child Class</h1>
      </div>
    );
  }
}

export default ThirdChildClass;

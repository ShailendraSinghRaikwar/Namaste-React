// import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    // console.log("parent constructor");
  }
  componentDidMount() {
    // console.log("parent component did mount");
  }
  render() {
    // console.log("parent render");
    return (
      <div>
        {/* <User /> */}
        <h2>Parent class</h2>
        <UserClass name={"First"} location={"Pune"} />
      </div>
    );
  }
}

export default About;

// import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

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
        <div>
          LoggedIn User :
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold"> {loggedInUser} </h1>
            )}
          </UserContext.Consumer>
        </div>
        {/* <UserClass name={"First"} location={"Pune"} /> */}
      </div>
    );
  }
}

export default About;

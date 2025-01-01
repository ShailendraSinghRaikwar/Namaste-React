import React from "react";
import ThirdChildClass from "./ThirdChildClass";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const { name, location } = this.props;

    console.log(this.props.name + "child render");
    return (
      <div className="user-card">
        <h1>Name : Shailendra Singh -{name}</h1>
        <h2>Location: Pune -{location}</h2>
        <ThirdChildClass />
      </div>
    );
  }
}

export default UserClass;

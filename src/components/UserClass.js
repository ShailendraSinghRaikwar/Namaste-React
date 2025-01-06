import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: "name",
      location: "Default",
    };
    console.log("Child constructor");
  }
  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/ShailendraSinghRaikwar"
    );
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log("Child component did mount");
  }

  componentDidUpdate() {
    this.state.timer = setInterval(() => {
      console.log("setInterval componentDidUpdate");
    }, 1000);
    console.log("Child componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
    console.log("componentWillUnmount");
  }

  render() {
    console.log("Child render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h1>Name from Githuib : {name}</h1>
        <h2>Location: {location} </h2>
      </div>
    );
  }
}

export default UserClass;

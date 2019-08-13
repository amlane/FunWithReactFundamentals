import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    name: "amanda",
    age: 32,
    count: 0,
    liked: false
  };

  upCount = e => {
    e.preventDefault();
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  downCount = e => {
    e.preventDefault();
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  toggleLike = e => {
    e.preventDefault();
    this.setState(prevState => ({
      liked: !prevState.liked
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>
          Hello {this.state.name} and I am {this.state.age}
        </h1>
        <p>{this.state.count}</p>
        <button onClick={this.upCount}>+</button>
        <button onClick={this.downCount}>-</button>
        <div>
          <h2>{this.state.liked === false ? "Do Not Like" : "Like"}</h2>
          <button onClick={this.toggleLike}>
            {this.state.liked ? "Unlike" : "Like"}
          </button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

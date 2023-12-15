import React, { Component } from "react";
import Last from "./finalpage";

export default class QuizPage extends Component {
  constructor(props) {
    super();
    this.state = {
      showFinalPage: false,
    };
  }
  lastpage = () => {
    this.setState({ showFinalPage: true });
  };
  render() {
    return (
      <>
        {this.state.showFinalPage ? (
          <Last />
        ) : (
          <div className="quiz">
            <h3>Question 1</h3>
            <p>Which is the only mammal that cannot jump?</p>
            <div className="options">
              <div className="option">
                <p>Dog</p>
              </div>
              <div className="option">
                <p>Lion</p>
              </div>
              <div className="option">
                <p>Elephant</p>
              </div>
              <div className="option">
                <p>Goat</p>
              </div>
            </div>
            <div className="buttons">
              <div className="funcbutn">
                <button className="qbutn">P R E V</button>
                <button onClick={this.lastpage} className="qbutn">
                  N E X T
                </button>{" "}
                <button className="qbutn">Q U I T</button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

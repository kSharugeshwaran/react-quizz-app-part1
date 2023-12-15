import React, { Component } from "react";
import QuizPage from "./quizpage"; // Use a relative import

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuizPage: false,
    };
  }

  next = () => {
    // Set showQuizPage to true when "Start" button is clicked
    this.setState({ showQuizPage: true });
  };

  render() {
    return (
      <>
        {this.state.showQuizPage ? (
          <QuizPage />
        ) : (
          <div className="main">
            <h2>Quiz App</h2>
            <button className="start" onClick={this.next}>
              S T A R T
            </button>
          </div>
        )}
      </>
    );
  }
}

export default Quiz;

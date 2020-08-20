import React from "react";
import FORM_DATA from "./form.data.js";
import Result from "../result/result.component";
import Question from "../question/question.component";
import "./form.styles.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: FORM_DATA,
      scores: {
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0,
        q5: 0,
        q6: 0,
        q7: 0,
        q8: 0,
        q9: 0,
      },
      totalScore: 0,
      showResult: false,
      resultId: "",
    };
  }

  handleChange = (name, event) => {
    this.setState({
      scores: {
        ...this.state.scores,
        [name]: +event.target.value,
      },
    });
  };

  // arrow function, unde este definita functia this = form;
  // function normal, this tau este unde este apelata functia.
  handleSubmit = (event) => {
    let count = 0;
    const arr = Object.keys(this.state.scores);
    for (let i = 0; i < arr.length; i++) {
      count = count + this.state.scores[arr[i]];
    }
    let resultId = "";
    if (count === 0) {
      resultId = "r1";
    } else if (count > 0 && count <= 2) {
      resultId = "r2";
    } else if (count > 2 && count <= 7) {
      resultId = "r3";
    } else if (count > 7 && count <= 27) {
      resultId = "r4";
    }
    this.setState({
      totalScore: count,
      showResult: true,
      resultId,
    });

    event.preventDefault();
  };

  handleBackBtn = () => {
    this.setState({ showResult: false });
  };

  render() {
    const { questions, showResult, resultId } = this.state;
    const formContainerClassName = `FormContainer ${
      !showResult ? "IsActive" : ""
    } `;
    const resultContainerClassName = `ResultContainer ${
      showResult ? "IsActive" : ""
    } `;

    return (
      <div className="FormComponent">
        <form className={formContainerClassName} onSubmit={this.handleSubmit}>
          {questions.map(({ id, answers, title }) => (
            <Question
              key={id}
              id={id}
              answers={answers}
              title={title}
              handleChange={this.handleChange}
            />
          ))}
          <input type="submit" value="Submit" />
        </form>
        <div className={resultContainerClassName}>
          <h2>Your score is {this.state.totalScore}</h2>
          <Result id={resultId} />
          <button type="button" onClick={this.handleBackBtn}>
            Go back to form
          </button>
        </div>
      </div>
    );
  }
}

export default Form;

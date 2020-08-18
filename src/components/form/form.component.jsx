import React from "react";
import FORM_DATA from "./form.data.js";
// import Question from "../question/question.component";
// import CustomButton from "../custom-button/custom-button.component";

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
    };
  }

  handleChange(name, event) {
    //console.log(event.target.value);
    // ifurile pentru modificat state
    console.log("handle change clicked");
    console.log("event is ", event);
    console.log("name is", name);
    if (name === "q1") {
      this.setState({
        scores: {
          ...this.state.scores,
          q1: +event.target.value,
        },
      });
    } else if (name === "q2") {
      this.setState({
        scores: {
          ...this.state.scores,
          q2: +event.target.value,
        },
      });
    } else if (name === "q3") {
      this.setState({
        scores: {
          ...this.state.scores,
          q3: +event.target.value,
        },
      });
    }

    setTimeout(() => {
      console.log("my state is", this.state);
    }, 2000);
  }

  handleSubmit(event) {
    console.log(
      "Your score is ",
      this.state.scores.q1 + this.state.scores.q2 + this.state.scores.q3
    );
    event.preventDefault();
  }

  render() {
    const { questions } = this.state;
    return (
      <form className="FormContainer" onSubmit={(e) => this.handleSubmit(e)}>
        {questions.map(({ id, answers, title }) => (
          <div className="QuestionContainer" key={id}>
            <div className="QuestionTitle">{title}</div>
            <div className="QuestionAnswers">
              {answers.map(({ id, answer, value, name }) => (
                <div key={id}>
                  <input
                    type="radio"
                    id={id}
                    onChange={(e) => this.handleChange(name, e)}
                    name={name}
                    value={value}
                    /* required */
                  />
                  <label htmlFor={id}>{answer}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;

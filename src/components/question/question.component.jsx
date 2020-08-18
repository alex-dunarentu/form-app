import React from "react";

/*const Question = ({ title, answers }) => (
  <div className="QuestionContainer">
    <div className="QuestionTitle">{title}</div>
    <div className="QuestionAnswers">
      {answers.map(({ id, answer, value, name }) => (
        <div key={id}>
          <input type="radio" id={id} name={name} value={value} required />
          <label htmlFor={id}>{answer}</label>
        </div>
      ))}
    </div>
  </div>
);
*/

class Question extends React.Component {
  render() {
    return (
      <div className="QuestionContainer">
        <div className="QuestionTitle">{this.props.title}</div>
        <div className="QuestionAnswers">
          {this.props.answers.map(({ id, answer, value, name }) => (
            <div key={id}>
              <input type="radio" id={id} name={name} value={value} required />
              <label htmlFor={id}>{answer}</label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Question;

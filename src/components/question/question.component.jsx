import React from "react";
import PropTypes from 'prop-types';

const Question = (props) => {
  const { id, title, answers, handleChange } = props;

  return (
    <div className="QuestionContainer" key={id}>
      <div className="QuestionTitle">{title}</div>
      <div className="QuestionAnswers">
        {answers.map(({ id, answer, value, name }) => (
          <div key={id}>
            <input
              type="radio"
              id={id}
              onChange={(e) => handleChange(name, e)}
              name={name}
              value={value}
              required 
            />
            <label htmlFor={id}>{answer}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

Question.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Question;

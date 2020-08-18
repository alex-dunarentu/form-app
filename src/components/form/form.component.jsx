import React from "react";
import FORM_DATA from "./form.data.js";
import Question from "../question/question.component";
import CustomButton from "../custom-button/custom-button.component";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: FORM_DATA,
    };
  }
  render() {
    const { questions } = this.state;
    return (
      <form className="FormContainer">
        {questions.map(({ id, ...otherProps }) => (
          <Question key={id} {...otherProps} />
        ))}
        <CustomButton type="submit" >
          SUBMIT
        </CustomButton>
      </form>
    );
  }
}

export default Form;

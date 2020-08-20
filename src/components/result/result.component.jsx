import React from "react";
import PropTypes from "prop-types";

const results = {
  r1: "Based on your answers, you are not reporting gambling-related problems.",
  r2:
    "Your answers indicate that you may have a low level of risk for gambling-related problems.",
  r3:
    "Your answers indicate that you may have a moderate level of risk for gambling-related problems.",
  r4:
    "Your answers indicate that you may have a diagnosis of problem gambling, we advise you to seek professional help.",
};

const Result = (props) => {
  const { id } = props;

  const text = results[id];
  return (
    <div>
      <p className="Response">{text}</p>
    </div>
  );
};

Result.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Result;

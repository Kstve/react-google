import React from "react";
import "./Answers.css";

const Google = ({ answers }) => {
  return (
    <div className="answer">
      <p>{answers}</p>
    </div>
  );
};

export default Google;

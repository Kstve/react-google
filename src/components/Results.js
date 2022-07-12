import React from "react";
import "./Results.css";

const Results = ({ results, link, description }) => {
  return (
    <div className="results">
      <a href={link} target="_blank">
        <p>{results}</p>
      </a>
      <p id="description">{description}</p>
    </div>
  );
};

export default Results;

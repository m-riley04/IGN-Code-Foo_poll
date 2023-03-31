import React from "react";
import "./pollstyles.css";

// Properties for the poll result
interface Properties {
  key: number;
  title: string;
  votes: number;
  onClick?: () => void;
  buttonStyle: string;
  titleStyle: string;
  votesStyle: string;
}

// PollResult component
const PollResult: React.FC<Properties> = ({
  key,
  title,
  votes,
  onClick,
  buttonStyle,
  titleStyle,
  votesStyle
}) => {
  return (
    <button onClick={onClick} className={buttonStyle}>
      <p className={titleStyle}>{title}</p>
      <p className={votesStyle}>Votes: {votes}</p>
    </button>
  );
};

export default PollResult;

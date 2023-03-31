import React from "react";
import "./pollstyles.css";

// Properties for the poll option
interface Properties {
  key: number;
  title: string;
  votes: number;
  onClick?: () => void;
  buttonStyle: string;
  titleStyle: string;
}

// PollOption component
const PollOption: React.FC<Properties> = ({
  key,
  title,
  votes,
  onClick,
  buttonStyle,
  titleStyle
}) => {
  return (
    <button onClick={onClick} className={buttonStyle}>
      <p className={titleStyle}>{title}</p>
    </button>
  );
};

export default PollOption;

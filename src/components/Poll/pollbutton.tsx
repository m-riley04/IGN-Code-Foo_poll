import React from "react";

interface Properties {
  title: string;
  onClick?: () => void;
  buttonStyle: string;
  titleStyle: string;
}

const PollButton: React.FC<Properties> = ({
  title,
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

export default PollButton;

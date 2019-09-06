import React from "react";

interface Props {
  handleClick(): void;
}

export const Circle: React.FC<Props> = ({ handleClick }) => {
  return (
    <button
      className="btn-floating btn-large waves-effect waves-light btn"
      onClick={handleClick}
    >
      {" "}
      <i className="mi mi-edit"></i>{" "}
    </button>
  );
};

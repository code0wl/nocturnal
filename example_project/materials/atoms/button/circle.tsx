import React from "react";

interface Props {
  handleClick(): void;
}

export const Circle: React.FC<Props> = ({ handleClick }) => {
  return (
    <button
      className="btn-floating btn-large waves-effect waves-light btn"
      onClick={this.props.handleClick}
    >
      {" "}
      <i className="mi mi-edit"></i>{" "}
    </button>
  );
};

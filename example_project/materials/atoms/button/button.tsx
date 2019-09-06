import React from "react";

interface Props {
  handleClick(): void;
  label: string;
}

export const Button: React.FC<Props> = ({ handleClick, label }) => (
  <button
    className="waves-effect waves-light btn"
    onClick={this.props.handleClick}
  >
    {" "}
    {this.props.label || "I am a Button "}{" "}
  </button>
);

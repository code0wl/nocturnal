import React from "react";

export class Input extends React.Component {
  render() {
    return (
      <div>
        <input
          id="first_name"
          type="text"
          className="validate"
        />
        <label htmlFor="first_name">First </label>
      </div>
    );
  }
}

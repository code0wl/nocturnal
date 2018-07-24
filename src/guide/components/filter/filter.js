import React from "react";

export default ({ change }) => {
  return (
    <div className="input-field col s6 filter">
      <input
        style={{
          width: `100%`,
          border: 0,
          margin: `10px 0`,
          padding: `10px`,
          transition: `all 0.3s cubic-bezier(.64,.09,.08,1)`,
          background: `linear-gradient(to bottom, rgba(255,255,255,0) 96%, $color 4%)`,
          backgroundPosition: `-200px 0`,
          backgroundSize: `200px 100%`
        }}
        type="search"
        placeholder="Filter on type or name"
        onChange={change}
        className="validate"
      />
      <i className="mi mi-filter-list" />
    </div>
  );
};

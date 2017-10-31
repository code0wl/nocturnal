import React from "react";
import "./filter.css";
import Input from "muicss/lib/react/input";

export default ({change}) => {
    return (
        <div className="filter">
            <Input hint="Filter" onChange={change}/>
            <i className="mi mi-filter-list"></i>
        </div>
    );
}
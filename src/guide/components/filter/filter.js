import React from "react";
import "./filter.css";
import Input from "muicss/lib/react/input";

export default ({change}) => {
    return (
        <div className="input-field col s6 filter">
            <Input hint="Filter on type or name" onChange={change} className="validate"/>
            <i className="mi mi-filter-list"></i>
        </div>
    );
}
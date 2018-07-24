import React from "react";

export default ({change}) => {
    return (
        <div className="input-field col s6 filter">
            <input type="search" hint="Filter on type or name" onChange={change} className="validate"/>
            <i className="mi mi-filter-list"></i>
        </div>
    );
}
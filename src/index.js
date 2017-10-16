import React from "react";
import ReactDOM from "react-dom";
import "./library/index.css";
import App from "./library/app";
import registerServiceWorker from "./library/registerServiceWorker";

ReactDOM.render(<App/>, document.getElementById("root"));
registerServiceWorker();

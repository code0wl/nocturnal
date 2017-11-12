import React from "react";
import {render} from "react-dom";
import App from "./guide/app";
import config from "./guide/store/config";
import {Provider} from "react-redux";
import registerServiceWorker from "./guide/registerServiceWorker";

const store = config();
const target = document.getElementById("root");

render(
    <Provider store={store}>
        <App/>
    </Provider>, target
);

registerServiceWorker();

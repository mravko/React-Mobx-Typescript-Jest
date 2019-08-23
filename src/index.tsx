import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'mobx-react';
import { App } from "./app"
import { configure } from "mobx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { UserStore } from "./common/stores/user-store";
import { RegistryStore } from "./features/registry/stores/store"

configure({ enforceActions: "always" });

const stores = {
    registryStore: new RegistryStore(),
    userStore: new UserStore()
}

ReactDOM.render(
    <Provider {...stores}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);


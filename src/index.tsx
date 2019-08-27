import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'mobx-react';
import { App } from "./app"
import { configure } from "mobx";
import { BrowserRouter as Router  } from "react-router-dom";

import { UserStore } from "./common/stores/user-store";
import { RegistryStore } from "./features/registry/stores/store"
import { TeamStore } from "./features/team/stores/store";

configure({ enforceActions: "always" });

const stores = {
    registryStore: new RegistryStore(),
    userStore: new UserStore(),
    teamStore: new TeamStore()
}

ReactDOM.render(
    <Provider {...stores}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);


import * as React from "react";
import * as ReactDOM from "react-dom";
import { RegistryStore } from "./features/registry/store"
import { Provider, inject } from 'mobx-react';
import { App } from "./app"
import { configure } from "mobx";

configure({ enforceActions: "always" });

const stores = {
    store: new RegistryStore()
}

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>,
    document.getElementById("root")
);
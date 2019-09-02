import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'mobx-react';
import { App } from "./app"
import { configure } from "mobx";
import { BrowserRouter as Router  } from "react-router-dom";

import { UserStore } from "./common/stores/user-store";
import { RegistryStore } from "./features/registry/stores/store"
import { TeamStore } from "./features/team/stores/store";

import * as signalR from "@aspnet/signalr";
const stores = {
    registryStore: new RegistryStore(),
    userStore: new UserStore(),
    teamStore: new TeamStore()
}
const connection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:5000/hub")       
    .configureLogging(signalR.LogLevel.Trace)
    .build();

connection.start().catch(err => {debugger; console.log(err) });

connection.on("ReceiveData", (data: string) => {
    console.log(data);
    const team = JSON.parse(data);
    stores.teamStore.setTeam(team);
 }); 

configure({ enforceActions: "always" });

ReactDOM.render(
    <Provider {...stores}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);


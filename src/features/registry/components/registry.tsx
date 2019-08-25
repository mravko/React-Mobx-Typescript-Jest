import * as React from "react";
import { observer, inject } from "mobx-react"
import { RegistryStore } from "../stores/store"
import { NewRegistryComponent } from "./new-registry";
import { Link, Route } from 'react-router-dom';

export interface IRegistryProps {
	registryStore?: RegistryStore
}

@inject("registryStore")
@observer
export class RegistryComponent extends React.Component<IRegistryProps>
{
	constructor(props: IRegistryProps) {
		super(props);

		const { registryStore } = props;
		this.store = registryStore;
		this.store.loadData();
	}

	private store: RegistryStore;

	render() {
		const newDialogPath = "newr";
		const newDialogPath2 = "newr2";
		return (<div>
			<h1>Registry</h1>
			<div>
				{this.store.data.map((d) => { return <div key={d.id}>{d.id}</div>; })}
			</div>
			<hr></hr>
			<Link to={`/registry/${newDialogPath}`}>New</Link>
			<Link to={`/registry/${newDialogPath2}`}>New</Link>

			<Route path="/registry/newr" render={(props) => <NewRegistryComponent />}></Route>
		</div>);
	}
}
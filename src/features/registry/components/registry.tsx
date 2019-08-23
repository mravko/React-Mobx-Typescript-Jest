import * as React from "react";
import { observer, inject } from "mobx-react"
import { RegistryStore } from "../stores/store"
import { UrlDialogComponent } from "../../../common/components/url-dialog"
import { NewRegistryComponent } from "./new-registry";
import { Link } from 'react-router-dom';

export interface IRegistryProps {
	registryStore?: RegistryStore,
	match: any
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
			<Link to={`${this.props.match.url}/${newDialogPath}`}>New</Link>
			<Link to={`${this.props.match.url}/${newDialogPath2}`}>New</Link>

			<UrlDialogComponent title="Dialog 1" route={newDialogPath} match={this.props.match} component={NewRegistryComponent}>
			</UrlDialogComponent>
			<UrlDialogComponent title="Dialog 2" route={newDialogPath2} match={this.props.match} component={NewRegistryComponent}>
			</UrlDialogComponent>

		</div>);
	}
}
import * as React from "react";
import { observer, inject } from "mobx-react"
import { RegistryStore } from "../stores/store"

export interface IRegistryProps {
	registryStore?: RegistryStore
}

@inject("registryStore")
@observer
export class NewRegistryComponent extends React.Component<IRegistryProps>
{
	constructor(props: IRegistryProps) {
		super(props);

		const { registryStore } = props;
		this.store = registryStore;
		this.store.loadData();
	}

	private store: RegistryStore;

	render() {
		return (<div>
			<h3>New Registry</h3>
		</div>);
	}
}
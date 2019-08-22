import * as React from "react";
import { RegistryStore } from "./features/registry/stores/store"
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { RegistryComponent } from "./features/registry/components/registry"

interface AppProps { store?: RegistryStore; }

const AppComponent = styled.div`
	display: flex;
	flex-direction: column;
	width: 200px;
`;

export class App extends React.Component<AppProps> {
	inputRef: any = null;

	render() {
		return (
			<AppComponent>
				<RegistryComponent></RegistryComponent>
			</AppComponent>);
	}
}
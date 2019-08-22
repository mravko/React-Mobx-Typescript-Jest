import * as React from "react";
import { RegistryStore } from "./features/registry/stores/store"
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { RegistryComponent } from "./features/registry/components/registry"
import { UserInfo } from "./common/components/login-user-info";

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
				<UserInfo></UserInfo>
				<RegistryComponent></RegistryComponent>
			</AppComponent>);
	}
}
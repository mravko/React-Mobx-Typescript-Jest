import * as React from "react";
import { RegistryStore } from "./features/registry/store"
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

interface AppProps { store?: RegistryStore; }

const AppComponent = styled.div`
	display: flex;
	flex-direction: column;
	width: 200px;
`;

@inject("store")
@observer
export class App extends React.Component<AppProps> {
	inputRef: any = null;

	render() {
		const { store } = this.props;
		return (
			<AppComponent>
				<input type="text" ref={(ref => this.inputRef = ref)}></input>
				<button onClick={() => store.changeName(this.inputRef.value)}>Send</button>
				Hello {store.name}
			</AppComponent>);
	}
}
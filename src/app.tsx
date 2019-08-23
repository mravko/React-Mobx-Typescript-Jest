import * as React from "react";
import styled from 'styled-components';
import { MenuComponent } from "./common/components/menu";
import { UserStore } from "./common/stores/user-store";
import { Route } from "react-router-dom";
import { RegistryComponent } from "./features/registry/components/registry";
import { LoanComponent } from "./features/loan/components/loan";
import { observer, inject } from "mobx-react";

interface AppProps { userStore?: UserStore; }

const AppComponent = styled.div`
	display: flex;
	flex-direction: column;
`;

const AppContent = styled.div`
	border: 1px solid black;
`;

@inject("userStore")
@observer
export class App extends React.Component<AppProps> {
	render() {
		const loggedIn = this.props.userStore.isLoggedIn;
		return (
			<AppComponent>
				<MenuComponent></MenuComponent>
				<AppContent>
					<Route exact path="/" component={null} />
					<Route {...this.props} path="/registry" render={(props) =>
						loggedIn ?
							<RegistryComponent match={props.match} />
							:
							<div>You must be logged in</div>
					} />
					<Route path="/loan" component={LoanComponent} />
				</AppContent>
			</AppComponent>);
	}
}
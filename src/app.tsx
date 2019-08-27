import * as React from "react";
import { TopBar } from "./features/menu/top-bar";
import { UserStore } from "./common/stores/user-store";
import { Route } from "react-router-dom";
import { RegistryComponent } from "./features/registry/components/registry";
import { LoanComponent } from "./features/loan/components/loan";
import { TeamComponent } from "./features/team/components/team"
import { observer, inject } from "mobx-react";

import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

interface AppProps { userStore?: UserStore; }

const AppComponent = styled.div`
	margin: 0;
    padding: 0;
`;

const defaultTheme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: green,
    }
});

@inject("userStore")
@observer
export class App extends React.Component<AppProps> {
    render() {
        const loggedIn = this.props.userStore.isLoggedIn;
        return (
            <ThemeProvider theme={defaultTheme}>
                <AppComponent>

                    <TopBar />
                    <React.Fragment>
                        <Route exact path="/" component={null} />
                        <Route {...this.props} path="/registry" render={(props) =>
                            loggedIn ?
                                <RegistryComponent />
                                :
                                <div>You must be logged in</div>
                        } />
                        <Route path="/loan" component={LoanComponent} />
                        <Route path="/team" component={TeamComponent} />
                    </React.Fragment>

                </AppComponent>
            </ThemeProvider>
        );
    }
}
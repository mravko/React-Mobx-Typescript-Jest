import * as React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from "styled-components";
import { withTheme } from '@material-ui/styles';
import EmptyProps from '../../common/helpers/empty-props';
import { LeftDrawer } from "./left-drawer";

const TopBarWrapper = styled.div`
    flex-grow: 1;
`;

const StyledIconButton = withTheme(styled(IconButton)`
    && {
        margin-right: ${(props) => props.theme.spacing(2)}px;
    }
`);

class TopBarState {
    openDrawer: boolean = false;
}

export class TopBar extends React.Component<EmptyProps, TopBarState> {

    constructor(props: EmptyProps) {
        super(props);
        this.state = {
            openDrawer: false
        };
    }

    render() {
        return (
            <TopBarWrapper>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <StyledIconButton onClick={() => this.setState({ openDrawer: true })} edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </StyledIconButton>
                        <Typography variant="h6" color="inherit">
                            Fantasy Football Helper
                        </Typography>
                    </Toolbar>
                </AppBar>
                <LeftDrawer openDrawer={this.state.openDrawer} onClose={() => { this.setState({ openDrawer: false }); }} />
            </TopBarWrapper>
        );
    }
}


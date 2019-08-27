import * as React from "react";
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import styled from "styled-components";
import { Link } from "react-router-dom";

const DrawerContent = styled.div`
    && {
        padding: 5px;
    }
`;

class LeftDrawerProps {
    openDrawer: boolean = false;
    onClose: Function
}

export class LeftDrawer extends React.Component<LeftDrawerProps> {

    render() {
        return (
            <Drawer open={this.props.openDrawer} onClose={() => { this.props.onClose() }}>
                <DrawerContent>
                    <Typography variant="h6" color="inherit">
                        Fantasy Football Helper
                    </Typography>

                    <Divider light />

                    <List component="nav" aria-label="mailbox folders">
                        <Link to="/team">
                            <ListItem button>
                                <ListItemText primary="Team" />
                            </ListItem>
                        </Link>
                        <Divider />
                        <ListItem button divider>
                            <ListItemText primary="Drafts" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Trash" />
                        </ListItem>
                        <Divider light />
                        <ListItem button>
                            <ListItemText primary="Spam" />
                        </ListItem>
                    </List>
                </DrawerContent>
            </Drawer>);
    }
}

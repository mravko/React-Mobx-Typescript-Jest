import * as React from 'react';
import { Paper, Table, TableHead, TableCell, TableBody, TableRow } from '@material-ui/core';
import styled from "styled-components";
import { withTheme } from "@material-ui/styles";
import { observer, inject } from 'mobx-react';
import { TeamStore } from '../stores/store';
import { SettingsComponent } from "./settings";

const StyledPaper = withTheme(styled(Paper)`
    && {
        width: "100%";
        margin-top: ${(props) => props.theme.spacing(3)}px;
        overflow-x: "auto";
    }
`);
const StyledTable = styled(Table)`
    && {
        min-width: 650;
    }
`;
function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
}
const rows1 = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class TeamComponentProps {
    teamStore?: TeamStore
}

@inject("teamStore")
@observer
export class TeamComponent extends React.Component<TeamComponentProps> {
    componentDidMount() {
        this.props.teamStore.initStore();
    }
    render() {
        return (
            <React.Fragment>
                <SettingsComponent />
                <StyledPaper>
                    <StyledTable>
                        <TableHead>
                            <TableRow>
                                {
                                    this.props.teamStore.playerAttributes.map((pa) =>
                                        (<TableCell key={pa}>{pa}</TableCell>))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.teamStore.players.map(pl => (
                                <TableRow key={pl.id}>
                                    {this.props.teamStore.playerAttributes.map((pa) =>
                                        (<TableCell key={pl[pa]}>{pl[pa]}</TableCell>))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </StyledTable>
                </StyledPaper>
            </React.Fragment>
        );
    }
}
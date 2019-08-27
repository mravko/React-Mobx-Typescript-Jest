import * as React from 'react'
import { Paper, Table, TableHead, TableCell, TableBody, TableRow } from '@material-ui/core'
import styled from "styled-components"
import { withTheme } from "@material-ui/styles"

const StyledPaper = withTheme(styled(Paper)`
    && {
        width: "100%";
        marginTop: ${(props) => props.theme.spacing(3)}px;
        overflowX: "auto";
    }
`);
const StyledTable = styled(Table)`
    && {
        minWidth: 650;
    }
`;

export class TeamComponent extends React.Component {
    render() {
        return (
            <StyledPaper>
                <StyledTable>
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                    </TableBody>
                </StyledTable>
            </StyledPaper>
        );
    }
}
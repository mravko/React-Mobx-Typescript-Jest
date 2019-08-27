import * as React from "react"
import { Link } from "react-router-dom";
import styled from "styled-components";
import { withTheme } from "@material-ui/styles"

const StyledSimpleLinkComponent = withTheme(styled(Link)`
    && {
        color: ${(props) => props.theme.palette.primary.main };
        text-decoration: none;
    }
`);

class SimpleLinkComponentProps {
    to: string = "";
    linkClicked: React.MouseEventHandler<HTMLAnchorElement>;
}
export class SimpleLinkComponent extends React.Component<SimpleLinkComponentProps> {
    render() {
        return (
            <StyledSimpleLinkComponent to={this.props.to} onClick={this.props.linkClicked}>
                {this.props.children}
            </StyledSimpleLinkComponent>);
    }
}
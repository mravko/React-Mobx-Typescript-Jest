import * as React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { UserInfo } from "./login-user-info";

const MenuWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

const MenuItem = styled.div`
	padding: 0 5px;
	text-decoration: none;
`;

export class MenuComponent extends React.Component {
	render() {
		return (
			<MenuWrapper>
				<MenuItem>
					<Link to="/">Home</Link>
				</MenuItem>
				<MenuItem>
					<Link to="/registry">Registry</Link>
				</MenuItem>
				<MenuItem>
					<Link to="/loan">Loan</Link>
				</MenuItem>
				<UserInfo></UserInfo>
			</MenuWrapper>);
	}
}
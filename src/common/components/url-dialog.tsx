import * as React from "react";
import { Route } from 'react-router-dom';

export interface IUrlDialogComponentProps {
	match: any,
	route: string,
	component: React.ComponentClass<any, any>,
	title: string
}

export class UrlDialogComponent extends React.Component<IUrlDialogComponentProps>
{
	render() {
		const Component = this.props.component;
		return (
			<Route path={`${this.props.match.url}/` + this.props.route} render={props => <Component {...props} />} {...this.props}>
			</Route>
		);
	}
}
import * as React from "react";
import { observer, inject } from "mobx-react"
import { UserStore } from "../stores/user-store";

interface IUserInfoProps {
	userStore?: UserStore
}

@inject("userStore")
@observer
export class UserInfo extends React.Component<IUserInfoProps> {
	store: UserStore;

	constructor(props: IUserInfoProps) {
		super(props);

		this.store = this.props.userStore;
	}

	render() {
		return (
			<div>
				{this.store.isLoggedIn ?
					<LoginUserInfo userStore={this.store} /> : <LogOutUserInfo userStore={this.store} />}
			</div>
		);
	}
}

export class LoginUserInfo extends React.Component<IUserInfoProps> {
	store: UserStore;

	constructor(props: IUserInfoProps) {
		super(props);

		this.store = this.props.userStore;
	}

	render() {
		return (<React.Fragment>
			<div>
				Hello {this.store.loggedUserInfo.name}, you logged in on {this.store.loggedUserInfo.loginDate.toLocaleDateString()}
			</div>
			<div>
				<button onClick={() => { this.store.logout() }}>Logout</button>
			</div>
		</React.Fragment>

		);
	}
}

export class LogOutUserInfo extends React.Component<IUserInfoProps> {
	store: UserStore;
	usernameRef: HTMLInputElement
	passwordRef: HTMLInputElement

	constructor(props: IUserInfoProps) {
		super(props);

		this.store = this.props.userStore;
	}

	render() {
		return (
			<form onSubmit={(e) => {
				e.preventDefault();
				this.store.login(this.usernameRef.value, this.passwordRef.validationMessage);
			}}>
				You are not logged in!;
				<input required ref={(r) => this.usernameRef = r} type="text"></input>
				<input required ref={(r) => this.passwordRef = r} type="password"></input>

				<button type="submit">Log in</button>
			</form>
		);
	}
}
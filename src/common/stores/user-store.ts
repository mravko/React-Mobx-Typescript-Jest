import { computed, action, observable } from "mobx";

export class UserStore {
	@computed
	get isLoggedIn() {
		return this.loggedUserInfo != undefined;
	}

	@action
	login(name: string, password: string) {
		this.loggedUserInfo = new LoggedUserInfo(1, name, new Date());
	}

	@action
	logout() {
		this.loggedUserInfo = undefined;
	}

	@observable
	loggedUserInfo: LoggedUserInfo
}

class LoggedUserInfo {
	constructor(id: number, name: string, loginDate: Date) {
		this.id = id;
		this.name = name;
		this.loginDate = loginDate;
	}
	id: number;
	name: string;
	loginDate: Date;
}
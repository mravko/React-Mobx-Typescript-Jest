import { observable, action, computed, runInAction } from 'mobx';
import { BaseStore } from "../../../common/stores/base-store"

export class RegistryStore extends BaseStore {
	constructor() {
		super();

		runInAction(() => {
			this.data = [];
		});
	}
	@observable name: string;

	@action
	changeName(newName: string) {
		this.name = newName;
	}

	@action
	async loadData() {
		this.data = [{ id: "marko" }, { id: "nikola" }];
	}

	@computed
	get hasData() {
		return this.data.length > 0;
	}

	@observable.ref
	data: any[];
}
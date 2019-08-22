import { observable, action } from 'mobx';
import { BaseStore } from "../../common/stores/base-store"

export class RegistryStore extends BaseStore {
	@observable name: string;

	@action
	changeName(newName: string) {
		this.name = newName;
	}
}
import { BaseStore } from "../../../common/stores/base-store";
import { observable, action, computed, runInAction } from "mobx";
import axios from "axios";

export class TeamStore extends BaseStore {
	constructor() {
		super();

		runInAction(() => {
			this.players = [];
			this.weights = [];
		});
	}

	@observable
	weights: WeightPart[];

	@observable
	players: any[];

	@action
	getTeam() {
		axios.get("http://localhost:5000/api")
		.then((response) => {
			runInAction(() => {
				this.setTeam(response.data);
			});
		  })
		  .catch((error) => {
			// handle error
			console.log(error);
		  })
	}

	@action
	setTeam(team: []){
		this.players.splice(0, this.players.length);

		team.forEach(player => {
			this.players.push(player);
		});
	}

	@action
	initWeights() {
		this.weights.push(new WeightPart("Total Points", 0));
		this.weights.push(new WeightPart("Selected", 0));
		this.weights.push(new WeightPart("Used", 1));
	}

	initStore() {
		this.initWeights();
		this.getTeam();
	}

	@computed
	get playerAttributes() {
		if (this.players.length == 0)
			return [];

		return Object.keys(this.players[0]);
	}
}

export class WeightPart 
{
	constructor(name: string, value: number) {
		this.name = name;
		this.value = value;
	}
	value: number;
	name: string;
}
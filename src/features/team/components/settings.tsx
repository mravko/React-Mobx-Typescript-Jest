import * as React from "react";
import { TeamStore } from '../stores/store';
import { WeightedDistComponent } from "./weighted-dist";
import { observer, inject } from 'mobx-react';
import styled from "styled-components";

const SettingsComponentWrapper = styled.div`
	width: 300px;
	margin: 0 auto;
	margin-top: 10px;
`;

class SettingsProps {
	teamStore?: TeamStore
}
@inject("teamStore")
@observer
export class SettingsComponent extends React.Component<SettingsProps> {
	render() {
		return (
			<SettingsComponentWrapper>
				{this.props.teamStore.weights.map((w) => (
					<WeightedDistComponent key={w.name} defaultValue={w.value} name={w.name} />
				))}
			</SettingsComponentWrapper>);
	}

}
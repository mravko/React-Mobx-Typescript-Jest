import * as React from "react";
import { Typography, Slider } from "@material-ui/core"

class WeightedDistProps {
	defaultValue: number;
	name: string;
}
export class WeightedDistComponent extends React.Component<WeightedDistProps> {
	render() {
		return (
			<React.Fragment>
				<Typography id="discrete-slider" gutterBottom>
					{this.props.name}
      			</Typography>
				<Slider
					defaultValue={this.props.defaultValue}
					aria-labelledby="discrete-slider"
					valueLabelDisplay="auto"
					marks
					step={1}
					min={0}
					max={10}
				/>
			</React.Fragment>);
	}

}
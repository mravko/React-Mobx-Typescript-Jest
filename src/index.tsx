import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component {
    num: number;
    render() {
        this.num = 5;
        return <div>hello from app {this.num} </div>;
    }
}

ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById("root")
);


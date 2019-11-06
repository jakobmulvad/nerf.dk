import React from "react";
import { render } from "react-dom";

const App : React.FC = () => {
	return <div className="App-header">
		<span className="App-logo">nerf</span>
	</div>
}

render(<App/>, document.getElementById('root'));
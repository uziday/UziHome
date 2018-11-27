import React    from "react";
import template from "./team.jsx";

class team extends React.Component {
	state = {
		animation: false,
	};
	render() {
		this.onScrollChange();
		return template.call(this);
	}
	onScrollChange=()=>{
		
	}
}

export default team;

import React    from "react";
import template from "./navbar.jsx";

class navbar extends React.Component {
	state = {
		isActive: false
	}
	toggle=()=>{
		this.setState({ isActive: !this.state.isActive });
	}
	render() {
		return template.call(this);
	}
}

export default navbar;

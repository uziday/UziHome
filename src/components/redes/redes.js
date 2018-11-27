import React    from "react";
import template from "./redes.jsx";

class redes extends React.Component {
	state={
		active: true,
		closedClass:'animated fadeOutDown'
	}
	render() {
		return template.call(this);
	}

	close=()=>{
		this.setState({active: false});
		setTimeout(()=>{
			this.props.close();
			this.setState({active: true});
		},500);
	}
}

export default redes;

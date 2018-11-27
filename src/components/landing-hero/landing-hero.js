import React    from "react";
import template from "./landing-hero.jsx";

class landinghero extends React.Component {
	state = {
		animationClass: ''
	}
	render() {
		setTimeout(()=>this.addAnimation(), 1000);
		return template.call(this);
	}
	addAnimation= ()=>{
		this.setState({
			animationClass: 'zoomIt'
		});
	}
}

export default landinghero;

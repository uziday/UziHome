import React    from "react";
import template from "./home.jsx";
class home extends React.Component {
	state = {
		app: {
			animation: false
		},
		team: {
			animation: false,
		},
		navbar:{
			title: 'UziDay',
		},
		socialNetworks:{
			isActive: false,
		},
		actualDiv: '/#'
	}
	render() {
		this.onSocialNetworksHandle();
		this.onScrollChange();
		return template.call(this);
	}

	openNetworks=()=>{
		var actualDiv = `/${window.location.hash}`;
		this.setState({
			actualDiv,
			socialNetworks:{
				isActive: true,
			}
		});
		window.location.replace('/#sn');
	}
	closeNetworks=()=>{
		let solvedUrl = new Promise((resolve,reject)=>{
			resolve(window.location.replace('/#i'));
		});
		solvedUrl.then(()=>{
			this.setState({
				socialNetworks:{
					isActive: false,
				}
			});
		});
	}
	onSocialNetworksHandle=()=>{
		setTimeout(()=>{
			if(window.location.hash === '#sn'){
				this.setState({socialNetworks:{isActive: true}});
			}
		},50);
	}
	onScrollChange=()=>{
		window.onpopstate = ()=>{
			let section = window.location.hash;
			section = section.split('#').join('');
			if(section.length>2){
				this.setState({team:{animation: false},app:{animation: false}});
				let state = {
					...this.state,
				};
				state[section].animation = true;
				setTimeout(()=>this.setState({state}),50);
			}
		}		
		window.onscroll = ()=>{
			// let $html = document.querySelector('html');
			// let $landing = document.getElementById('presentation');
			// let $app = document.getElementById('app');
			// if($html.scrollTop > ($landing.clientHeight-200) && $html.scrollTop <= ($landing.clientHeight + $app.clientHeight)){
			// 	this.setState({app:{animation: true}});
			// }
			// if($html.scrollTop > (($landing.clientHeight + $app.clientHeight)-200))
			// {
			// 	this.setState({team:{animation:true}});
			// }
		}
	}
}

export default home;

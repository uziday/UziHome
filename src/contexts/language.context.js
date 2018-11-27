import React from 'react';
import dictionary from '../data/dictionary.data';
const LanguageContext = React.createContext({language: 'spanish'});

class LanguageProvider extends React.Component{
	state = {
		language: 'spanish',
	};
	updateLanguage = value=>this.setState({language: value});
	setSpanish=()=>{
		this.updateLanguage('spanish');
		window.localStorage.setItem('language','spanish');
	}
	setEnglish=()=>{
		this.updateLanguage('english');
		window.localStorage.setItem('language','english');
	}
	render(){
		return (
			<LanguageContext.Provider value={{ language:dictionary[this.state.language],setSpanish: this.setSpanish,setEnglish: this.setEnglish }} >
				{ this.props.children }
			</LanguageContext.Provider>
		);
	}
	componentDidMount(){
		console.log(window.localStorage.getItem('language'));
		window.localStorage.getItem('language') ? this.setState({language: window.localStorage.getItem('language')}) : this.setState({language: 'english'});
	}
}
export const LanguageContextConsumer = LanguageContext.Consumer;
export {LanguageProvider};
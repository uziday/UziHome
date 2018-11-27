import React, { Component } from 'react';
import './App.scss';
import {LanguageProvider} from './contexts/language.context';
import Home from './views/home/';

class App extends Component {
	render() {
		return (
			<LanguageProvider>
				<Home/>
			</LanguageProvider>
		);
	}
}

export default App;

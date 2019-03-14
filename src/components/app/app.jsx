import "./app.scss";
import React from "react";
// import NavbarShape from '../navbar-shape/';
import {LanguageContextConsumer} from '../../contexts/language.context';
function template() {
  return (
    <LanguageContextConsumer>
        {({language})=>(
            <section className="hero app-hero is-light" id="app">
            	<div className="uz-hero-body">
                <div className="hero-left">
                  <img src={require('../../assets/images/muchacho.svg')} alt="UziPeople" className="uzguy"/>
                </div>
                <div className="hero-right">
                  <div className="methodtlt">
                    <img src={require('../../assets/images/reloj.svg')} alt="UziClock" className="uzclock"/>
                    <h1><b>{language.app[0]}</b></h1>
                  </div>
                  <div className="pasos">
                    <ul>
                      <li>{language.app[1]}</li>
                      <li>{language.app[2]}</li>
                    </ul>
                    <ul>
                      <li>{language.app[3]}</li>
                      <li>{language.app[4]}</li>
                    </ul>
                  </div>
                </div>
            	</div>
          </section>)}
    </LanguageContextConsumer>
  );
};

export default template;

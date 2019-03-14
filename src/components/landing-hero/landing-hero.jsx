import "./landing-hero.scss";
import React from "react";
import NavbarShape from '../navbar-shape/';
import {LanguageContextConsumer} from '../../contexts/language.context';
function template() {
  return (
    <LanguageContextConsumer>
      {({language})=>(
        <div className="landing-section">
          <NavbarShape></NavbarShape>
          <div className="uzmain">
            <div className="uzleft"> 
              <div className="uztitle">
                <h1><b className="uzbold">{language.presentation[0]}</b> <br/>{language.presentation[1]}</h1>
              </div>
              <div className="uzdesc">
                <p><span className="uzbrandshort">{language.presentation[2]}</span>{language.presentation[3]}</p>
              </div>
              <button disabled="disabled" className="appbutton">{language.presentation[4]}</button>
              <h4 className="uzaprovecha">{language.presentation[5]}</h4>
            </div>
            <div className="uzright">
              <div className="uzcircle">
                <div className="circlecontent">
                  <h2>{language.presentation[6]}</h2>
                  <p>{language.presentation[7]}</p>
                  <h3>Adolfo, Bogotá.</h3>
                </div>
              </div>
            </div>
          </div>
          <img src={require('../../assets/images/chica.svg')} alt="UziGirl" className="uzigirl"/>
        </div>)}
    </LanguageContextConsumer>
  );
};

export default template;

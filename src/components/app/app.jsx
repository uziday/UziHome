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
                    <h1>El método <b>UziDay</b></h1>
                  </div>
                  <div className="pasos">
                    <ul>
                      <li>Selecciona tu tarea, su inicio y final</li>
                      <li>Consiguelo lo mas rapido posible</li>
                    </ul>
                    <ul>
                      <li>El tiempo restante se convierte en UziScore</li>
                      <li>Sube de nivel con tu UziScore</li>
                    </ul>
                  </div>
                </div>
            	</div>
          </section>)}
    </LanguageContextConsumer>
  );
};

export default template;

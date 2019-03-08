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
                  <h1>El método <b>UziDay</b></h1>
                    <div className="pasos">
                      <div className="uzfrst">
                        <div className="children">
                          <p>Selecciona tu tarea, su inicio y final</p>
                        </div>
                        <div className="children">
                          <p>Consiguelo lo mas rapido posible</p>
                        </div>
                      </div>
                      <div className="uzscnd">
                        <div className="children">
                          <p>El tiempo restante se convierte en UziScore</p>
                        </div>
                        <div className="children">
                          <p>Sube de nivel con tu UziScore</p>
                        </div>
                      </div>
                  </div>
                </div>
            	</div>
          </section>)}
    </LanguageContextConsumer>
  );
};

export default template;

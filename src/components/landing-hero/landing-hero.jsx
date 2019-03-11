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
                <h1><b className="uzbold">Transformaremos la manera</b> <br/> en que manejas tu día</h1>
              </div>
              <div className="uzdesc">
                <p><span className="uzbrandshort">UziDay</span> es la app que llevará tu productividad
                  al siguiente nivel. Fácilmente y a tu ritmo</p>
              </div>
              <button disabled="disabled" className="appbutton">IR A LA APP</button>
              <h4 className="uzaprovecha">Aprovecha al máximo tu tiempo</h4>
            </div>
            <div className="uzright">
              <div className="uzcircle">
                <div className="circlecontent">
                  <h2>Uzers opinan</h2>
                  <p>UziDay es un reto para mí,
                    eso me motiva y me ha ayudado
                    a administrar mi tiempo</p>
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

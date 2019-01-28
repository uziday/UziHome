import "./landing-hero.scss";
import React from "react";
import NavbarShape from '../navbar-shape/';
import cloud from '../../assets/images/nubesita.png';
import {LanguageContextConsumer} from '../../contexts/language.context';
function template() {
  return (
    <LanguageContextConsumer>
      {({language})=>(
        <div className="landing-section">
          <NavbarShape></NavbarShape>
          <div className="hero-uziday-page landing-hero hero is-fullheight" id="presentation">
            <div className="hero-body">
              <div className="images is-hidden-touch">
                <div className="nube nube1 animated fadeInLeft slower ">
                  <img alt="[CLOUD]" src={cloud}/>
                </div>
                <div className="nube nube2 animated fadeInLeft slower animation-delay-200">
                  <img alt="[CLOUD]" src={cloud}/>
                </div>
                <div className="nube nube3 animated fadeInRight slower">
                  <img alt="[CLOUD]" src={cloud}/>
                </div>
                <div className="nube nube4 animated fadeInRight slower animation-delay-200">
                  <img alt="[CLOUD]" src={cloud}/>
                </div>
              </div>
            	<div className="container has-text-centered">
                <div className="animated pulse">
                  <img alt="[UZIDAY LOGO]" className="brandLogo" src={require('../../assets/images/uziday.logo.png')} width={500}/>
                  <br/>&nbsp;<br/>
              		<p className={"title is-2 has-text-weight-light"}>
              			{language.presentation[0]}
              		</p>
                  <p className="subtitle is-5">
                    {language.presentation[1]}
                  </p>
                  <a href="https://mailchi.mp/d3bc4cb8c456/uziday-notifications"  rel="noopener noreferrer" target="_blank" className="button i-want-subscribe is-medium">
                    {language.presentation[2]}
                  </a>
                </div>
            	</div>
            </div>
          </div>
        </div>)}
    </LanguageContextConsumer>
  );
};

export default template;

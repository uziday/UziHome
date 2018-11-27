import "./app.scss";
import React from "react";
import NavbarShape from '../navbar-shape/';
import {LanguageContextConsumer} from '../../contexts/language.context';
function template() {
  return (
    <LanguageContextConsumer>
        {({language})=>(
            <section className="hero app-hero is-fullheight is-light" id="app">
              <div className="hero-head">
                <NavbarShape></NavbarShape>
              </div>
            	<div className="hero-body">
            		<div className="container">
                  <p className="title is-2 has-text-weight-light has-text-centered">
                    {language.app[0]}
                  </p>
                  <br/>
                  <div className="columns is-multiline">
                    <div className={"column is-6 "+(this.props.animation ? 'animated fadeInLeft': 'is-hidden-uziday-version')}>
                      <div className="box has-text-centered">
                        <p className="title is-4 has-text-weight-light has-text-dark">
                          {language.app[1]}
                        </p>
                        <p className="subtitle has-text-grey">
                          7:00 - 7:30
                        </p>
                        <img src={require('../../assets/images/play.svg')} alt="[PLAY]" className="is-uzi-emoticon"/>  
                      </div>
                    </div>
                    <div className={"column is-6 "+(this.props.animation ? 'animated fadeInRight' : 'is-hidden-uziday-version')}>
                      <div className="box has-text-centered">
                        <p className="title is-4 has-text-weight-light has-text-dark">
                          {language.app[2]}
                        </p>
                        <p className="subtitle has-text-grey">
                          7:00 - 7:15 - 7:30
                        </p>
                        <img src={require('../../assets/images/power.svg')} className="is-uzi-emoticon" alt="[THUNDER]"/>
                      </div>
                    </div>
                    <div className={"column is-6 animation-delay-200 "+(this.props.animation ? 'animated fadeInLeft': 'is-hidden-uziday-version')}>
                      <div className="box has-text-centered">
                        <p className="title is-4 has-text-weight-light has-text-dark">
                          {language.app[3]}
                        </p>
                        <br/>
                        <img className="is-uzi-emoticon" src={require('../../assets/images/arrow-down.svg')} alt="[LEVEL DOWN]"/>
                        <span>&nbsp;</span>
                        <img className="is-uzi-emoticon" src={require('../../assets/images/arrow-up.svg')} alt="[LEVEL UP]"/>                  
                      </div>
                    </div>
                    <div className={"column is-6 animation-delay-200 "+(this.props.animation ? 'animated fadeInRight': 'is-hidden-uziday-version')}>
                      <div className="box has-text-centered">
                        <p className="title is-4 has-text-weight-light has-text-dark">
                          {language.app[4]}
                        </p>
                        <br/>
                        <img className="is-uzi-emoticon" src={require('../../assets/images/smile.svg')} alt="[SCORE]"/> &nbsp;
                        <img className="is-uzi-emoticon" src={require('../../assets/images/cool.svg')} alt="[SCORE]"/>
                      </div>
                    </div>

                  </div>
            		</div>
            	</div>
            	<div className="hero-foot">
            		
            	</div>
          </section>)}
    </LanguageContextConsumer>
  );
};

export default template;

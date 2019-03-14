/* eslint-disable */
import "./redes.scss";
import React from "react";
import {LanguageContextConsumer} from '../../contexts/language.context';
function template() {
  return (
    <LanguageContextConsumer>
      {({language})=>(
        <div className={"redes "+ (this.props.active ? 'is-active' : 'is-hidden')} id="sn">
        	<div className={"bg-close " + (!this.state.active ? 'animated fadeOut': 'animated fadeIn')}  onClick={this.close}></div>
          	<div className={"uzi-modal "+(this.state.active ? 'animated fadeInUp' : this.state.closedClass)}>
          		<div className="uzi-modal-head">
          			<p className="uzi-modal-title">
          				UziTeam | {language.redes[0]}
          			</p>
          			<span onClick={this.close} aria-label="close" className="delete close-modal"></span>
          		</div>
              <div className="uzi-modal-content">
                <br/>&nbsp;
                <br/>
                <p className="title is-2 has-text-grey-darken has-text-weight-light">
                  {language.redes[1]} 
                </p>
                <br/>
                <div className="contenido">
                  <a href="https://twitter.com/uzi_day" className="twitter fab fa-twitter social-network-icon" target="_blank"></a>
                  <a href="https://instagram.com/uzi_day" className="instagram fab fa-instagram social-network-icon" target="_blank"></a>
                </div>
              </div>
          	</div>
        </div>
      )}
    </LanguageContextConsumer>
  );
};

export default template;

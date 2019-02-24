
import "./team.scss";
import React from "react";
import {LanguageContextConsumer} from '../../contexts/language.context';
function template() {
  return (
    <LanguageContextConsumer>
      {({language})=>(
        <div id="team">
          <section className="team hero-team hero hero-uziday-page is-fullheight">
            <div className="hero-body">
            	<div className="container has-text-centered">
                <p className="title is-2 has-text-weight-light team-title">
                  {language.team[0]}
                </p>
                <div className="founders">
                  <div className="founder sam">
                    <img alt="[Founder Samuel García]" className="avatar-img" src={require('../../assets/images/founder.sam.png')}/>
                    <a className="nameteam" href="https://twitter.com/mrzamii" target="_blank">Sam Garcia</a>
                    <h3>CEO</h3>
                  </div>
                  <div className="founder lauta">
                    <img alt="[Founder Samuel García]" className="avatar-img" src={require('../../assets/images/founder.lauti.png')}/>
                    <a className="nameteam" href="https://twitter.com/lautaumpierrez" target="_blank">Lautaro Umpierrez</a>
                    <h3>CTO</h3>
                  </div>
                  <div className="founder tania">
                    <img alt="[Founder Samuel García]" className="avatar-img" src={require('../../assets/images/team.tania.jpg')}/>
                    <a className="nameteam" href="https://www.instagram.com/tania__rr/" target="_blank">Tania Ramirez</a>
                    <h3>Lead Design</h3>
                  </div>
                </div>
            	</div>
            </div>
          </section>
        </div>)}
      </LanguageContextConsumer>
  );
};

export default template;

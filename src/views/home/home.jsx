import "./home.scss";
import React from "react";
import Navbar from '../../components/navbar/';
import Landinghero from '../../components/landing-hero/';
import Apphero from '../../components/app/';
import Teamhero from '../../components/team/';
import Modalsocialnetworks from '../../components/redes/';
import {LanguageContextConsumer} from '../../contexts/language.context';
function template() {
  return (
    <LanguageContextConsumer>
        {({language})=>(
        <div className="home">
        	<Navbar openNetworks={this.openNetworks} title={this.state.navbar.title} items={language.navbarItems}></Navbar>
        	<Landinghero></Landinghero>
        	<Modalsocialnetworks close={this.closeNetworks} active={this.state.socialNetworks.isActive}></Modalsocialnetworks>
        	<Apphero animation={this.state.app.animation}></Apphero>
        	<Teamhero animation={this.state.team.animation}></Teamhero>
        </div>)}
    </LanguageContextConsumer>
  );
};

export default template;

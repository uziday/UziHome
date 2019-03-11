import "./navbar.scss";
import React from "react";
import {LanguageContextConsumer} from '../../contexts/language.context';
function template() {
    let { items,title } = this.props;
    return (
        <LanguageContextConsumer>
            {({language,setEnglish,setSpanish})=>(<div className="navbar-component">
                <nav className="navbar is-fixed-top">
                	<div className="navbar-brand">
                		<div className="navbar-item">
                            <div className="uzbrand">
                			    <a href="/#" className="title is-3 has-text-weight-bold logo-in-text">                				{ title }
                			    </a>
                            </div>
                		</div>
                        <div role="button" onClick={this.toggle} className={"navbar-burger "+ (this.state.isActive ? 'is-active': '')} aria-label="menu" aria-expanded="false">
                          <span aria-hidden="true"></span>
                          <span aria-hidden="true"></span>
                          <span aria-hidden="true"></span>
                        </div>
                	</div>
                	<div className={"navbar-menu "+(this.state.isActive ? 'is-active' : '')}>
                		<div className="navbar-start"></div>
                		<div className="navbar-end">
                			{items.map((item,index)=>(
                                <a className="navbar-item navbar-component-items options" href={item.url} key={index}>
                    				{item.text}
                    			</a>
                            ))}
                            <div onClick={this.props.openNetworks} className="navbar-item">
                                {language.networks}
                            </div>
                           <div className="navbar-item has-text-centered">
                                <span>
                                    <div className="buttons has-addons switch-uziday">
                                        <span onClick={setSpanish} className={"button "+(language.lang ==='es' ? ' is-active is-uziday-primary': '')}>ES</span>
                                        <span onClick={setEnglish} className={"button "+(language.lang === 'en' ? ' is-active is-uziday-primary': '')}>EN</span>
                                    </div>
                                </span>
                            </div>
                		</div>
                	</div>
                </nav>
            </div>)}
        </LanguageContextConsumer>
    );
};

export default template;

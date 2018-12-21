
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
                <br/>&nbsp;<br/>
                <p className="title is-2 has-text-weight-light">
                  {language.team[0]}
                </p>
                <br/>
                <div className="columns is-multiline is-hidden-touch">
                  <div className={"column is-12 "+(this.props.animation ? 'animated fadeInDown' : 'is-hidden-uziday-version')} >
                    <article className="media founder">
                      <figure className="media-left">
                        <p className="image is-128x128">
                          <img alt="[Founder Samuel García]" className="avatar-img" src={require('../../assets/images/founder.sam.png')}/>
                        </p>
                      </figure>
                      <div className="media-content">
                        <div className="content">
                          &nbsp;
                          <p>
                            <span className="name">
                              <strong>Samuel García</strong> <small>@mrzamii</small>
                            </span>
                            <br/>
                            <span className="description">
                              {language.team[1]}
                                &nbsp;
                              <a href="https://twitter.com/mrzamii"  rel="noopener noreferrer" target="_blank">@mrzamii</a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className={"column is-12 "+(this.props.animation ? 'animated fadeInUp':'is-hidden-uziday-version')}>
                    <article className="media founder">
                      <div className="media-content">
                        <div className="content">
                          &nbsp;
                          <p>
                            <span className="name">
                              <strong>Lautaro Umpierrez</strong> <small>@lautaumpierrez</small>
                            </span>
                            <br/>
                            <span className="description">
                              {language.team[2]}&nbsp;
                              <a href="https://twitter.com/lautaumpierrez"  rel="noopener noreferrer" target="_blank">
                                @lautaumpierrez  
                              </a>
                            </span>

                          </p>
                        </div>
                      </div>
                      <figure className="media-right">
                        <p className="image is-128x128">
                          <img className="avatar-img" alt="[Founder Lautaro Umpierrez]" src={require('../../assets/images/founder.lauti.png')}/>
                        </p>
                      </figure>
                    </article>
                  </div>
                </div>
                {/* Founders Mobile */}

                <div className="columns is-multiline is-hidden-desktop">
                  <div className="column is-12">
                    <div className="card">
                      <div className="card-image">
                        <figure className="image is-3by2">
                          <img alt="[SAMI]" src={require('../../assets/images/founder.sam.png')}/>
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="media">
                          <div className="media-content">
                            <p className="title is-4">Samuel García</p>
                            <p className="subtitle is-6">@mrzamii</p>
                          </div>
                        </div>

                        <div className="content">
                          { language.team[1] }<a  rel="noopener noreferrer" target="_blank" href="https://twitter.com/mrzamii">@mrzamii</a>.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="column is-12">
                    <div className="card">
                      <div className="card-image">
                        <figure className="image is-4by3">
                          <img src={require('../../assets/images/founder.lauti.png')} alt="[LAUTI]"/>
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="media">
                          <div className="media-content">
                            <p className="title is-4">Lautaro Umpierrez</p>
                            <p className="subtitle is-6">@lautaumpierrez</p>
                          </div>
                        </div>
                        <div className="content">
                        {language.team[2]}<a  rel="noopener noreferrer" target="_blank" href="https://twitter.com/lautaumpierrez">@lautaumpierrez</a>.
                        </div>
                      </div>
                    </div>
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

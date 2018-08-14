import React, { Component } from 'react';
import HeaderSection from './header';
import Slider from './slider';
import YoutubeFrame from './youtube-frame';
import _T from '../locale';
import './landing.css';

let escapeHandler;
document.onkeydown = function(evt) {
    evt = evt || window.event;
    let isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (escapeHandler && isEscape) {
      escapeHandler();
    }
};

const locale = (navigator.language || navigator.userLanguage)
  .includes('ru') ? 'ru' : 'en';
const GameplayVideo = 'CPpAgsLGPMU';
const TreilerVideo = 'CxQZveRr308';

class Landing extends Component {
  state = {
    isVideoFrame: false,
    videoId: false,
    scrolled: false,
    locale: locale,
  };

  constructor(props) {
    super(props);
    escapeHandler = this.onFrameClick;
  }

  changeLocale = (loc) => {
    this.setState({locale: loc});
  };

  onVideoClick = (e) => {
    const videoId = e.target.id === 'gameplay' ? GameplayVideo : TreilerVideo;
    this.setState({
      isVideoFrame: true, videoId: videoId,
    });
    e.stopPropagation();
  };

  onFrameClick = () => {
    this.setState({isVideoFrame: false});
  };

  onScrollClick = (e) => {
    e.stopPropagation();
    this.setState({scrolled: e.target.value === 'second'});
  };

  onScrollAutoClick = (e) => {
    e.stopPropagation();
    this.setState({scrolled: !this.state.scrolled});
  };

  render() {
    const locale = this.state.locale;
    const textPargrh1 = _T('#About1', locale);
    const textPargrh2 = _T('#About2', locale);
    const textPargrh3 = _T('#About3', locale);
    const textPargrh4 = _T('#About4', locale);
    const textPargrh5 = _T('#About5', locale);
    const textWatch = _T('Watch video', locale);
    const textGameplay = _T('Watch gameplay', locale);
    const titleAboutTeam = _T('AboutTeam', locale);
    const textAboutTeam = _T('#AboutTeam', locale);

    return (
      <div>
        <Slider timeout="3000" slideCount="4" />
        <div className="box">
          <HeaderSection onClick={this.changeLocale} locale={locale}/>
          <div className="background-image splash-logo"
            onChange={this.onScrollAutoClick}></div>
          <div className="content-container">
            <div className="content-wrapper">
              <div className="buttons-wrapper">
                <button id="treiler" className="watch-button"
                  onClick={this.onVideoClick}>{textWatch}</button>
                <button id="gameplay" className="watch-button"
                  onClick={this.onVideoClick}>{textGameplay}</button>
              </div>
              <section className={"slide-section" + (this.state.scrolled ? " scrolled" : "")} onClick={this.onScrollAutoClick}>
                <div className="slider-container">
                  <div className="slider-wrapper">
                    <div className="body-section">
                      <p className="paragraph-text">{textPargrh1}</p>
                      <p className="paragraph-text">{textPargrh2}</p>
                      <p className="paragraph-text">{textPargrh3}</p>
                      <p className="paragraph-text">{textPargrh4}</p>
                      <p className="paragraph-text decoration">{textPargrh5}</p>
                    </div>
                  </div>
                  <div className="slider-wrapper">
                    <div className="body-section">
                      <p className="main-title">{titleAboutTeam}</p>
                      <p className="paragraph-text">{textAboutTeam}</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="bullets">
            <input type="radio" name="slide-trigger" value="first" id="first"
              checked={!this.state.scrolled} onChange={this.onScrollClick} />
            <label className="radio" htmlFor="first">
            <span className="outer">
              <span className="inner"></span>
            </span>
            </label>
            <input type="radio" name="slide-trigger" value="second" id="second"
              checked={this.state.scrolled} onChange={this.onScrollClick} />
            <label className="radio" htmlFor="second">
            <span className="outer">
              <span className="inner"></span>
            </span>
            </label>
          </div>
        </div>
        {this.state.isVideoFrame &&
          <div className="video-frame" onClick={this.onFrameClick}>
            <YoutubeFrame videoId={this.state.videoId}/></div>}
      </div>
    );
  }
}

export default Landing;

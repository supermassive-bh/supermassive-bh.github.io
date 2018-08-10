import React, { Component } from 'react';
import HeaderSection from './header';
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

const textPargrh1 = _T('#About1', locale);
const textPargrh2 = _T('#About2', locale);
const textPargrh3 = _T('#About3', locale);
const textPargrh4 = _T('#About4', locale);
const textPargrh5 = _T('#About5', locale);

const textWatch = _T('Watch video', locale);
const titleText = _T('Supermassive black hole', locale);

const titleText2 = _T('AboutTeam', locale);
const textAboutTeam = _T('#AboutTeam', locale);



class Landing extends Component {
  state = {
    isVideoFrame: false,
    scrolled: false
  };

  constructor(props) {
    super(props);
    escapeHandler = this.onFrameClick;
  }

  onVideoClick = (e) => {
    this.setState({isVideoFrame: true});
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
    return (
      <div>
        <div className="background-image"></div>
        <div className="box">
          <HeaderSection />
          <section className={"slide-section" + (this.state.scrolled ? " scrolled" : "")} onClick={this.onScrollAutoClick}>
            <div className="slider-container">
              <div className="slider-wrapper">
                <div className="body-section">
                  <h2 className="main-title">{titleText}</h2>
                  <p className="paragraph-text">{textPargrh1}</p>
                  <p className="paragraph-text">{textPargrh2}</p>
                  <p className="paragraph-text">{textPargrh3}</p>
                  <p className="paragraph-text">{textPargrh4}</p>
                  <p className="paragraph-text">{textPargrh5}</p>
                  <button className="watch-button" onClick={this.onVideoClick}>{textWatch}</button>
                </div>
              </div>
              <div className="slider-wrapper">
                <div className="body-section">
                  <h2 className="main-title">{titleText2}</h2>
                  <p className="paragraph-text">{textAboutTeam}</p>
                </div>
              </div>
            </div>
          </section>
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
            <YoutubeFrame /></div>}
      </div>
    );
  }
}

export default Landing;

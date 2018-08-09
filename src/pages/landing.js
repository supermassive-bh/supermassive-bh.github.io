import React, { Component } from 'react';
import HeaderSection from './header';
import YoutubeFrame from './youtube-frame';
import './landing.css';

let escapeHandler;
document.onkeydown = function(evt) {
    evt = evt || window.event;
    let isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key == "Escape" || evt.key == "Esc");
    } else {
        isEscape = (evt.keyCode == 27);
    }
    if (escapeHandler && isEscape) {
      escapeHandler();
    }
};

class Landing extends Component {
  state = {
    isVideoFrame: false
  };

  constructor(props) {
    super(props);
    escapeHandler = this.onFrameClick;
  }

  onVideoClick = () => {
    this.setState({isVideoFrame: true});
  };

  onFrameClick = () => {
    this.setState({isVideoFrame: false});
  };

  render() {
    return (
      <div>
        <div className="background-image"></div>
        <div className="box">
          <HeaderSection />
          <section>
            <div className="body-section">
              <h2 className="main-title">
                Super massive blackhole
              </h2>
              <p className="paragraph-text">
                VR tower defence what destroy your mind.
              </p>
              <button className="watch-button" onClick={this.onVideoClick}>WATCH VIDEO</button>
            </div>
          </section>
        </div>
        {this.state.isVideoFrame &&
          <div className="video-frame" onClick={this.onFrameClick}>
            <YoutubeFrame /></div>}
      </div>
    );
  }
}

export default Landing;

import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import './header.css';

class HeaderSection extends Component {
  render() {
    return (
      <section className="header-top">
        <div className="links-tab">
          <div className="retro-logo"></div>
          <span className="logo-text">Retro Bomb</span>
        </div>
        <div className="links-tab">
          <SocialIcon className="header-link" url="https://www.youtube.com/channel/UCSIq3xO5VfiZ8aqsmfBeEYw" />
          <a target="_blank" rel="noopener noreferrer"
            href="https://www.unrealengine.com/"
            className="ue4-logo header-link">
          </a>
        </div>
      </section>
    );
  }
}

export default HeaderSection;

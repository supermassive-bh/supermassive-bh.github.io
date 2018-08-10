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
          <SocialIcon className="header-link" url="https://www.youtube.com/channel/UCHeLSUsUm_i036m2cBDz-vg" />
          <a target="_blank" rel="noopener noreferrer"
            href="https://www.unrealengine.com/"
            className="ue4-logo header-lin">
          </a>
        </div>
      </section>
    );
  }
}

export default HeaderSection;

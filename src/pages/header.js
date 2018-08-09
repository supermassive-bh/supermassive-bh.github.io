import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import './header.css';

class HeaderSection extends Component {
  render() {
    return (
      <section className="header-top">
        <SocialIcon url="https://www.youtube.com/channel/UCHeLSUsUm_i036m2cBDz-vg" />
        <div className="links-tab">
          <SocialIcon url="https://www.youtube.com/channel/UCHeLSUsUm_i036m2cBDz-vg" />
          <a target="_blank" rel="noopener noreferrer"
            href="https://www.unrealengine.com/"
            className="ue4-logo">
          </a>
        </div>
      </section>
    );
  }
}

export default HeaderSection;

import React, { Component } from 'react';
import './header.css';

class HeaderSection extends Component {
  selectLocale = (e) => {
    e.preventDefault();
    if (!this.props.onClick) {
      return;
    }
    this.props.onClick(e.target.id);
  };

  render() {
    const isEn = this.props.locale === 'en';
    return (
      <section className="content-container header-top-container">
        <div className="content-wrapper header-top">
          <div className="links-tab links-tab-col">
            <div className="retro-logo"></div>
          </div>
          <div className="links-tab">
            <a href="#en" id="en" className={isEn ? "selected-link" : ""}
              onClick={this.selectLocale}>EN</a>/
            <a href="#ru" id="ru" className={!isEn ? "selected-link" : ""}
              onClick={this.selectLocale}>RU</a>
          </div>
        </div>
      </section>
    );
  }
}

export default HeaderSection;

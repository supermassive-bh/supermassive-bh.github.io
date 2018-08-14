import React from 'react';

class Slider extends React.Component {
  state = {
      slideNumber: 1,
      prevSlideNumber: 0,
      fadeOut: true,
  };

  componentDidMount() {
    setInterval(() => {
      this.nextSlide();
    }, this.props.timeout || 1000);
  }

  nextSlide = () => {
    let i = this.state.slideNumber + 1;
    i = (i >= this.props.slideCount) ? 0 : i;
    this.setState({prevSlideNumber: i - 1 < 0 ? this.props.slideCount - 1 : i - 1,
      slideNumber: i, fadeOut: false});
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.setState({fadeOut: true});
      });
    });
  };

  render() {
    return (
      <div className="background-image">
        <div className={"background-image slide-"
          + this.state.slideNumber}></div>
        <div className={"background-image slide-" + this.state.prevSlideNumber
          + (this.state.fadeOut ? " fade-out" : "")}></div>
      </div>
    );
  }
}

export default Slider;

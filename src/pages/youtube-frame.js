import React from 'react';
import YouTube from 'react-youtube';

class YoutubeFrame extends React.Component {
  render() {
    const opts = {
      height: window.innerHeight * 0.75,
      width: window.innerWidth * 0.75,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId="I7963HO70pA"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    //event.target.pauseVideo();
  }
}

export default YoutubeFrame;

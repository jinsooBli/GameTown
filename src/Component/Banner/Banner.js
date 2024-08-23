import React from 'react';
import ReactPlayer from 'react-player';
import './Banner.scss';

function Banner() {
  return (
      <div className="banner">
        <ReactPlayer style={{position: "relative"}}
                     url={process.env.PUBLIC_URL + '/videos/'}
                     width="2000px"
                     height="2100px"
                     playing={true}
                     muted={true}
                     loop={true}
                     controls={false}
        />
        <div className="bannerText">
          <div className="wrap">
            <span className="text">C</span>
            <span className="text">O</span>
            <span className="text">D</span>
            <span className="text">E</span>
            <span className="space"></span>
            <span className="text">M</span>
            <span className="text">A</span>
            <span className="text">K</span>
            <span className="text">E</span>
            <span className="text">R</span>
          </div>
        </div>
      </div>
  );
}

export default Banner;
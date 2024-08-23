import React from 'react';
import Slider from 'react-slick';
import './SliderSection.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
   };

  return (
      <div className="promotion-section">
        <h2>Result</h2>
        <Slider {...settings}>
          <a href="https://store.steampowered.com/app/2305840/Cat_Quest_III/">
          <div>
            <img src="https://images.g2a.com/1024x576/1x1x1/cat-quest-iii-pc-steam-key-global-i10000506084005/ed7a1379fe8a4da1ba1c865a" alt="Cat Quest III" />
          </div>
          </a>
          <a href="https://store.steampowered.com/app/1985960/Ogu_and_the_Secret_Forest/">
          <div>
            <img src="https://images.g2a.com/1024x576/1x1x1/ogu-and-the-secret-forest-pc-steam-key-global-i10000506904001/1e291c6380584fd581138433" alt="Ogu and the Secret Forest"/>
          </div>
          </a>
          <a href="https://store.steampowered.com/app/1363080/Manor_Lords/">
          <div>
            <img src="https://images.g2a.com/1024x576/1x1x1/manor-lords-pc-steam-key-global-i10000263219001/6a19a8e595244050a3e2cd9c" alt="Manor Lords"/>
          </div>
          </a>
        </Slider>
      </div>
  )
}

export default SliderSection;
import React, {useEffect, useState} from 'react';
import './Footer.css';
import CommunityMain from '../Community/CommunityMain';
import {Link} from 'react-router-dom';



function Footer() {


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 900) { // 스크롤Y 위치가 900px 이상일 때 nav바 표시
        setIsScrolled(true);
      }else {
        setIsScrolled(false);
      }

      if (scrollY > 2000) {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => { // 클린업
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (


      <div>
        <div className={`footer-container ${isScrolled ? 'show' : ''}`}>

          <Link to="/Community">커뮤니티 바로가기</Link>

        </div>
        <footer className="footer">
          <p>&copy; 2024 Fashion Town. All rights reserved.</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank"
               rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank"
               rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank"
               rel="noopener noreferrer">Instagram</a>
            <a href="https://store.steampowered.com/" target="_blank"
               rel="noopener noreferrer">Steam</a>
          </div>
        </footer>
      </div>


  );
}

export default Footer;
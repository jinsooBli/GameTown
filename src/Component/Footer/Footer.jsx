import React, {useEffect, useState} from 'react';
import './Footer.css';



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



        </div>
        <footer className="footer">
          <p>&copy; 2024 KOSMO. All rights reserved.</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank"
               rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank"
               rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank"
               rel="noopener noreferrer">Instagram</a>
          </div>
        </footer>
      </div>


  );
}

export default Footer;
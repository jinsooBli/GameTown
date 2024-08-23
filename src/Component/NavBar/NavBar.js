import React, {useEffect, useState} from 'react';
import './NavBar.scss' ;


function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 900) { // 스크롤Y 위치가 900px 이상일 때 nav바 표시
        setIsScrolled(true);
      }else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => { // 클린업
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
      <div className={`header ${isScrolled ? 'show' : ''}`}>
        <nav className="navbar">
          <div className="navbar-logo">
            <h3 className="navbar-text"><a href="#section1">CodeTown</a></h3>
          </div>
          <ul className="navbar-links">
            {/*<li><a href="#section1">Main</a></li>*/}
            <li><a href="#section2">Introduce</a></li>
            <li><a href="#section3">Result</a></li>
          </ul>
        </nav>
      </div>
  )
}

export default NavBar;
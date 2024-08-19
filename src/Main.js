import React, {useEffect, useRef} from 'react';
import './App.css'
import NavBar from './Component/NavBar/NavBar';
import Banner from './Component/Banner/Banner';
import IntroduceSection from './Component/IntroduceSection/IntroduceSection';
import Footer from './Component/Footer/Footer';
import SliderSection from './Component/SliderSection/SliderSection';

/*
  TODO: 시작시에는 가로 스크롤로 동작되다가 특정위치 도달시 상하 스크롤로 전환되게 하기
 */


function Main() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            } else {
              entry.target.classList.remove('show');
            }
          });
        },
        { threshold: 0.1 }
    );

    observer.observe(section1Ref.current);
    observer.observe(section2Ref.current);
    observer.observe(section3Ref.current);
  }, []);



  return (
      <>
        <div className="app">
            <header className="header">
                <NavBar/>
            </header>
            <section id="section1" className="section hide" ref={section1Ref}>
                <Banner/>
            </section>

            <section id="section2" className="section hide" ref={section2Ref}>
                <IntroduceSection/>
            </section>

            <section id="section3" className="section hide" ref={section3Ref}>
             <SliderSection/>
            </section>
            <Footer/>
        </div>
      </>
  );
}

export default Main;

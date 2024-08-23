import React, {useEffect, useState} from 'react';
import ItemList from './IntroduceList';
import {getItems} from '../fetch/api';
import IntroduceList from './IntroduceList';
import IntroduceListItem from './IntroduceListItem';

/*
  TODO: fetch로 api 데이터 받아와서 화면에 출력해보기
 */


function Introduce1() {




  const [movies, setMovies] = useState([])

  useEffect(()=> {
    fetch('http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=9b12fcd879e7e26417eebb8e666ee360', {
      method : "GET"
    }).then(res=>res.json()).then(res=>{
      console.log(1, res);
      setMovies(res);
    });
  }, []);





  return (

      <div>
        <h1>안녕하세요 상세페이지1 입니다.</h1>
        <h2>TEST1</h2>

      </div>
  );
}

export default Introduce1;
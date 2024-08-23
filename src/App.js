import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Main from './Main';
import Introduce1 from './Component/IntroduceSection/IntroduceInfo/Introduce1/Introduce1';
import Introduce2
  from './Component/IntroduceSection/IntroduceInfo/Introduce2/Introduce2';
import Introduce3
  from './Component/IntroduceSection/IntroduceInfo/Introduce3/Introduce3';

function App() {
  return (
      <Routes >
        <Route path="/" element={<Main/>} />
        <Route path="/Introduce1" element={<Introduce1 />}/>
        <Route path="/Introduce2" element={<Introduce2 />}/>
        <Route path="/Introduce3" element={<Introduce3 />}/>
      </Routes>
  )
}

export default App;
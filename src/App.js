import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Main from './Main';
import CommunityMain from './Component/Community/CommunityMain';

function App() {
  return (
      <Routes >
        <Route path="/" element={<Main/>} />
        <Route path="/Community" element={<CommunityMain/>}/>
      </Routes>
  )
}

export default App;
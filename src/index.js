import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import "./index.css"
import {BrowserRouter} from 'react-router-dom';


/* react-router-dom 을 사용하기 위해
내장되어 있는 BrowserRouter 컴포넌트를 사용하여 감싸준다.

BrowserRouter 는 방문한 url 기록들을 저장한다.
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);



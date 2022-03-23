import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//최상위 컴포넌트인 App을  Browser-Router로 감싼다
import { BrowserRouter } from "react-router-dom"

//이 부분이 public/index.html에 있는 div#root에 내가 만든 컴포넌트를 실제로 렌더링하도록 연결해주는 부분
ReactDOM.render(
  //무엇을
  <BrowserRouter>              
    <App />
  </BrowserRouter>,
  //어디에
  document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";

// 라우팅을 하려면 Route를 가져와야함
// BrowserRouter로 감싸주어야 하는데, BrowserRouter는 index.js에 있음
import { Route, Routes } from "react-router-dom";

// 각 페이지에 해당하는 컴포넌트를 import
import Main from "./Main";
import Review from "./Review";

function App() {


  return (
    <div className="App">
      {/* exact는 ?? 만약 경로 / 이면 Main만 보여주고 만약 /review 이거나 다른경로이면 무시..화면 겹치기 방지*/}
      <Route path="/" exact = {true} component={Main} />
      <Route path="/review/:weekDay" exact = {true} component={Review} />
    </div>
  );
}

export default App;

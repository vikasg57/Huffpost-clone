import { Routers } from './components/Routers/Routers';
import './App.css';
import React from 'react';
// import {Card} from "./components/Life/Card/Card"
import {Blog} from "./components/Life/Blog/Blog"
import { Life } from './components/Life/Life';
// import { Top } from './components/Life/Top/Top';

function App() {


  return (
    <div className='App'>


        {/* <Routers/> */}
         {/* <Card/> */}
        {/* <Top/> */}
        <Life/>
        {/* <Blog/>
        <Blog/>
        <Blog/>
        <Blog/> */}
    

    </div>
  );
}

export default App;

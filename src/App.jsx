import './App.css';
import React from 'react';
import  {Navbar}  from './components/navbar/Navbar';
import {Footer} from "./components/footer/Footer"
import{HiX} from "react-icons/hi"
import{motion} from"framer-motion"
import{Sidebar} from "./components/sidebar/Sidebar"

function App() {
   const [sidebar, setsidebar] = React.useState(false)

   const togglestate=()=>{
     setsidebar(!sidebar)
   }

  return (
    <div className="App"
    >

      <Sidebar sidebar={sidebar} togglestate={togglestate}/>
      <div className="App__child">
      <Navbar state={togglestate}/>       
      <Footer/>
      </div>


     
      
    </div>
  );
}

export default App;

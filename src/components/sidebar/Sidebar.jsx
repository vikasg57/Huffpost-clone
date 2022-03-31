import "./Sidebar.css"
import{HiX} from "react-icons/hi"
import{motion} from"framer-motion"


import React from 'react'

export const Sidebar = ({sidebar,togglestate}) => {
  return (

 <motion.div 
     

      className={sidebar?'navbar__sidebar sidebar__visible':'navbar__sidebar sidebar__hidden'}

       >
      <HiX className="sidebar__symbol" onClick={()=>(togglestate(false))}/>

      <div className="sidebar__child" >


      <div>
         <a href="">NEWS</a>

         <div>

         <a href="">U.S. NEWS</a>
         <a href="">Buisness</a>
         <a href="">Health</a>
         <a href="">Social Justice</a>
         <a href="">World News</a>
         <a href="">Environment</a>
         <a href="">Coronavirus</a>
         </div>

      </div>

        <div>
         <a href="">POLITICS</a>

         <div>

         <a href="">Joe Biden</a>
         <a href="">Extremism</a>
         <a href="">Congress</a>
       
         </div>

      </div>


<div>
         <a href="">OPINION</a>

     

      </div>


<div>
         <a href="">ENTERTAINMENT</a>

         <div>

         <a href="">Culture & Arts</a>
         <a href="">Media</a>
         <a href="">Celibrity</a>
         <a href="">TV & Film</a>
    
         </div>

      </div>

<div>
         <a href="">LIFE</a>

         <div>

         <a href="">Style & Beauty</a>
         <a href="">Parenting</a>
         <a href="">Travel</a>
         <a href="">Wellness</a>
         <a href="">Relationships</a>
         <a href="">Money</a>
         <a href="">Home & Living</a>
         <a href="">Work/Life</a>
         <a href="">Shopping</a>
         </div>

      </div>


      <div>
         <a href="">COMMUNITIES</a>

         <div>

         <a href="">Queer Voices</a>
           <a href="">Black Voices</a>
           <a href="">Asian Voices</a>
             <a href="">Latino Voices</a>
             <a href="">Women</a>
      
         </div>

      </div>

      <div>
         <a href="">SPECIAL PROJECTS</a>

         <div>

         <a href="">Highline</a>
      
         </div>

      </div>



     <div>
         <a href="">HUFFPOST PERSONAL</a>


      </div>
      <div>
         <a href="">VIDEO</a>

      

      </div>


      <div>
         <a href="">HOROSCOPES</a>

 

      </div>


      <div>
         <a href="">FROM OUR PARTNERS</a>

         <div>

         <a href="">New Money Mindset</a>
       
         </div>

      </div>
      <div>
         <a href="">NEWSLETTERS</a>


      </div>
      <div>
         <a href="">INTERNATIONAL</a>

         <div>

         <a href="">Australia</a>
         <a href="">Canada</a>
         <a href="">Brazil</a>
         <a href="">France</a>
         <a href="">India</a>
         <a href="">U.S.</a>
         <a href="">U.K.</a>
          <a href="">Korea</a>
          <a href="">Greece</a>
          <a href="">Italia</a>
      
         </div>

      </div>

      </div>
    
      </motion.div>
  )
}

import "./Sidebar.css"
import{HiX} from "react-icons/hi"
import{motion} from"framer-motion"


import React from 'react'

export const Sidebar = ({sidebar,togglestate}) => {
  return (

 <motion.div 
      className={sidebar?'navbar__sidebar sidebar__visible':'navbar__sidebar sidebar__hidden'}

       >
      <HiX onClick={()=>(togglestate(false))}/>vikas
      </motion.div>
  )
}

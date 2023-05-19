import React, { useState } from 'react'
import './Navbar.scss'
import { motion } from 'framer-motion'

function Navbar() {

  const [move, setMove] = useState(false)


  return (
    <>
    <motion.div 
      animate={{width: move ? ["5%", "100%", "50%"] : "5%"}}
      transition={{delay: 0.5, duration: 1.5}}
      className="iconbox">
        <motion.div 
        animate={{x: move ? "100%" : 0}}
        transition={{delay: 0.25}}
        className="icon" onClick={() => setMove(!move)}>
          <motion.div
            animate={{ y: move ? "0.7rem" : 0}}
            transition={{duration: 0.2}}
            className="icon-dash"
            ></motion.div>
          <motion.div className="icon-dash"></motion.div>
          <motion.div
            animate={{ y: move ? "-0.7rem" : 0}}
            transition={{duration: 0.2}}
            className="icon-dash"
            ></motion.div>
        </motion.div>
    </motion.div>
    <div className="nav-menu">
      <motion.div className="nav-items">
        <motion.h3 
        initial={{color: "white"}}
        whileHover={{
          color: ["rgba(255, 0, 0, 0)", "red"]
        }}
        className="nav-item">Home</motion.h3>
        <motion.h3 
        initial={{color: "white"}}
        whileHover={{
          color: ["rgba(255, 0, 0, 0)", "red"]
        }}
        className="nav-item">About</motion.h3>
        <motion.h3 
        initial={{color: "white"}}
        whileHover={{
          color: ["rgba(255, 0, 0, 0)", "red"]
        }}
        className="nav-item">Services</motion.h3>
        <motion.h3 
        initial={{color: "white"}}
        whileHover={{
          color: ["rgba(255, 0, 0, 0)", "red"]
        }}
        className="nav-item">Work</motion.h3>
        <motion.h3 
        initial={{color: "white"}}
        whileHover={{
          color: ["rgba(255, 0, 0, 0)", "red"]
        }}
        className="nav-item">Contact</motion.h3>
      </motion.div>
    </div>
  </>
)
}


export default Navbar
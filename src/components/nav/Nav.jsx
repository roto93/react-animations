import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()
  const navigateTo = (path) => () => {
    navigate(path)
  }
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      {showNav && <motion.div
        className="nav__backdrop"
      />}
      <motion.nav
        className="nav"
        initial={false}
        animate={{ x: showNav ? 0 : -120 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="nav__ul">
          <motion.li className="nav__li" onClick={navigateTo('/1')}>1</motion.li>
          <motion.li className="nav__li" onClick={navigateTo('/2')}>2</motion.li>
          <motion.li className="nav__li" onClick={navigateTo('/3')}>3</motion.li>
          <motion.li className="nav__li" onClick={navigateTo('/4')}>4</motion.li>
        </ul>
        <motion.div
          className="nav__button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1, opacity: 0.5 }}
          onClick={() => setShowNav(prev => !prev)}
        />
      </motion.nav>
    </>
  )
}

export default Nav
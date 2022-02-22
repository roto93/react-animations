import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '../../icons/MenuIcon'

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const NavOption = { showNav, setShowNav }
  return (
    <>
      <AnimatePresence>
        {
          showNav && <motion.div
            className="nav__backdrop"
            onClick={() => { setShowNav(false) }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        }
      </AnimatePresence>

      <motion.nav
        className={`nav ${showNav ? '' : 'hide'}`}
        initial={false}
        animate={{
          top: !showNav ? '5%' : '50%',
          right: !showNav ? '5%' : '50%',
          width: !showNav ? '50px' : '400px',
          height: !showNav ? '50px' : '400px'
        }}
        transition={{ type: 'spring', stiffness: 130, damping: 19, duration: 0.2 }}
        onClick={() => { setShowNav(true) }}>
        <ul className={`nav__ul ${showNav ? '' : 'hide'}`}>
          <NavButton NavOption={NavOption} pageIndex={'1'} />
          <NavButton NavOption={NavOption} pageIndex={'2'} />
          <NavButton NavOption={NavOption} pageIndex={'3'} />
          <NavButton NavOption={NavOption} pageIndex={'4'} />
        </ul>
        <motion.div
          initial={false}
          className={`nav__menuIcon ${showNav ? 'hide' : ''}`}
          animate={{ x: '-50%', y: '-50%' }}
          whileHover={{ rotate: 180 }}
        >
          <MenuIcon />
        </motion.div>
      </motion.nav>
    </>
  )
}

export default Nav

const NavButton = ({ NavOption, pageIndex }) => {

  const { setShowNav } = NavOption
  const navigate = useNavigate()
  const navigateTo = (path) => (e) => {
    e.stopPropagation()
    setShowNav(false)
    navigate(path)
  }
  const getText = () => {
    switch (pageIndex) {
      case '1':
        return 'Scroll Card'
      default: return pageIndex
    }
  }
  return (
    <motion.li
      className="nav__li"
      animate={{ x: 0 }}
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95, transition: { duration: 0 } }}
      onClick={navigateTo(`/${pageIndex}`)}
    >
      <h3>
        {getText(pageIndex)}
      </h3>
    </motion.li>
  )

}
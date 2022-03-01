import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import React, { useState } from 'react'
import '../css/switchCard.css'

const SwitchCard = () => {
  const [id, setId] = useState('0');
  const cardVariants = {
    hidden: { x: 0, opacity: 0, scale: 1.2, position: 'absolute' },
    visible: { x: 0, opacity: 1, scale: 1, transition: { delay: 0.2 } },
    exit: { x: Math.random() > 0.5 ? 50 : -50, opacity: 0 },
  }
  const renderCard = (item) => {

    if (item.id !== id) return
    return (
      <motion.div
        key={item.id}
        className="switchCard__card"
        variants={cardVariants}
        initial={'hidden'}
        animate={'visible'}
        exit={'exit'}
        transition={{ scale: 0.3 }}
      >
        <div className="switchCard__card__imgContainer" style={{ backgroundImage: `url(${item.url})` }}>
          {/* <img className="switchCard__card__img" alt={'pic of someone'} src={item.url}></img> */}
        </div>
        <div>
          <p className="switchCard__card__name">Hi, I'm {item.name}</p>
          <p className="switchCard__card__description">{item.description}</p>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="switchCard">
      <div className="switchCard__demo">
        <div className="container switchCard__container">
          <div className="switchCard__cardContainer">
            <AnimatePresence>
              {cardData.map(renderCard)}
            </AnimatePresence>
          </div>
          <motion.div
            className="switchCard__switchButton"
            onClick={() => setId(prev => prev === '4' ? '0' : (Number(prev) + 1).toString())}
            whileHover={{ backgroundColor: "#aaa888", color: '#eee' }}
          >
            change
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default SwitchCard


const cardData = [
  {
    id: '0',
    name: 'Ken',
    url: 'https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde, possimus sapiente architecto blanditiis tempore.'
  },
  {
    id: '1',
    name: 'Jane',
    url: 'https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    description: 'Lorem dolor sit amet consectetur adipisicing elit. Doloribus unde, possimus sapiente architecto.'
  },
  {
    id: '2',
    name: 'Max',
    url: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde, possimus sapiente architecto blanditiis tempore.'
  },
  {
    id: '3',
    name: 'Carissa',
    url: 'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dicta ad suscipit sed, eligendi odit beatae deserunt est dolores mollitia.'
  },
  {
    id: '4',
    name: 'Derick',
    url: 'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
    description: 'Ipsam dicta ad suscipit sed, eligendi odit beatae deserunt est dolores mollitia.'
  },
]
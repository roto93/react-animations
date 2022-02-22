import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import '../css/scrollCard.css'


const ScrollCardPage = () => {
  const bannerRef = useRef(0)
  const sliderRef = useRef(0)
  const [isDragging, setIsDragging] = useState(false);
  const [sliderConstraint, setSliderConstraint] = useState(0);

  const cardVariants = (order) => ({
    hidden: {
      opacity: 0,
      y: -40
    },
    visible: {
      transition: { opacity: { duration: 1, delay: order * 0.2 } },
      opacity: 1,
      y: 0
    }
  })

  useEffect(() => {
    const handleResize = () => {
      const constraint = bannerRef.current.offsetWidth - sliderRef.current.offsetWidth
      setSliderConstraint(constraint)
    }
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="scrollCard__container">
      <div className="scrollCard__header">
        <h1 className='scrollCard__title'>Scroll Card</h1>
      </div>

      <motion.div className="scrollCard__banner" ref={bannerRef}>
        <motion.ul
          ref={sliderRef}
          whileTap={{ cursor: 'grabbing' }}
          className={`scrollCard__cardContainer`}
          drag={'x'}
          dragConstraints={{ left: sliderConstraint, right: 0 }}
          dragTransition={{ power: 0.2, timeConstant: 200, }}
          onDragStart={() => { setIsDragging(true) }}
          onDragEnd={() => {
            setTimeout(() => {
              setIsDragging(false)
            }, 50)
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <motion.li
              key={index}
              className={'scrollCard__card'}
              variants={cardVariants(item)}
              initial={'hidden'}
              animate={'visible'}
              exit={null}
              whileHover={{ y: -5 }}
              whileTap={{ scale: isDragging ? 1 : 0.97 }}
              whileDrag={{ cursor: 'grabbing' }}
            >
              <img
                draggable="false"
                onClick={() => { !isDragging && console.log('a') }}
                alt="house"
                className='scrollCard__image'
                src={require(`../images/house/house${item}.jpg`)}
              />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <div className="scrollCard__description">
        <h2 className="scrollCard__section__title">
          ✔️ Fade in sequentially <br />
          ✔️ Draggable slider
        </h2>
        <p className="scrollCard__section__content">

        </p>

      </div>
    </div>
  )
}

export default ScrollCardPage

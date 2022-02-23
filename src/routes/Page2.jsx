import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import React, { useState } from 'react'
import { CodeBlock } from 'react-code-blocks';
import '../css/SharedElement.css'

const SharedElementPage = () => {
  const [on, setOn] = useState(true);
  const [sectionHeight, setSectionHeight] = useState(40);

  const toggleSection = () => {
    // setSectionHeight(sectionHeight === 40 ? 400 : 40)
    setOn(prev => !prev)
  }
  return (
    <div className="sharedElement">
      <h2 className="sharedElement__title">Shared Layout Animation</h2>
      <div className="container">
        <p>
          當 layout=true 的 motion 元件的位置或形狀發生改變時<br />
          motion 會把元件的初始位置與最終位置做 snapshot<br />
          並自動計算應填補在這之間的動畫
        </p>
      </div>

      <div className="sharedElement__container">
        <h3 className="sharedElement__subtitle">with layout property</h3>
        <AnimateSharedLayout>
          <motion.div layout className="sharedElement__box" style={{ flexDirection: on ? 'column' : 'column' }}>
            <motion.div layout className="sharedElement__section" animate={{ height: sectionHeight }}>
              section1
            </motion.div>
            <motion.div layout className="sharedElement__section">
              section2
            </motion.div>
            <AnimatePresence>
              {on &&
                <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="sharedElement__section">
                  section3
                </motion.div>
              }
            </AnimatePresence>
          </motion.div>
        </AnimateSharedLayout>
        <motion.div
          className='sharedElement__toggleButton'
          onClick={toggleSection}
          transition={{ duration: 0.2 }}
          whileHover={{ color: '#fff', backgroundColor: '#000' }}
          whileTap={{ scale: 0.95, transition: { duration: 0 } }}
        >
          toggle
        </motion.div>
      </div>

      <div className="sharedElement__container">
        <h3 className="sharedElement__subtitle">without layout property</h3>
        <motion.div className="sharedElement__box" style={{ flexDirection: on ? 'column' : 'column' }}>
          <motion.div className="sharedElement__section" animate={{ height: sectionHeight }}>
            section1
          </motion.div>
          <motion.div className="sharedElement__section">
            section2
          </motion.div>
          <AnimatePresence>
            {on &&
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="sharedElement__section">
                section3
              </motion.div>
            }
          </AnimatePresence>
        </motion.div>

      </div>
      <div className="container">

        <p className='sharedElement__p'>所有要做 layout animation 的元件都必須用 AnimateSharedLayout 包起來</p>
        <CodeBlock
          text={code1}
          language={'jsx'}
          style={{ textAlign: 'start' }}
        />
      </div>
    </div>
  )
}

export default SharedElementPage

const code1 = `<div className="sharedElement__container">
  <h3 className="sharedElement__subtitle">with layout property</h3>
  <AnimateSharedLayout>
    <motion.div layout style={{ flexDirection: on ? 'column' : 'column' }}>
      <motion.div layout  animate={{ height: sectionHeight }}>
        section1
      </motion.div>
      <motion.div layout >
        section2
      </motion.div>
      <AnimatePresence>
        {on && <motion.div 
            layout 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}>
            section3
          </motion.div>
        }
      </AnimatePresence>
    </motion.div>
  </AnimateSharedLayout>
</div>`
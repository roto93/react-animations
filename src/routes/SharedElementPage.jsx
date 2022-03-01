import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import React, { useState } from 'react'
import { CodeBlock } from 'react-code-blocks';
import '../css/SharedElement.css'

const SharedElementPage = () => {
  const [on, setOn] = useState(true);

  const toggleSection = () => {
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
            <motion.div layout className="sharedElement__section" >
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
          <motion.div className="sharedElement__section" >
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
        <p className='sharedElement__p'>
          原本當第三個 section 出現或消失的時候，它的父元件都會瞬間變動<br />
          但只要將這些元件都加上layout屬性(4, 5, 8, 13)，並用AnimateSharedLayout包起來(3, 22)<br />
          被包起來的元件就會在版面變化時通知其他元件，讓他們知道該產生動畫了<br />
          而這些動畫都會自動計算! 超讚
        </p>
        <div style={{ margin: "2em 0" }}>
          <CodeBlock
            text={code1}
            language={'jsx'}
            style={{ textAlign: 'start' }}
          />
        </div>
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
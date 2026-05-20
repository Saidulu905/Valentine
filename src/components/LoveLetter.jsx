import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './LoveLetter.css'

const lines = [
  "Every moment with you feels like a little celebration.",
  "Your smile is my favorite view.",
  "I'm so grateful you're in my life.",
  "Here's to more adventures together. 💕",
]

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.section
      className="letter-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className={`letter-envelope ${isOpen ? 'open' : ''}`}
        onClick={() => !isOpen && setIsOpen(true)}
        whileHover={!isOpen ? { scale: 1.02 } : {}}
        whileTap={!isOpen ? { scale: 0.98 } : {}}
      >
        <div className="envelope-flap" />
        <div className="envelope-body">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.p
                key="closed"
                className="letter-cta"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Tap to open your letter
              </motion.p>
            ) : (
              <motion.div
                key="open"
                className="letter-content"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="letter-greeting">Dear Madhu,</p>
                {lines.map((line, i) => (
                  <motion.p
                    key={i}
                    className="letter-line"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i + 0.2 }}
                  >
                    {line}
                  </motion.p>
                ))}
                <p className="letter-sign">With love, Saidii 💕</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.section>
  )
}

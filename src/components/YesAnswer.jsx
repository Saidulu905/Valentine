import { motion } from 'framer-motion'
import './YesAnswer.css'

export default function YesAnswer() {
  return (
    <motion.div
      className="yes-answer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        className="yes-content"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.span
          className="yes-emoji"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
        >
          💕
        </motion.span>
        <h1 className="yes-title">Yay Radha! I'm so happy!</h1>
        <p className="yes-message">
          Can't wait to make this Valentine's Day special with you. You mean the world to me, Radha.
          <br />
          <span className="yes-sign">— jogendra 💗</span>
        </p>
        <motion.p
          className="yes-hearts"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ❤️ 💕 💖 💗 ❤️
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

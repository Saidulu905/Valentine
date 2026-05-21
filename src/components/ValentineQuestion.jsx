import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import './ValentineQuestion.css'

function fireConfetti() {
  const duration = 3 * 1000
  const end = Date.now() + duration
  const colors = ['#e11d48', '#f43f5e', '#fda4af', '#fef7f0', '#d4a853']

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0.3, y: 0.9 },
      colors,
    })
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 0.7, y: 0.9 },
      colors,
    })
    if (Date.now() < end) requestAnimationFrame(frame)
  }
  frame()
}

const NO_MESSAGES = [
  'No',
  'No',
  'Okay maybe... 👀',
  'Please? 😊',
  'Pretty please? 🥺',
  "Yes is this way →",
  "I made this for you! 💕",
  "Just say yes! 💕",
  "The Yes button misses you",
  "Jogendra is waiting 💕",
  "Yes = confetti 🎉",
  "You know you want to 😏",
  "Pleeease? 🙏",
  "Yes! Yes! Yes!",
]

function getNoMessage(count) {
  return NO_MESSAGES[Math.min(count, NO_MESSAGES.length - 1)]
}

export default function ValentineQuestion({ onYes }) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [noCount, setNoCount] = useState(0)
  const noRef = useRef(null)

  const moveNo = () => {
    const maxMove = 140
    setNoPosition({
      x: (Math.random() - 0.5) * 2 * maxMove,
      y: (Math.random() - 0.5) * 2 * maxMove,
    })
  }

  const handleNoHover = () => {
    setNoCount((c) => c + 1)
    moveNo()
  }

  const handleNoClick = (e) => {
    e.preventDefault()
    setNoCount((c) => c + 1)
    moveNo()
  }

  const handleYes = () => {
    fireConfetti()
    onYes()
  }

  const yesScale = 1.15 + Math.min(noCount * 0.08, 0.85)

  return (
    <motion.section
      className="question-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="question-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Radha, will you be my Valentine?
      </motion.h2>
      <div className="question-buttons">
        <motion.button
          className="btn btn-yes"
          onClick={handleYes}
          style={{ scale: yesScale }}
          whileHover={{ scale: yesScale * 1.08 }}
          whileTap={{ scale: yesScale * 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          Yes! 💕
        </motion.button>
        <motion.button
          ref={noRef}
          className="btn btn-no"
          onMouseEnter={handleNoHover}
          onClick={handleNoClick}
          style={{
            transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {getNoMessage(noCount)}
        </motion.button>
      </div>
      {noCount >= 3 && noCount < NO_MESSAGES.length && (
        <motion.p
          className="question-hint"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
        >
          The Yes button is getting bigger... just saying 😊
        </motion.p>
      )}
    </motion.section>
  )
}

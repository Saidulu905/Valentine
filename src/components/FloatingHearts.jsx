import { motion } from 'framer-motion'
import './FloatingHearts.css'

const HEARTS = 18
const heartEmojis = ['💕', '💗', '💖', '❤️', '💝', '🌸', '✨']

function randomBetween(min, max) {
  return min + Math.random() * (max - min)
}

function Heart({ delay, duration, x, size, emoji }) {
  return (
    <motion.span
      className="floating-heart"
      style={{
        left: `${x}%`,
        fontSize: `${size}rem`,
        bottom: '-2rem',
      }}
      initial={{ opacity: 0, y: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.8, 0.8, 0],
        y: [-20, -900],
        scale: [0, 1, 1, 0.5],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: randomBetween(2, 5),
      }}
    >
      {emoji}
    </motion.span>
  )
}

export default function FloatingHearts() {
  return (
    <div className="floating-hearts" aria-hidden="true">
      {Array.from({ length: HEARTS }).map((_, i) => (
        <Heart
          key={i}
          delay={randomBetween(0, 8)}
          duration={randomBetween(12, 22)}
          x={randomBetween(0, 100)}
          size={randomBetween(1, 2.5)}
          emoji={heartEmojis[i % heartEmojis.length]}
        />
      ))}
    </div>
  )
}

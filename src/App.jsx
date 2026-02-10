import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FloatingHearts from './components/FloatingHearts'
import Hero from './components/Hero'
import LoveLetter from './components/LoveLetter'
import ValentineQuestion from './components/ValentineQuestion'
import YesAnswer from './components/YesAnswer'
import './App.css'

function App() {
  const [saidYes, setSaidYes] = useState(false)

  return (
    <main className="app">
      <FloatingHearts />
      <AnimatePresence mode="wait">
        {!saidYes ? (
          <motion.div
            key="asking"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="app-content"
          >
            <Hero />
            <LoveLetter />
            <ValentineQuestion onYes={() => setSaidYes(true)} />
          </motion.div>
        ) : (
          <YesAnswer key="yes" />
        )}
      </AnimatePresence>
    </main>
  )
}

export default App

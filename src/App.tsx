import { useState } from 'react'
import './App.css'
import {
  Header,
  Instructions,
  SelectionCounter,
  CardGrid,
  ButtonGroup,
  ResultCard,
  ThemeSwitcher
} from './components'
import type { MagicCard } from './types'

function App() {
  const [selectedCards, setSelectedCards] = useState<Set<number>>(new Set())
  const [revealedNumber, setRevealedNumber] = useState<number | null>(null)
  const [revealedMessage, setRevealedMessage] = useState<string>('')
  const [isLocked, setIsLocked] = useState(false)

  const messages = [
    "Isn't that amazing?",
    "Magic is real! ✨",
    "Did you see that coming?",
    "Pretty cool, right?",
    "That's the power of binary!",
    "Mathematics at its finest!",
    "Mind blown? 🤯",
    "How did we know?",
    "The magic worked!",
    "Incredible, isn't it!"
  ]

  const cards: MagicCard[] = [
    { letter: 'A', power: 1, numbers: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63] },
    { letter: 'B', power: 2, numbers: [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31, 34, 35, 38, 39, 42, 43, 46, 47, 50, 51, 54, 55, 58, 59, 62, 63] },
    { letter: 'C', power: 4, numbers: [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31, 36, 37, 38, 39, 44, 45, 46, 47, 52, 53, 54, 55, 60, 61, 62, 63] },
    { letter: 'D', power: 8, numbers: [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47, 56, 57, 58, 59, 60, 61, 62, 63] },
    { letter: 'E', power: 16, numbers: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63] },
    { letter: 'F', power: 32, numbers: [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63] }
  ]

  const toggleCard = (index: number) => {
    if (isLocked) return

    const newSelected = new Set(selectedCards)
    if (newSelected.has(index)) {
      newSelected.delete(index)
    } else {
      newSelected.add(index)
    }
    setSelectedCards(newSelected)
  }

  const revealNumber = () => {
    let sum = 0
    selectedCards.forEach(index => {
      sum += cards[index].power
    })
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    setRevealedNumber(sum)
    setRevealedMessage(randomMessage)
    setIsLocked(true)
  }

  const reset = () => {
    setSelectedCards(new Set())
    setRevealedNumber(null)
    setRevealedMessage('')
    setIsLocked(false)
  }

  const handleThemeChange = (newTheme: any) => {
    document.documentElement.style.setProperty('--primary', newTheme.colors.primary)
    document.documentElement.style.setProperty('--secondary', newTheme.colors.secondary)
    document.documentElement.style.setProperty('--accent1', newTheme.colors.accent1)
    document.documentElement.style.setProperty('--accent2', newTheme.colors.accent2)
  }

  return (
    <div className="app-wrapper">
      <div className="left-section">
        <Instructions />
        <SelectionCounter count={selectedCards.size} />
        <ButtonGroup
          onReveal={revealNumber}
          onReset={reset}
          isDisabled={selectedCards.size === 0 || isLocked}
        />
        <ResultCard number={revealedNumber} message={revealedMessage} />
        <ThemeSwitcher onThemeChange={handleThemeChange} />
      </div>

      <div className="right-section">
        <Header />
        <CardGrid
          cards={cards}
          selectedCards={selectedCards}
          onToggleCard={toggleCard}
          isLocked={isLocked}
        />
        <div className="footer-text">
          made with ❤️ using React by{' '}
          <a href="https://swapnil-khare.vercel.app/" target="_blank" rel="noopener noreferrer">
            Swapnil Khare
          </a>
        </div>
      </div>
    </div>
  )
}

export default App

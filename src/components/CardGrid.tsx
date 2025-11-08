import { Card } from './Card'

interface CardGridProps {
  cards: Array<{
    letter: string
    power: number
    numbers: number[]
  }>
  selectedCards: Set<number>
  onToggleCard: (index: number) => void
  isLocked: boolean
}

export function CardGrid({ cards, selectedCards, onToggleCard, isLocked }: CardGridProps) {
  return (
    <div className="cards-grid">
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          index={index}
          isSelected={selectedCards.has(index)}
          onToggle={onToggleCard}
          isLocked={isLocked}
        />
      ))}
    </div>
  )
}

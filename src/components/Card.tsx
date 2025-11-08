interface CardProps {
  card: {
    letter: string
    power: number
    numbers: number[]
  }
  index: number
  isSelected: boolean
  onToggle: (index: number) => void
  isLocked: boolean
}

export function Card({ card, index, isSelected, onToggle, isLocked }: CardProps) {
  return (
    <div
      className={`card ${isSelected ? 'selected' : ''} ${isLocked ? 'locked' : ''}`}
      onClick={() => onToggle(index)}
      style={{ pointerEvents: isLocked ? 'none' : 'auto', opacity: isLocked ? 0.6 : 1 }}
    >
      <div className="card-header">Card {card.letter}</div>
      <div className="card-numbers">
        {card.numbers.map((num) => (
          <div key={num} className="number">
            {num}
          </div>
        ))}
      </div>
    </div>
  )
}

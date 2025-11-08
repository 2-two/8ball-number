interface ResultCardProps {
  number: number | null
  message: string
}

export function ResultCard({ number, message }: ResultCardProps) {
  if (number === null) return null

  return (
    <div className="result-section show">
      <p className="result-text">Your number is:</p>
      <div className="result-number">{number}</div>
      <p className="result-text">{message}</p>
    </div>
  )
}

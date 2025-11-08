interface SelectionCounterProps {
  count: number
}

export function SelectionCounter({ count }: SelectionCounterProps) {
  return (
    <div className="selection-count">
      Selected cards: <strong>{count}</strong>
    </div>
  )
}

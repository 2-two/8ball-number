interface ButtonGroupProps {
  onReveal: () => void
  onReset: () => void
  isDisabled: boolean
}

export function ButtonGroup({ onReveal, onReset, isDisabled }: ButtonGroupProps) {
  return (
    <div className="button-group">
      <button
        className="btn-reveal"
        onClick={onReveal}
        disabled={isDisabled}
      >
        ✨ Reveal My Number
      </button>
      <button className="btn-reset" onClick={onReset}>
        🔄 Reset
      </button>
    </div>
  )
}

interface Theme {
  name: string
  emoji: string
  colors: {
    primary: string
    secondary: string
    accent1: string
    accent2: string
    background: string
    text: string
  }
}

interface ThemeSwitcherProps {
  onThemeChange: (theme: Theme) => void
}

export function ThemeSwitcher({ onThemeChange }: ThemeSwitcherProps) {
  const themes: Theme[] = [
    {
      name: 'Sage',
      emoji: '🌿',
      colors: {
        primary: '#C7DCA7',
        secondary: '#89B9AD',
        accent1: '#FFC5C5',
        accent2: '#FFEBD8',
        background: 'linear-gradient(135deg, #C7DCA7 0%, #89B9AD 100%)',
        text: '#89B9AD'
      }
    },
    {
      name: 'Sunset',
      emoji: '🌅',
      colors: {
        primary: '#FF6B6B',
        secondary: '#FF8E72',
        accent1: '#FFD93D',
        accent2: '#FFF5E1',
        background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E72 100%)',
        text: '#FF6B6B'
      }
    },
    {
      name: 'Ocean',
      emoji: '🌊',
      colors: {
        primary: '#4ECDC4',
        secondary: '#44A08D',
        accent1: '#95E1D3',
        accent2: '#E8F8F5',
        background: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
        text: '#44A08D'
      }
    },
    {
      name: 'Lavender',
      emoji: '💜',
      colors: {
        primary: '#B19CD9',
        secondary: '#DDA0DD',
        accent1: '#FFB6C1',
        accent2: '#F0E6FF',
        background: 'linear-gradient(135deg, #B19CD9 0%, #DDA0DD 100%)',
        text: '#8B7BA8'
      }
    },
    {
      name: 'Forest',
      emoji: '🌲',
      colors: {
        primary: '#2D6A4F',
        secondary: '#40916C',
        accent1: '#D8F3DC',
        accent2: '#E8F5E9',
        background: 'linear-gradient(135deg, #2D6A4F 0%, #40916C 100%)',
        text: '#40916C'
      }
    }
  ]

  return (
    <div className="theme-switcher">
      <p className="theme-label">Themes:</p>
      <div className="theme-buttons">
        {themes.map((theme) => (
          <button
            key={theme.name}
            className="theme-btn"
            title={theme.name}
            onClick={() => onThemeChange(theme)}
          >
            {theme.emoji}
          </button>
        ))}
      </div>
    </div>
  )
}

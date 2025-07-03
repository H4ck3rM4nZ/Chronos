import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { getNavigationButtons } from './navigationButtons'
import { useThemeToggle } from './useThemeToggle'

export const Navigation = () => {
  const { theme, toggleTheme } = useThemeToggle()
  const buttonList = getNavigationButtons(theme, toggleTheme)

  return (
    <nav style={{ marginTop: '30px' }}>
      <Container as="ul" direction="row" style={{ gap: '20px' }}>
        {buttonList.map(({ icon: Icon, title, click }, index) => {
          return (
            <li key={index}>
              <Button onClick={click} title={title}>
                <Icon />
              </Button>
            </li>
          )
        })}
      </Container>
    </nav>
  )
}

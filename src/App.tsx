import { CirclePlay, Timer } from 'lucide-react'
import { Container } from './components/ui/Container'
import { Button } from './components/ui/Button'
import { Cycle } from './components/ui/Cycle'
import { useTheme } from 'styled-components'
import { Navigation } from './components/Navigation'

export function App() {
  const theme = useTheme()

  return (
    <Container>
      <Container as="header">
        <Container as="h1">
          <Timer size={'6rem'} color={theme.colorSuccess} />
          <a
            style={{
              color: theme.colorSuccess,
              fontWeight: 900,
              fontSize: '3rem',
            }}
          >
            Chronos
          </a>
        </Container>
        <Navigation />
      </Container>

      <main>
        <article>
          <section>
            <Container as="form" action="">
              <fieldset>
                <Container>
                  <time
                    dateTime="00:00"
                    style={{
                      fontSize: 'clamp(3rem,30vw,8rem)',
                      fontWeight: '700',
                    }}
                  >
                    00:00
                  </time>
                  <label>Task</label>
                  <input type="text" />
                  <p>
                    Próximo ciclo é de: <time dateTime="00:00">0 min</time>
                  </p>
                </Container>
              </fieldset>

              <fieldset>
                <Container>
                  <legend>Ciclos</legend>
                  <Container as="output" direction="row">
                    <Cycle color={theme.colorWarning} />
                    <Cycle color={theme.colorSuccess} />
                    <Cycle color={theme.colorWarning} />
                    <Cycle color={theme.colorSuccess} />
                    <Cycle color={theme.colorWarning} />
                    <Cycle color={theme.colorSuccess} />
                    <Cycle color={theme.colorWarning} />
                    <Cycle color={theme.colorInfo} />
                  </Container>
                </Container>
              </fieldset>
              <Button width="100%" type="button">
                <CirclePlay />
              </Button>
            </Container>
          </section>
        </article>
      </main>

      <footer>
        <Container as="section" style={{ fontSize: '0.8rem' }}>
          <a>Entenda como funciona a técnica pomodoro</a>
          <Container as="p" direction="row">
            Desenvolvido por:
            <a
              href="https://github.com/H4ck3rM4nZ"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: 500 }}
            >
              H4ck3rM4nZ
            </a>
          </Container>
        </Container>
      </footer>
    </Container>
  )
}

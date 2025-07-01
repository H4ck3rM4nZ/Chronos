import { Timer } from 'lucide-react'
import { Container } from './components/ui/Container'

export function App() {
  return (
    <Container>
      <Container as="header">
        <Container as="h1">
          <Timer />
          <a>Chronos</a>
        </Container>

        <nav>
          <Container as="ul" direction="row">
            <li>
              <a href="">Link 1</a>
            </li>
            <li>
              <a href="">Link 2</a>
            </li>
            <li>
              <a href="">Link 3</a>
            </li>
            <li>
              <a href="">Link 4</a>
            </li>
          </Container>
        </nav>
      </Container>

      <main>
        <article>
          <section>
            <Container as="form" action="">
              <fieldset>
                <Container>
                  <output>00:00</output>
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
                    <div>0</div>
                    <div>0</div>
                    <div>0</div>
                    <div>0</div>
                    <div>0</div>
                    <div>0</div>
                    <div>0</div>
                    <div>0</div>
                  </Container>
                </Container>
              </fieldset>
              <button type="button">Botao</button>
            </Container>
          </section>
        </article>
      </main>

      <footer>
        <Container as="section">
          <a>Entenda como funciona a técnica pomodoro</a>
          <Container as="p" direction="row">
            Desenvolvido por:
            <a
              href="https://github.com/H4ck3rM4nZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              H4ck3rM4nZ
            </a>
          </Container>
        </Container>
      </footer>
    </Container>
  )
}

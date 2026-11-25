import { useEffect, useRef, useState } from 'react'

function App() {
  const [screen, setScreen] = useState('start')
  const headingRef = useRef(null)
  const startButtonRef = useRef(null)

  useEffect(() => {
    document.title = screen === 'start' ? 'Time Dungeon' : 'Time Dungeon — Game'
    headingRef.current?.focus({ preventScroll: true })
  }, [screen])

  function showGame() {
    setScreen('game')
  }

  function showStart() {
    setScreen('start')
  }

  useEffect(() => {
    if (screen === 'start') {
      startButtonRef.current?.focus({ preventScroll: true })
    }
  }, [])

  return (
    <main className="game-shell">
      <div className="sky-glow sky-glow--left" aria-hidden="true" />
      <div className="sky-glow sky-glow--right" aria-hidden="true" />

      {screen === 'start' ? (
        <section className="start-screen" aria-labelledby="gameTitle">
          <div className="brand-mark" aria-hidden="true">
            <span className="brand-mark__hourglass">
              <span className="brand-mark__sand" />
            </span>
          </div>

          <p className="eyebrow">A study adventure</p>
          <h1 id="gameTitle" ref={headingRef} tabIndex="-1">Time <span>Dungeon</span></h1>

          <p className="description">
            Turn focused study time into adventure. Earn points, customize your hero,
            and unlock deeper levels with every session.
          </p>

          <button className="start-button" type="button" onClick={showGame} ref={startButtonRef}>
            <span>Start Game</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="progress-key" aria-label="Game progress features">
            <span><i className="key-dot key-dot--amber" />Study</span>
            <span><i className="key-dot key-dot--violet" />Earn</span>
            <span><i className="key-dot key-dot--blue" />Explore</span>
          </div>
        </section>
      ) : (
        <section className="game-screen" aria-labelledby="gameScreenTitle">
          <p className="eyebrow">The adventure begins</p>
          <h2 id="gameScreenTitle" ref={headingRef} tabIndex="-1">Choose Your First Quest</h2>
          <p className="description">Your main game screen is ready for the next development phase.</p>
          <button className="back-button" type="button" onClick={showStart}>Back to Start</button>
        </section>
      )}
    </main>
  )
}

export default App

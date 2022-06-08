import Clock from './components/Clock'

import './App.css'
import ProgressBar from './components/ProgressBar'

function App() {
  return (
    <div>
      <h1>Pomodoro App</h1>
      <hr />
      <div className='App'>
        <div className='TimeboxEditor'>
          <label>
            Co robisz?
            <input type='text' value='Uczę się Reacta' />
          </label>
          <br />
          <label>
            Ile minut?
            <input type='number' value='25' />
          </label>
          <br />
          <button>Zacznij!</button>
        </div>
      </div>
      <div className='Timebox'>
        <h1>Uczę się Reacta</h1>
        <Clock hours={27} minutes={700} seconds={120} miliseconds={1000} />
        <ProgressBar percent={25} />
        <button>Start</button>
        <button>Stop</button>
        <button>Pauzuj</button>
        Liczba przerw: 5
      </div>
    </div>
  )
}

export default App

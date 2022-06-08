import './App.css'
import Timebox from './components/Timebox'

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
      <Timebox />
    </div>
  )
}

export default App

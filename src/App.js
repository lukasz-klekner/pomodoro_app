import './App.css'
import Timebox from './components/Timebox'
import TimeboxEditor from './components/TimeboxEditor'

function App() {
  return (
    <div>
      <h1>Pomodoro App</h1>
      <hr />
      <div className='App'>
        <TimeboxEditor />
        <Timebox />
      </div>
    </div>
  )
}

export default App

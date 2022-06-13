import './styles/main.scss'

import EditableTimebox from './components/EditableTimebox'
import TimeboxList from './components/TimeboxList'

function App() {
  return (
    <div>
      <h1>Pomodoro App</h1>
      <hr />
      <TimeboxList />
      <EditableTimebox />
    </div>
  )
}

export default App

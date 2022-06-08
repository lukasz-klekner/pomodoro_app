import Clock from './Clock'
import ProgressBar from './ProgressBar'

const Timebox = () => (
  <div className='Timebox'>
    <h1>Uczę się Reacta</h1>
    <Clock hours={27} minutes={700} seconds={120} miliseconds={1000} />
    <ProgressBar percent={25} />
    <button>Start</button>
    <button>Stop</button>
    <button>Pauzuj</button>
    Liczba przerw: 5
  </div>
)

export default Timebox

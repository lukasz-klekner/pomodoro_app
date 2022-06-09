import { useState } from 'react'

import Clock from './Clock'
import ProgressBar from './ProgressBar'

const Timebox = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [pausesCount, setPausesCount] = useState(0)

  const handleStart = () => {
    setIsRunning(true)
  }

  const handleStop = () => {
    setIsRunning(false)
    setIsPaused(false)
    setPausesCount(0)
  }

  const togglePause = () => {
    setIsPaused((prevState) => !prevState)
    setPausesCount((prevState) => (!isPaused ? prevState + 1 : prevState))
  }

  return (
    <div className='Timebox'>
      <h1>Uczę się Reacta</h1>
      <Clock
        className={isPaused ? 'inactive' : ''}
        hours={27}
        minutes={700}
        seconds={120}
        miliseconds={1000}
      />
      <ProgressBar className={isPaused ? 'inactive' : ''} percent={25} />
      <button disabled={isRunning} onClick={handleStart}>
        Start
      </button>
      <button disabled={!isRunning} onClick={handleStop}>
        Stop
      </button>
      <button disabled={!isRunning} onClick={togglePause}>
        {isPaused ? 'Wznów' : 'Pauzuj'}
      </button>
      Liczba przerw: {pausesCount}
    </div>
  )
}

export default Timebox

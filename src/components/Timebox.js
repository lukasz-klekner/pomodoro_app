import { useEffect, useState } from 'react'

import Clock from './Clock'
import ProgressBar from './ProgressBar'

let intervalId = null

const Timebox = ({ title, totalTimeInMinutes }) => {
  const [elapsedTimeInMiliseconds, setelapsedTimeInMiliseconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [pausesCount, setPausesCount] = useState(0)

  const totalTimeInMiliseconds = Number(totalTimeInMinutes) * 60 * 1000
  const timeLeftInMiliseconds =
    totalTimeInMiliseconds - elapsedTimeInMiliseconds
  const minutesLeft = Math.floor(timeLeftInMiliseconds / (60 * 1000))
  const secondsLeft = Math.floor((timeLeftInMiliseconds / 1000) % 60)
  const milisecondsLeft = Math.floor(timeLeftInMiliseconds % 1000)
  const progressInPercent =
    (elapsedTimeInMiliseconds / totalTimeInMiliseconds) * 100.0

  const startTimer = () => {
    if (intervalId) return

    intervalId = window.setInterval(() => {
      setelapsedTimeInMiliseconds((prevState) => prevState + 10)
    }, 10)
  }

  const stopTimer = () => {
    window.clearInterval(intervalId)

    intervalId = null
  }

  const handleStart = () => {
    setIsRunning(true)
    setIsPaused(false)

    startTimer()
  }

  const handleStop = () => {
    setIsRunning(false)
    setIsPaused(false)
    setPausesCount(0)
    setelapsedTimeInMiliseconds(0)

    stopTimer()
  }

  const togglePause = () => {
    setIsPaused((prevState) => {
      const isPaused = !prevState
      if (isPaused) {
        stopTimer()
        setIsRunning(false)
      } else {
        startTimer()
        setIsRunning(true)
      }

      return isPaused
    })
    setPausesCount((prevState) => (!isPaused ? prevState + 1 : prevState))
  }

  useEffect(() => {
    if (totalTimeInMiliseconds - elapsedTimeInMiliseconds < 0) {
      handleStop()
    }
  }, [elapsedTimeInMiliseconds, totalTimeInMiliseconds])

  return (
    <div className='Timebox'>
      <h1>{title}</h1>
      <Clock
        className={isPaused ? 'inactive' : ''}
        miliseconds={milisecondsLeft}
        minutes={minutesLeft}
        seconds={secondsLeft}
      />
      <ProgressBar
        className={isPaused ? 'inactive' : ''}
        percent={progressInPercent}
      />
      <button disabled={isRunning !== isPaused} onClick={handleStart}>
        Start
      </button>
      <button disabled={!isRunning} onClick={handleStop}>
        Stop
      </button>
      <button disabled={isRunning === isPaused} onClick={togglePause}>
        {isPaused ? 'Wznów' : 'Pauzuj'}
      </button>
      Liczba przerw: {pausesCount}
    </div>
  )
}

export default Timebox

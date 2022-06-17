import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Button from './Button'
import Clock from './Clock'
import ProgressBar from './ProgressBar'
import { getMinutesSecondsAndMilisecondsFromDurationInSeconds } from '../utils/helpers'

let intervalId = null

const CurrentTimebox = ({ isEditable, title, totalTimeInMinutes, onEdit }) => {
  const [elapsedTimeInMiliseconds, setElapsedTimeInMiliseconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [pausesCount, setPausesCount] = useState(0)

  const currentTimeboxClassNames = classNames('CurrentTimebox', {
    inactive: isEditable,
  })

  const totalTimeInMiliseconds = Number(totalTimeInMinutes) * 60 * 1000
  const timeLeftInMiliseconds =
    totalTimeInMiliseconds - elapsedTimeInMiliseconds
  const {
    minutes: minutesLeft,
    seconds: secondsLeft,
    miliseconds: milisecondsLeft,
  } = getMinutesSecondsAndMilisecondsFromDurationInSeconds(
    timeLeftInMiliseconds
  )

  const progressInPercent =
    (elapsedTimeInMiliseconds / totalTimeInMiliseconds) * 100.0

  const startTimer = () => {
    if (intervalId !== null) return

    intervalId = window.setInterval(() => {
      setElapsedTimeInMiliseconds((prevState) => prevState + 10)
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
    setElapsedTimeInMiliseconds(0)

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
    <div className={currentTimeboxClassNames}>
      <h1>{title}</h1>
      <Clock
        className={isPaused ? 'inactive' : ''}
        miliseconds={milisecondsLeft}
        minutes={minutesLeft}
        seconds={secondsLeft}
      />
      <ProgressBar
        big
        className={isPaused ? 'inactive' : ''}
        color='red'
        percent={progressInPercent}
      />
      <Button disabled={isEditable} onClick={onEdit}>
        Edytuj
      </Button>
      <Button
        disabled={isRunning !== isPaused}
        onClick={handleStart}
        variant='secondary'
      >
        Start
      </Button>
      <Button disabled={!isRunning} onClick={handleStop}>
        Stop
      </Button>
      <Button disabled={isRunning === isPaused} onClick={togglePause}>
        {isPaused ? 'Wznów' : 'Pauzuj'}
      </Button>
      Liczba przerw: {pausesCount}
    </div>
  )
}

CurrentTimebox.propTypes = {
  isEditable: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  totalTimeInMinutes: PropTypes.string.isRequired,
  onEdit: PropTypes.func,
}

export default CurrentTimebox

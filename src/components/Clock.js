import { clamp, prefixWithZeros } from '../utils/helpers'

const Clock = ({ className, miliseconds, minutes, seconds }) => {
  const time = {
    minutes: prefixWithZeros(clamp(0, minutes, 59), 2),
    seconds: prefixWithZeros(clamp(0, seconds, 59), 2),
    miliseconds: prefixWithZeros(clamp(0, miliseconds, 999), 3),
  }

  return (
    <h2 className={`Clock ${className}`}>
      Pozostało <span className='clock__face'>{time.minutes}</span>
      <span className='clock__colon'>:</span>
      <span className='clock__face'>{time.seconds}</span>
      <span className='clock__colon'>:</span>
      <span className='clock__face'>{time.miliseconds}</span>
    </h2>
  )
}

export default Clock

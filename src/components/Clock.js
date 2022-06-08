import { clamp, prefixWithZeros } from '../utils/helpers'

const Clock = ({ hours, minutes, seconds, miliseconds }) => {
  const time = {
    hours: prefixWithZeros(clamp(0, hours, 23), 2),
    minutes: prefixWithZeros(clamp(0, minutes, 59), 2),
    seconds: prefixWithZeros(clamp(0, seconds, 59), 2),
    miliseconds: prefixWithZeros(clamp(0, miliseconds, 999), 3),
  }

  return (
    <h2 className='Clock'>
      Pozostało {time.hours}:{time.minutes}:{time.seconds}:{time.miliseconds}
    </h2>
  )
}

export default Clock

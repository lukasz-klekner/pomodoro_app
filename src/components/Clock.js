import { convertTime } from '../utils/time'

const Clock = ({ hours, minutes, seconds, miliseconds }) => {
  const time = convertTime(hours, minutes, seconds, miliseconds)

  return (
    <h2 className='Clock'>
      Pozostało {time.hours}:{time.minutes}:{time.seconds}:{time.miliseconds}
    </h2>
  )
}

export default Clock

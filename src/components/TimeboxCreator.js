import { useRef } from 'react'
import PropTypes from 'prop-types'

const TimeboxCreator = ({ onCreate }) => {
  const titleInput = useRef()
  const totalTimeInMinutesInput = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()

    onCreate({
      title: titleInput.current.value,
      totalTimeInMinutes: totalTimeInMinutesInput.current.value,
    })

    titleInput.current.value = ''
    totalTimeInMinutesInput.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit} className={`TimeboxEditor`}>
      <label>
        Co robisz?
        <input ref={titleInput} />
      </label>
      <br />
      <label>
        Ile minut?
        <input ref={totalTimeInMinutesInput} />
      </label>
      <br />
      <button>Dodaj timebox!</button>
    </form>
  )
}

TimeboxCreator.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default TimeboxCreator

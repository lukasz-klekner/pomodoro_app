import { useState } from 'react'

const TimeboxEditor = () => {
  const [title, setTitle] = useState('')
  const [totalTimeInMinutes, settotalTimeInMinutes] = useState('')

  const handleTitleChange = (event) => setTitle(event.target.value)
  const handletotalTimeInMinutesChange = (event) =>
    settotalTimeInMinutes(Number(event.target.value))

  return (
    <div className='TimeboxEditor'>
      <label>
        Co robisz?
        <input type='text' value={title} onChange={handleTitleChange} />
      </label>
      <br />
      <label>
        Ile minut?
        <input
          type='number'
          value={totalTimeInMinutes}
          onChange={handletotalTimeInMinutesChange}
        />
      </label>
      <br />
      <button>Zacznij!</button>
    </div>
  )
}

export default TimeboxEditor

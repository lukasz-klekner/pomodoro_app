import { useState } from 'react'

const TimeboxEditor = () => {
  const [title, setTitle] = useState('')
  const [totalTimeInMiliseconds, setTotalTimeInMiliseconds] = useState('')

  const handleTitleChange = (event) => setTitle(event.target.value)
  const handleTotalTimeInMilisecondsChange = (event) =>
    setTotalTimeInMiliseconds(Number(event.target.value))

  console.log(totalTimeInMiliseconds)

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
          value={totalTimeInMiliseconds}
          onChange={handleTotalTimeInMilisecondsChange}
        />
      </label>
      <br />
      <button>Zacznij!</button>
    </div>
  )
}

export default TimeboxEditor

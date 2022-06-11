import { useState } from 'react'

import Timebox from './Timebox'
import TimeboxEditor from './TimeboxEditor'

const EditableTimebox = () => {
  const [title, setTitle] = useState('Uczę się Reacta')
  const [totalTimeInMinutes, setTotalTimeInMinutes] = useState('')

  const handleTitleChange = (event) => setTitle(event.target.value)

  const handleTotalTimeInMinutesChange = (event) =>
    setTotalTimeInMinutes(event.target.value)

  return (
    <div className='App'>
      <TimeboxEditor
        onTitleChange={handleTitleChange}
        onTotalTimeInMinutesChange={handleTotalTimeInMinutesChange}
        title={title}
        totalTimeInMinutes={totalTimeInMinutes}
      />
      <Timebox title={title} totalTimeInMinutes={totalTimeInMinutes} />
    </div>
  )
}

export default EditableTimebox

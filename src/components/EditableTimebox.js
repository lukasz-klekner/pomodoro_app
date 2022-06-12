import { useState } from 'react'

import CurrentTimebox from './CurrentTimebox'
import TimeboxEditor from './TimeboxEditor'

const EditableTimebox = () => {
  const [isEditable, setIsEditable] = useState(true)
  const [title, setTitle] = useState('Uczę się Reacta')
  const [totalTimeInMinutes, setTotalTimeInMinutes] = useState('')

  const handleConfirm = () => setIsEditable(false)

  const handleEdit = () => setIsEditable(true)

  const handleTitleChange = (event) => setTitle(event.target.value)

  const handleTotalTimeInMinutesChange = (event) =>
    setTotalTimeInMinutes(event.target.value)

  return (
    <div className='App'>
      <TimeboxEditor
        isEditable={isEditable}
        onConfirm={handleConfirm}
        onTitleChange={handleTitleChange}
        onTotalTimeInMinutesChange={handleTotalTimeInMinutesChange}
        title={title}
        totalTimeInMinutes={totalTimeInMinutes}
      />
      <CurrentTimebox
        isEditable={isEditable}
        onEdit={handleEdit}
        title={title}
        totalTimeInMinutes={totalTimeInMinutes}
      />
    </div>
  )
}

export default EditableTimebox

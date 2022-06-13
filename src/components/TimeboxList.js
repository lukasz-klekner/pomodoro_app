import { useState } from 'react'
import { v4 } from 'uuid'

import Timebox from './Timebox'
import TimeboxEditor from './TimeboxEditor'

const TimeboxList = () => {
  const [timeboxes, setTimeboxes] = useState([
    { id: 'a1', title: 'Uczę się Reacta', totalTimeInMinutes: '20' },
    { id: 'a2', title: 'Uczę się Next.js', totalTimeInMinutes: '25' },
    { id: 'a3', title: 'Uczę się Tailwind CSS', totalTimeInMinutes: '10' },
  ])

  const [editedTimeboxId, setEditedTimeboxId] = useState()
  const [editedTimeboxTitle, setEditedTimeboxTitle] = useState()
  const [editedTimeboxTotalTimeInMinutes, setEditedTimeboxTotalTimeInMinutes] =
    useState()

  const handleTitleChange = (event) => setEditedTimeboxTitle(event.target.value)

  const handleTotalTimeInMinutesChange = (event) =>
    setEditedTimeboxTotalTimeInMinutes(event.target.value)

  const addTimebox = (timebox) =>
    setTimeboxes((prevState) => [timebox, ...prevState])

  const removeTimebox = (indexToRemove) =>
    setTimeboxes((prevState) =>
      prevState.filter((_, index) => index !== indexToRemove)
    )

  const updateTimebox = (indexToUpdate, updatedTimebox) => {
    setTimeboxes((prevState) =>
      prevState.map((timebox, index) =>
        index === indexToUpdate ? updatedTimebox : timebox
      )
    )
  }

  const handleCreate = ({ title, totalTimeInMinutes }) => {
    addTimebox({ id: v4(), title, totalTimeInMinutes })
  }

  const handleConfirm = () => {
    const indexToUpdate = timeboxes.findIndex(
      (timebox) => timebox.id === editedTimeboxId
    )

    updateTimebox(indexToUpdate, {
      id: editedTimeboxId,
      title: editedTimeboxTitle,
      totalTimeInMinutes: editedTimeboxTotalTimeInMinutes,
    })

    setEditedTimeboxId(null)
    setEditedTimeboxTitle(null)
    setEditedTimeboxTotalTimeInMinutes(null)
  }

  return (
    <>
      <TimeboxEditor onCreate={handleCreate} />
      {timeboxes.map(({ id, title, totalTimeInMinutes }, index) =>
        editedTimeboxId === id ? (
          <TimeboxEditor
            key={id}
            isEditable
            title={editedTimeboxTitle}
            totalTimeInMinutes={editedTimeboxTotalTimeInMinutes}
            onConfirm={handleConfirm}
            onTitleChange={handleTitleChange}
            onTotalTimeInMinutesChange={handleTotalTimeInMinutesChange}
          />
        ) : (
          <Timebox
            key={id}
            title={title}
            totalTimeInMinutes={totalTimeInMinutes}
            onDelete={() => removeTimebox(index)}
            onEdit={() => {
              setEditedTimeboxId(id)
              setEditedTimeboxTitle(title)
              setEditedTimeboxTotalTimeInMinutes(totalTimeInMinutes)
            }}
          />
        )
      )}
    </>
  )
}

export default TimeboxList

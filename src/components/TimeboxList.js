import { Grid } from '@mui/material'
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

  const [addededTimeboxTitle, setAddedTimeboxTitle] = useState('')
  const [addededTimeboxTotalTimeInMinutes, setAddedTimeboxTotalTimeInMinutes] =
    useState('')

  const [editedTimeboxId, setEditedTimeboxId] = useState('')
  const [editedTimeboxTitle, setEditedTimeboxTitle] = useState('')
  const [editedTimeboxTotalTimeInMinutes, setEditedTimeboxTotalTimeInMinutes] =
    useState('')

  const handleTitleChange = (event) => setEditedTimeboxTitle(event.target.value)

  const handleTotalTimeInMinutesChange = (event) =>
    setEditedTimeboxTotalTimeInMinutes(event.target.value)

  const handleAddedTitleChange = (event) =>
    setAddedTimeboxTitle(event.target.value)

  const handleAddedTotalTimeInMinutesChange = (event) =>
    setAddedTimeboxTotalTimeInMinutes(event.target.value)

  const addTimebox = (timebox) => {
    console.log(timebox, 'timebox')
    setTimeboxes((prevState) => [timebox, ...prevState])
  }

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

  const handleCreate = () =>
    addTimebox({
      id: v4(),
      title: addededTimeboxTitle,
      totalTimeInMinutes: addededTimeboxTotalTimeInMinutes,
    })

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
      <TimeboxEditor
        isEditable
        title={addededTimeboxTitle}
        totalTimeInMinutes={addededTimeboxTotalTimeInMinutes}
        onCreate={handleCreate}
        onTitleChange={handleAddedTitleChange}
        onTotalTimeInMinutesChange={handleAddedTotalTimeInMinutesChange}
      />
      <Grid container columnSpacing={1}>
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
            <Grid key={id} item xs={3}>
              <Timebox
                title={title}
                totalTimeInMinutes={totalTimeInMinutes}
                onDelete={() => removeTimebox(index)}
                onEdit={() => {
                  setEditedTimeboxId(id)
                  setEditedTimeboxTitle(title)
                  setEditedTimeboxTotalTimeInMinutes(totalTimeInMinutes)
                }}
              />
            </Grid>
          )
        )}
      </Grid>
    </>
  )
}

export default TimeboxList

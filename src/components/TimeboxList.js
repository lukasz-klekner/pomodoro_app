import { useState } from 'react'
import { v4 } from 'uuid'

import Timebox from './Timebox'
import TimeboxCreator from './TimeboxCreator'

const TimeboxList = () => {
  const [timeboxes, setTimeboxes] = useState([
    { id: 'a1', title: 'Uczę się Reacta', totalTimeInMinutes: '20' },
    { id: 'a2', title: 'Uczę się Next.js', totalTimeInMinutes: '25' },
    { id: 'a3', title: 'Uczę się Tailwind CSS', totalTimeInMinutes: '10' },
  ])

  const addTimebox = (timebox) =>
    setTimeboxes((prevState) => [timebox, ...prevState])

  const removeTimebox = (indexToRemove) =>
    setTimeboxes((prevState) =>
      prevState.filter((_, index) => index !== indexToRemove)
    )

  const updateTimebox = (indexToUpdate, updatedTimebox) =>
    setTimeboxes((prevState) =>
      prevState.map((timebox, index) =>
        index === indexToUpdate ? updatedTimebox : timebox
      )
    )

  const handleCreate = () => {
    addTimebox({ id: v4(), title: 'nowy timebox', totalTimeInMinutes: '2' })
  }

  return (
    <>
      <TimeboxCreator onCreate={handleCreate} />
      {timeboxes.map(({ id, title, totalTimeInMinutes }, index) => (
        <Timebox
          key={id}
          title={title}
          totalTimeInMinutes={totalTimeInMinutes}
          onDelete={() => removeTimebox(index)}
          onEdit={() =>
            updateTimebox(index, {
              id,
              title: 'edited timebox',
              totalTimeInMinutes: '22',
            })
          }
        />
      ))}
    </>
  )
}

export default TimeboxList

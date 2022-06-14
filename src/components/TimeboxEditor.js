import classNames from 'classnames'

import Button from './Button'

const TimeboxEditor = ({
  isEditable,
  onConfirm,
  onTitleChange,
  onTotalTimeInMinutesChange,
  title,
  totalTimeInMinutes,
}) => {
  const timeboxEditorClassNames = classNames('TimeboxEditor', {
    inactive: !isEditable,
  })

  return (
    <div className={timeboxEditorClassNames}>
      <label>
        Co robisz?
        <input
          disabled={!isEditable}
          type='text'
          value={title}
          onChange={onTitleChange}
        />
      </label>
      <br />
      <label>
        Ile minut?
        <input
          disabled={!isEditable}
          type='number'
          value={totalTimeInMinutes}
          onChange={onTotalTimeInMinutesChange}
        />
      </label>
      <br />
      <Button disabled={!isEditable} onClick={onConfirm}>
        Zatwierdź zmiany!
      </Button>
    </div>
  )
}

export default TimeboxEditor

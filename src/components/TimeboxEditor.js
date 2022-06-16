import classNames from 'classnames'
import PropTypes from 'prop-types'

import Button from './Button'

const TimeboxEditor = ({
  isEditable,
  onConfirm,
  onCreate,
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
      <Button disabled={!isEditable} onClick={onConfirm || onCreate}>
        {onConfirm ? 'Zatwierdź zmiany!' : 'Dodaj timebox!'}
      </Button>
    </div>
  )
}

TimeboxEditor.propTypes = {
  isEditable: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func,
  onCreate: PropTypes.func,
  onTitleChange: PropTypes.func.isRequired,
  onTotalTimeInMinutesChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  totalTimeInMinutes: PropTypes.string.isRequired,
}

export default TimeboxEditor

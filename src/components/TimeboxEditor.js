const TimeboxEditor = ({
  onTitleChange,
  onTotalTimeInMinutesChange,
  title,
  totalTimeInMinutes,
}) => (
  <div className='TimeboxEditor'>
    <label>
      Co robisz?
      <input type='text' value={title} onChange={onTitleChange} />
    </label>
    <br />
    <label>
      Ile minut?
      <input
        type='number'
        value={totalTimeInMinutes}
        onChange={onTotalTimeInMinutesChange}
      />
    </label>
    <br />
    <button>Zacznij!</button>
  </div>
)

export default TimeboxEditor

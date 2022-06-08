const TimeboxEditor = () => (
  <div className='TimeboxEditor'>
    <label>
      Co robisz?
      <input type='text' value='Uczę się Reacta' />
    </label>
    <br />
    <label>
      Ile minut?
      <input type='number' value='25' />
    </label>
    <br />
    <button>Zacznij!</button>
  </div>
)

export default TimeboxEditor

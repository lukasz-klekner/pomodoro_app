const TimeboxCreator = ({ onCreate }) => (
  <div className={`TimeboxEditor`}>
    <label>
      Co robisz?
      <input />
    </label>
    <br />
    <label>
      Ile minut?
      <input />
    </label>
    <br />
    <button onClick={onCreate}>Dodaj timebox!</button>
  </div>
)

export default TimeboxCreator

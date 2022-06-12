const Timebox = ({ title, totalTimeInMinutes, onDelete, onEdit }) => (
  <div className='Timebox'>
    <h3>
      {title} - {totalTimeInMinutes}
      <br />
      <button onClick={onDelete}>Usuń</button>
      <button onClick={onEdit}>Zmień</button>
    </h3>
  </div>
)

export default Timebox

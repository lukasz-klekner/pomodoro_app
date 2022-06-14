import Button from './Button'

const Timebox = ({ title, totalTimeInMinutes, onDelete, onEdit }) => (
  <div className='Timebox'>
    <h3>
      {title} - {totalTimeInMinutes}
      <br />
      <Button onClick={onDelete}>Usuń</Button>
      <Button onClick={onEdit} variant='secondary'>
        Zmień
      </Button>
    </h3>
  </div>
)

export default Timebox

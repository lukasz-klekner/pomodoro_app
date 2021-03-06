import styled from '@emotion/styled'
import { Card } from '@mui/material'
import PropTypes from 'prop-types'

import Button from './Button'

const StyledCard = styled(Card)`
  max-width: 400px;
  border: 1px solid gray;
  border-radius: 20px;
  padding: 4px;
  margin-bottom: 10px;
  background-color: #ffaaaa;
`

const Timebox = ({ title, totalTimeInMinutes, onDelete, onEdit }) => (
  <StyledCard>
    <h3>
      {title} - {totalTimeInMinutes}
      <br />
      <Button onClick={onDelete}>Usuń</Button>
      <Button onClick={onEdit} variant='secondary'>
        Zmień
      </Button>
    </h3>
  </StyledCard>
)

Timebox.propTypes = {
  title: PropTypes.string.isRequired,
  totalTimeInMinutes: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default Timebox

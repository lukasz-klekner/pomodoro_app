import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const StyledButton = styled.button`
  font-size: 16px;
  margin-top: 10px;
  margin-left: 10px;
  padding: 5px;
  border-radius: 20px;
  color: white;
  background-color: ${({ variant }) =>
    variant === 'primary' ? 'black' : 'green'};
`

const Button = ({ children, disabled, onClick, variant }) => (
  <StyledButton disabled={disabled} onClick={onClick} variant={variant}>
    {children}
  </StyledButton>
)

Button.defaultProps = {
  variant: 'primary',
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
}

export default Button

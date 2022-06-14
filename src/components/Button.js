const Button = ({ children, disabled, onClick, variant = 'primary' }) => {
  const buttonStyles = {}

  if (variant === 'primary') {
    buttonStyles['background-color'] = 'black'
  }

  if (variant === 'secondary') {
    buttonStyles['background-color'] = 'green'
  }

  return (
    <button disabled={disabled} onClick={onClick} style={buttonStyles}>
      {children}
    </button>
  )
}

export default Button

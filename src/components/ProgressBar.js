import PropTypes from 'prop-types'
import classNames from 'classnames'

const ProgressBar = ({
  big,
  className,
  color,
  percent,
  trackRemaining = false,
}) => {
  const progressClassNames = classNames('progress', className, {
    'progress--big': big,
    'progress--color-red': color === 'red',
  })

  const progressBarClassNames = classNames('progress__bar', {
    'progress__bar--color-green': color === 'green',
  })

  return (
    <div
      className={progressClassNames}
      style={{
        display: 'flex',
        justifyContent: trackRemaining ? 'flex-end' : 'flex-start',
      }}
    >
      <div
        className={progressBarClassNames}
        style={{ width: `${trackRemaining ? 100 - percent : percent}%` }}
      ></div>
    </div>
  )
}

ProgressBar.defaultProps = {
  big: false,
  color: 'black',
}

ProgressBar.propTypes = {
  big: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.oneOf(['green', 'red', 'black']),
  percent: PropTypes.number.isRequired,
  trackRemaining: PropTypes.bool,
}

export default ProgressBar

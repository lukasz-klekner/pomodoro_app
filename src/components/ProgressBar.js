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

export default ProgressBar

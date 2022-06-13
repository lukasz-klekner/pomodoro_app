const ProgressBar = ({ className, percent, trackRemaining = false }) => (
  <div
    className={`progress progress--big ${className}`}
    style={{
      display: 'flex',
      justifyContent: trackRemaining ? 'flex-end' : 'flex-start',
    }}
  >
    <div
      className='progress__bar progress__bar--color-green'
      style={{ width: `${trackRemaining ? 100 - percent : percent}%` }}
    ></div>
  </div>
)

export default ProgressBar

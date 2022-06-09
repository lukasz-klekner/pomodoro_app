const ProgressBar = ({ className, percent, trackRemaining = false }) => (
  <div
    className={`ProgressBar ${className}`}
    style={{
      display: 'flex',
      justifyContent: trackRemaining ? 'flex-end' : 'flex-start',
    }}
  >
    <div
      style={{ width: `${trackRemaining ? 100 - percent : percent}%` }}
    ></div>
  </div>
)

export default ProgressBar

const clamp = (min, value, max) => Math.min(Math.max(min, value), max)

const prefixWithZeros = (value, amountOfZeros) =>
  value.toString().padStart(amountOfZeros, '0')

const getMinutesSecondsAndMilisecondsFromDurationInSeconds = (
  durationInMiliseconds
) => {
  const minutes = Math.floor(durationInMiliseconds / (60 * 1000))
  const miliseconds = Math.floor(durationInMiliseconds % 1000)
  const seconds = Math.floor((durationInMiliseconds / 1000) % 60)

  return {
    minutes,
    miliseconds,
    seconds,
  }
}

export {
  clamp,
  getMinutesSecondsAndMilisecondsFromDurationInSeconds,
  prefixWithZeros,
}

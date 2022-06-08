export const convertTime = (hours, minutes, seconds, miliseconds) => {
  const convertedTime = {}

  if (hours >= 0 && hours < 10) {
    convertedTime.hours = `0${hours}`
  } else {
    convertedTime.hours = hours
  }

  if (minutes >= 0 && minutes < 10) {
    convertedTime.minutes = `0${minutes}`
  } else {
    convertedTime.minutes = minutes
  }

  if (seconds >= 0 && seconds < 10) {
    convertedTime.seconds = `0${seconds}`
  } else {
    convertedTime.seconds = seconds
  }

  if (miliseconds >= 0 && miliseconds < 10) {
    convertedTime.miliseconds = `00${miliseconds}`
  } else if (miliseconds >= 10 && miliseconds < 100) {
    convertedTime.miliseconds = `0${miliseconds}`
  } else {
    convertedTime.miliseconds = miliseconds
  }

  return convertedTime
}

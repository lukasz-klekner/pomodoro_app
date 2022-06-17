import { getMinutesSecondsAndMilisecondsFromDurationInSeconds } from '../../utils/helpers'

describe('getMinutesSecondsAndMilisecondsFromDurationInSeconds', () => {
  describe('for durations shorter than one minute', () => {
    it('works for 300 miliseconds', () => {
      expect(
        getMinutesSecondsAndMilisecondsFromDurationInSeconds(300)
      ).toMatchObject({
        minutes: 0,
        seconds: 0,
        miliseconds: 300,
      })
    })

    it('works for 30 seconds', () => {
      expect(
        getMinutesSecondsAndMilisecondsFromDurationInSeconds(30000)
      ).toMatchObject({
        minutes: 0,
        seconds: 30,
        miliseconds: 0,
      })
    })

    it('returns 300 miliseconds for 300 milisecond-duration', () => {
      expect(
        getMinutesSecondsAndMilisecondsFromDurationInSeconds(300).miliseconds
      ).toBe(300)
    })

    it('returns 0 seconds for 300 milisecond-duration', () => {
      expect(
        getMinutesSecondsAndMilisecondsFromDurationInSeconds(300).seconds
      ).toBe(0)
    })

    it('returns 0 minutes for 300 milisecond-duration', () => {
      expect(
        getMinutesSecondsAndMilisecondsFromDurationInSeconds(300).minutes
      ).toBe(0)
    })
  })

  describe('for durations longer or equal to minute', () => {
    it('returns 1 minutes for 60 seconds', () => {
      expect(
        getMinutesSecondsAndMilisecondsFromDurationInSeconds(60000).minutes
      ).toBe(1)
    })

    it('returns 0 seconds for 1 minute-duration', () => {
      expect(
        getMinutesSecondsAndMilisecondsFromDurationInSeconds(60000).seconds
      ).toBe(0)
    })

    it('returns 0 miliseconds for 1 minute-duration', () => {
      expect(
        getMinutesSecondsAndMilisecondsFromDurationInSeconds(60000).miliseconds
      ).toBe(0)
    })

    it('returns 2 minutes 20 seconds and 5 miliseconds for 140005 miliseconds-duration', () => {
      expect(
        getMinutesSecondsAndMilisecondsFromDurationInSeconds(140005)
      ).toMatchObject({
        minutes: 2,
        seconds: 20,
        miliseconds: 5,
      })
    })
  })
})

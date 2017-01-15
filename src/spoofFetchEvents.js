import spoofEventsData from './spoofEventsData'

const spoofFetchEvents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(spoofEventsData)
    }, 1000)
  })
}

export default spoofFetchEvents;
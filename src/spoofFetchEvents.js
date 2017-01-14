import spoofEventsData from './spoofEventsData'

const spoofFetchEvents = () => {
  return new Promise((resolve) => {
    resolve(spoofEventsData);
  })
}

export default spoofFetchEvents;
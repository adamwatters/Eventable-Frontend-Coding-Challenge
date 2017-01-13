const requestHeaders = new Headers({
  'Authorization': 'Token 7761e7e3b25a1d6d315901fcd7180d971f77ea2e',
});

const request = {
  method: 'GET',
  headers: requestHeaders,
};
  
const eventsRequest = new Request('https://api.eventable.com/v1/events/', request);

const fetchEvents = () => {
  return fetch(eventsRequest).then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        console.log('Network response was not ok.');
      }
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    })
}




export default fetchEvents;



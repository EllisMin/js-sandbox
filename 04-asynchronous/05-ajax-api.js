// AJAX: Asynchronous Javascript And XML
//   allows to asynchronously communicate with remote servers
//     ex) HTTP Request(GET POST, etc)

// API: Application Programming Interface
//   piece of SW that can be used in other SW to allow app to talk to each other
//    ex) Your own API: data coming from your own server
//    ex) 3rd-party API:
//        Google Maps, Embed Youtube video, Weather, Movies, send email/SMS, etc

// Using a weather API
// Fetch; returns a promise

// Fetch with promise
function getWeather(woeid) {
  const id = woeid;
  fetch(
    `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}`
  )
    .then(res => {
      //   console.log(res); // Response
      // also returns promise
      return res.json();
    })
    .then(data => {
      //   console.log(data); // Entire data
      const today = data.consolidated_weather[0];
      const minTemp = Math.round(today.min_temp * 100) / 100;
      const maxTemp = Math.round(today.max_temp * 100) / 100;

      console.log(
        `Temp in ${data.title} is between ${minTemp} and ${maxTemp}.`
      );
    })
    .catch(e => console.log(e));
}

// getWeather(2443945); // Madison
// getWeather(23424868); // Seoul
getWeather(2487956); // San Francisco
getWeather(44418); // London

// AJAX call with async/await instead of using promises

// getWeather(2443945); // Madison
// getWeather(23424868); // Seoul
getWeatherAW(2487956); // San Francisco
getWeatherAW(44418); // London

async function getWeatherAW(woeid) {
  try {
    const id = woeid;
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}`
    );
    const data = await res.json();
    const today = data.consolidated_weather[0];
    const tomorrow = data.consolidated_weather[1];

    const minTemp = getMinTemp(today);
    const maxTemp = getMaxTemp(today);

    const minTemp2 = getMinTemp(tomorrow);
    const maxTemp2 = getMaxTemp(tomorrow);

    console.log(
      `Today: temp in ${data.title} is between ${minTemp} and ${maxTemp}.`
    );
    console.log(
      `Tomorrow: temp in ${data.title} is between ${minTemp2} and ${maxTemp2}.`
    );
  } catch (e) {
    console.log(e);
  }
}

function getMinTemp(when) {
  return Math.round(when.min_temp * 100) / 100;
}
function getMaxTemp(when) {
  return Math.round(when.max_temp * 100) / 100;
}

function updateTime() {
  let cities = [
    { id: "current-city", timeZone: currentTimeZone },
    { id: "los-angeles", timeZone: "America/Los_Angeles" },
    { id: "johannesburg", timeZone: "Africa/Johannesburg" },
    { id: "mumbai", timeZone: "Asia/Calcutta" },
    { id: "tokyo", timeZone: "Asia/Tokyo" },
    { id: "sao-paulo", timeZone: "Brazil/East" },
    { id: "new-york", timeZone: "America/New_York" },
    { id: "london", timeZone: "Europe/London" },
    { id: "dubai", timeZone: "Asia/Dubai" },
    { id: "singapore", timeZone: "Asia/Singapore" },
    { id: "sydney", timeZone: "Australia/Sydney" },
  ];

  cities.forEach(({ id, timeZone }) => {
    let cityElement = document.querySelector(`#${id}`);
    let dateElement = cityElement.querySelector(".date");
    let timeElement = cityElement.querySelector(".time");
    let cityTime = moment().tz(timeZone);

    dateElement.innerHTML = cityTime.format("dddd, D MMMM, YYYY");
    timeElement.innerHTML = cityTime.format("h:mm:ss[<small>] A[</small>]");
  });
}

function showCity(event) {
  let cities = {
    current: "current-city",
    losAngeles: "los-angeles",
    johannesburg: "johannesburg",
    mumbai: "mumbai",
    tokyo: "tokyo",
    saoPaulo: "sao-paulo",
  };

  let selected = cities[event.target.value];

  Object.values(cities).forEach((id) => {
    document.querySelector(`#${id}`).classList.add("hidden");
  });

  if (selected) {
    document.querySelector(`#${selected}`).classList.remove("hidden");
  }
}

let currentTimeZone = moment.tz.guess();
let currentCityElement = document.querySelector("#current-city");
let currentCityH2 = currentCityElement.querySelector("h2");
currentCityName = currentTimeZone.replace("_", " ").split("/").at(-1);
currentCityH2.innerHTML = `${currentCityName} 🏠`;

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", showCity);

updateTime();
setInterval(updateTime, 1000);

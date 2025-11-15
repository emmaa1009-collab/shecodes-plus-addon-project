function updateTime() {
  let cities = [
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

function addCity(event) {
  let cities = {
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

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", addCity);

updateTime();
setInterval(updateTime, 1000);

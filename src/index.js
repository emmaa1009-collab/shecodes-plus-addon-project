function updateTime() {
  //New York
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("dddd, D MMMM, YYYY");
  newYorkTimeElement.innerHTML = `${newYorkTime.format(
    "h:mm:ss[<small>] A[</small>]"
  )}`;

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("dddd, D MMMM, YYYY");
  sydneyTimeElement.innerHTML = `${sydneyTime.format(
    "h:mm:ss[<small>] A[</small>]"
  )}`;
}

function addCity(event) {
  let blankElement = document.querySelector("#blank-city");
  let blankH2Element = blankElement.querySelector("h2");
  let blankDateElement = blankElement.querySelector(".date");
  let blankTimeElement = blankElement.querySelector(".time");

  let cityTimeZone = event.target.value;
  let cityName = "";
  let cityTime = "";

  if (event.target.value.length > 0) {
    blankElement.classList.remove("hidden");
    blankH2Element.innerHTML = cityName;
    blankDateElement.innerHTML = `Hey`;
    blankTimeElement.innerHTML = `You`;
    alert(`${cityTimeZone}`);
  } else {
    blankElement.classList.add("hidden");
  }
}

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", addCity);

updateTime();
setInterval(updateTime, 1000);

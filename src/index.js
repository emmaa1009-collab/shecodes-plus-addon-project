function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("dddd, D MMMM, YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
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

updateTime();
setInterval(updateTime, 1000);

function showCityCurrentTime(event) {
  let currentTime = "";
  let timeZone = "";

  if (event.target.value.length > 0) {
    if (event.target.value === "paris") {
      timeZone = "Europe/Paris";
    }
    if (event.target.value === "tokyo") {
      timeZone = "Asia/Tokyo";
    }
    if (event.target.value === "sydney") {
      timeZone = "Australia/Sydney";
    }
  }

  currentTime = moment().tz(timeZone).format("dddd, MMMM d, YYYY h:mm A");
  alert(`It is ${currentTime} in ${timeZone}`);
}

//let citiesSelect = document.querySelector("#cities");
//citiesSelect.addEventListener("change", showCityCurrentTime);

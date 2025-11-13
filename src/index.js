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

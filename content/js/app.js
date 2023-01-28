// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let searchInput = document.querySelector(".search-box"),
  cityDiv = document.querySelector(".city"),
  dateDiv = document.querySelector(".date"),
  tempDiv = document.querySelector(".temp"),
  weatherDiv = document.querySelector(".weather"),
  highLowDiv = document.querySelector(".hi-low");

let apiData = {
  url: `https://api.openweathermap.org/data/2.5/weather?q=`,
  key: `9b81d3e4265e2d1a5b8b73f1591ec139`,
};

function getData(countryName) {
  fetch(`${apiData.url}${countryName}&appid=${apiData.key}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
      showData(data);
    })
    .catch(res => {
      alert("There is no such country (404)");
      searchInput.value = "";
    });
};

function showData(data) {
  console.log(data.sys.country);
  cityDiv.innerHTML = `${data.name}, ${data.sys.country}`;
//   dateDiv.innerHTML = data.name;
  tempDiv.innerHTML = `${Math.floor(data.main.temp - 273.15)} °c`;
  weatherDiv.innerHTML = `${data.weather[0].main}`;
  highLowDiv.innerHTML = `${Math.floor(data.main.temp_max - 273.15)} °c / ${Math.floor(data.main.temp_min - 273.15)} °c`;
};

function eventSearchInput(event) {
  if (event.keyCode === 13) {
    const searchInputValue = searchInput.value;
    getData(searchInputValue);
  }
};
searchInput.addEventListener("keypress", eventSearchInput);

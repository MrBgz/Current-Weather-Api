let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

// Function to fetch weather details from api and display them

let getWeather = () => {
  let cityValue = cityRef.value;
  //   If input field is empty
  if (cityValue.length == 0) {
    result.innerHTML = `<h3 class='msg">Please enter a city name</h3>`;
  }
  //   if input field is not empty
  else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    cityRef.value = "";
    fetch(url)
      .then((response) => response.json())
      //   If city is valid
      .then((data) => {
        console.log(data);
        console.log(data.weather);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        result.innerHTML = `
          <h2> ${data.name}</h2>
          <h4 class="weather">${data.weather[0].main}</h4>
          <h4 class ="desc">${data.weather[0].description}
         
          <h1>${data.main.temp} &#176;</h1>
          <div class="temp-container">
            <div>
              <h4 class="title">min</h4> 
              <h4 class="temp">${data.main.temp_min}</h4>
            </div>
            <div>
              <h4 class="title">max</h4> 
              <h4 class="temp">${data.main.temp_max}</h4>
            </div>
          </div>
        `;
      })
      // If city name is not found
      .catch(() => {
        result.innerHTML = `<h3 class="msg">City not found</h3>`;
      });
  }
};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);

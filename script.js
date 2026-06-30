async function getWeather() {
  let city = document.getElementById("city").value;
  let apiKey = "f513d04c770eaf6a54f7f0ca5dd51a18";

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  let response = await fetch(url);
  let data = await response.json();

  if (data.cod !== 200) {
    document.getElementById("result").innerHTML =
      "❌ " + data.message;
    return;
  }

  let output = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Weather: ${data.weather[0].main}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;

  document.getElementById("result").innerHTML = output;
}
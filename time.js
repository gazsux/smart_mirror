//-----------------------------------------------------------
//    Time
//-----------------------------------------------------------
function time() {

    var date = new Date();

    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var amPM;

    if (hour > 12) {
      hour = hour - 12;
      amPM = "PM";
    }
    else
      amPM = "AM";

    if (minutes < 10)
      minutes = "0" + minutes;

    if (seconds < 10)
      seconds = "0" + seconds;

    document.getElementById("time").innerHTML = hour + ":" + minutes + ":" + seconds + amPM;

    setTimeout(time, 500);

}

  function startTime() {
    setInterval( function () { time() }, 500);
  } startTime();

//-----------------------------------------------------------
//      Date
//-----------------------------------------------------------

function date() {

    var date = new Date();

    var day = date.getDate();

    document.getElementById("date").innerHTML = day;
}

  function startDate() {
    setInterval( function () { date() }, 500);
  } startDate();

//---

function day() {

  var date = new Date();

  var day = date.getDay();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  day = days[day];

  document.getElementById("day").innerHTML = day;

}

  function startDay() {
    setInterval( function () { day() }, 500);
  } startDay();

//---

function month() {

  var date = new Date();

  var month = date.getMonth();
  var months = ["January", "February", "March", "April", "May", "June", "July",
                  "August", "September", "October", "November", "December"];

  month = months[month];

  document.getElementById("month").innerHTML = month;
}

  function startMonth() {
    setInterval( function () { month() }, 500);
  } startMonth();

//-----------------------------------------------------------
//    Weather
//-----------------------------------------------------------

function temp() {

  var weatherData = "http://api.openweathermap.org/data/2.5/weather?q=Endicott,us&appid=5068bdb59997b9b9f98d00aedf1cc12f";

  $.getJSON(weatherData,function(data){

            var temp = Math.trunc(data.main.temp - 273.15) * 9/5 + 32;
            var tempMax = Math.trunc(data.main_max - 273.15) * 9/5 + 32;
            var tempMin = Math.trunc(data.main_min - 273.15) * 9/5 + 32;

            document.getElementById('temp').innerHTML = temp;
            document.getElementById('tempMax').innerHTML = tempMax;
            document.getElementById('tempMin').innerHTML = tempMin;

  });
}

  function startTemp() {
    setInterval( function () { temp() }, 500);
  } startTemp();

//---

function icon {

  var weatherData = "http://api.openweathermap.org/data/2.5/weather?q=Endicott,us&appid=5068bdb59997b9b9f98d00aedf1cc12f";

  $.getJSON(weatherData,function(data){

    var icon = data.weather[0].icon;

    if (icon = "01d"){}
  }
}

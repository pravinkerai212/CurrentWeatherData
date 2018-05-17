$(document).ready(function(){
  var lon;
  var lat;
  var fTemp;
  var cTemp;
  var tempSwap = true;
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      // create api with geolocation
      var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&APPID=40e36295c4d28d943805e08da41dd084';

      $.getJSON(api, function(data){
      // JSON call for open weather api
        var weatherType = data.weather[0].description;
        var kTemp = data.main.temp;
        var windspeed = data.wind.speed;
        var city = data.name;

        // temperature in Kelvin
        fTemp = ((kTemp)*(9/5)-459.67).toFixed(1);
        cTemp = (kTemp-273).toFixed(1);

        console.log(city);
        $("#city").html(city);
        $("#weatherType").html(weatherType);
        $("#fTemp").html(fTemp + " &#8457;");
        windspeed = (3.6*(windspeed)).toFixed(1);
        $("#windspeed").html(windspeed + " KPH");
        $("#fTemp").click(function(){
          if(tempSwap === false){
            $("#fTemp").html(fTemp + " &#8457;");
            tempSwap = true;
          } else {
            $("#fTemp").html(cTemp + " &#8451;");
            tempSwap = false;
          }
          if(fTemp < 80){

          } else if()
        });
      });
    });
  }
});
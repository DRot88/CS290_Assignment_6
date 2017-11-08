var apiKey = '8c1bf68310798632c7b881b5153e6542';

      document.addEventListener('DOMContentLoaded', bindZip);
      document.addEventListener('DOMContentLoaded', bindCity);

      function bindZip() {
        document.getElementById('zipSubmit').addEventListener('click', function(event){
          var req = new XMLHttpRequest();
          var zipCode = document.getElementById('zipCode').value;
          req.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&units=imperial&appid=" + apiKey, true);
          req.send(null);
          req.addEventListener('load',function() {
            if(req.status >= 200 && req.status < 400) {
              console.log(JSON.parse(req.responseText));
              var obj = JSON.parse(req.responseText);
              var sunrise = new Date(obj.sys.sunrise * 1000).toString();
              var sunset = new Date(obj.sys.sunset * 1000).toString();
              document.getElementById('cityResponse').textContent = obj.name;
              document.getElementById('temperatureResponse').textContent = obj.main.temp + ' F';
              document.getElementById('humidityResponse').textContent = obj.main.humidity + '%';
              document.getElementById('sunriseResponse').textContent = sunrise;
              document.getElementById('sunsetResponse').textContent = sunset;
            } else {
              console.log("Error in network request: " + req.statusText);
            }
          });
          event.preventDefault();
        });
      }

      function bindCity() {
        document.getElementById('citySubmit').addEventListener('click', function(event){
          var req = new XMLHttpRequest();
          var city = document.getElementById('city').value;
          req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey, true);
          req.send(null);
          req.addEventListener('load',function() {
            if (req.status >= 200 && req.status < 400) {
              console.log(JSON.parse(req.responseText));
              var obj = JSON.parse(req.responseText);
              var sunrise = new Date(obj.sys.sunrise * 1000).toString();
              var sunset = new Date(obj.sys.sunset * 1000).toString();
              document.getElementById('cityResponse').textContent = obj.name;
              document.getElementById('temperatureResponse').textContent = obj.main.temp + ' F';
              document.getElementById('humidityResponse').textContent = obj.main.humidity + '%';    
              document.getElementById('sunriseResponse').textContent = sunrise;
              document.getElementById('sunsetResponse').textContent = sunset;
            } else {
              console.log("Error in network request: " + req.statusText);
            }
          });
          event.preventDefault();             
        });
      }      
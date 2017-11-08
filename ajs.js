      document.addEventListener('DOMContentLoaded', ajs);

      function ajs() {
        document.getElementById('dataSubmit').addEventListener('click', function(event){
          var req = new XMLHttpRequest();
          var url = "http://httpbin.org/post";
          req.open("POST", url, true);
          req.setRequestHeader('Content-Type', 'application/json');
          req.addEventListener('load',function() {
            if (req.status >= 200 && req.status <= 400) {
              var response = JSON.parse(req.responseText);
              console.log(response);
              document.getElementById('userDataResponse').textContent = response.data;              
              document.getElementById('submittedToURL').textContent =  response.headers['Host'];            
              document.getElementById('contentType').textContent = response.headers['Content-Type'];               
            } else {
              console.log("Error in network request: " + req.statusText);
            }});
          req.send(JSON.stringify(document.getElementById('userString').value));
          event.preventDefault();
        });
      };
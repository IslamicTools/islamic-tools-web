function geoFindMe() {
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
      function successElevationGET() {
        var dataElevation = JSON.parse(this.responseText); //parse the string to JSON
        var elevation = dataElevation.resourceSets[0].resources[0].elevations[0]
        console.log(elevation);

        // function to handle success
        function successPray() {
            var dataPray = JSON.parse(this.responseText); //parse the string to JSON
            console.log(dataPray);
            document.getElementById("fajr").innerHTML = dataPray.results.datetime[0].times.Fajr;
            document.getElementById("dhuhr").innerHTML = dataPray.results.datetime[0].times.Dhuhr;
            document.getElementById("asr").innerHTML = dataPray.results.datetime[0].times.Asr;
            document.getElementById("maghrib").innerHTML = dataPray.results.datetime[0].times.Maghrib;
            document.getElementById("isha").innerHTML = dataPray.results.datetime[0].times.Isha;
        }

        // function to handle error
        function errorPray(err) {
        console.log('Request Failed', err); //error details will be in the "err" object
    }

    var xhr = new XMLHttpRequest(); //invoke a new instance of the XMLHttpRequest
    xhr.onload = successPray; // call success function if request is successful
    xhr.onerror = errorPray;  // call error function if request failed
    xhr.open('GET', 'https://api.pray.zone/v2/times/today.json?longitude=' + longitude + '&latitude=' + latitude + '&elevation=' + elevation); // open a GET request
    xhr.send(); // send the request to the server.
    }

    // function to handle error
    function errorElevationGET(err) {
        console.log('Request Failed', err); //error details will be in the "err" object
    }

    var xhr = new XMLHttpRequest(); //invoke a new instance of the XMLHttpRequest
    xhr.onload = successElevationGET; // call success function if request is successful
    xhr.onerror = errorElevationGET;  // call error function if request failed
    xhr.open('GET', 'https://dev.virtualearth.net/REST/v1/Elevation/List?points='+ latitude +','+ longitude +'&key=Am84IwINEt8U-sPTGx0CG-IcNSda6x4sDynmmcgQNpZofZkm25j2PU8Ji_xnLupr'); // open a GET request
    xhr.send(); // send the request to the server.
    }
  
    function error() {
      console.log('Unable to retrieve your location');
    }
  
    if(!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      console.log('Locating…');
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
  document.querySelector('#locate').addEventListener('click', geoFindMe)
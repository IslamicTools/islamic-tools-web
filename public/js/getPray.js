// Get Prayer Times with Geolocation API

function getPrayTimesGeo(latitude, longitude) {
// Get Elevation from BING
axios.get(`https://dev.virtualearth.net/REST/v1/Elevation/List?points=${latitude},${longitude}&key=Am84IwINEt8U-sPTGx0CG-IcNSda6x4sDynmmcgQNpZofZkm25j2PU8Ji_xnLupr`)
  .then(function (elevResponse) {
    let elevation = elevResponse.data.resourceSets[0].resources[0].elevations[0]
    console.log(elevResponse)
    // Get Prayer times
    axios.get(`https://api.pray.zone/v2/times/today.json?longitude=${longitude}&latitude=${latitude}&elevation=${elevation}&timeformat=1`)
  .then(function (response) {
    // Display Prayer times
    console.log(response);
    let dataPray = response.data.results.datetime[0].times
    document.getElementById("fajr").innerHTML = dataPray.Fajr;
    document.getElementById("dhuhr").innerHTML = dataPray.Dhuhr;
    document.getElementById("asr").innerHTML = dataPray.Asr;
    document.getElementById("maghrib").innerHTML = dataPray.Maghrib;
    document.getElementById("isha").innerHTML = dataPray.Isha;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

// Get Prayer Times with Geolocation IP Address

function getPrayTimesIP() {
  function text(url) {
    return fetch(url).then(res => res.text());
  }
  
  text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
    let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
    let ip = data.match(ipRegex)[0];

// Make a request to Prayer times API
axios.get(`https://api.pray.zone/v2/times/today.json?ip=${ip}&timeformat=1`)
  .then(function (response) {
    // handle success
    console.log(response);
    let dataPray = response.data.results.datetime[0].times
    document.getElementById("fajr").innerHTML = dataPray.Fajr;
    document.getElementById("dhuhr").innerHTML = dataPray.Dhuhr;
    document.getElementById("asr").innerHTML = dataPray.Asr;
    document.getElementById("maghrib").innerHTML = dataPray.Maghrib;
    document.getElementById("isha").innerHTML = dataPray.Isha;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  });
}

// Geolocation API

function geoFindMe() {
  var geoOptions = {
    enableHighAccuracy: true
  }

  function geoSuccess(position) {
    const latitudeGeo  = position.coords.latitude;
    const longitudeGeo = position.coords.longitude;
    getPrayTimesGeo(latitudeGeo, longitudeGeo)
  }

  function geoError() {
    console.log('Unable to retrieve your location');
    console.log('Falling back to IP Geolocation...')
    getPrayTimesIP()
  }

  if(!navigator.geolocation) {
    console.log('Geolocation is not supported by your browser');
    console.log('Falling back to IP Geolocation...')
    getPrayTimesIP()
  } else {
    console.log('Locating…');
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
  }

}
  
document.querySelector('#locate').addEventListener('click', geoFindMe)
let JEmap4 = L.map('leafletwebmap4').setView([29.9511, -90.0715], 6)
basemap = ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
L.tileLayer(basemap).addTo(JEmap4)

myGeojsonStyle = function (state) {
  let auth = state.properties.Auth
  let stateColor = 'Olive'
  if (auth== 'Franchise' ) {stateColor = 'Blue'}
  let myStyle = {
    color: stateColor,
    weight: 1,
    }
    return myStyle
}

function createPopup (state, statelayer) {
  let age = state.properties.Auth
  statelayer.bindPopup('Zipcode ' + name + ': ' + age + '<br>National average: 38')
}

myGeojsonOptions = {
  style: myGeojsonStyle,
  onEachFeature: createPopup
}

L.geoJSON(foodtruck, myGeojsonOptions).addTo(JEmap4)

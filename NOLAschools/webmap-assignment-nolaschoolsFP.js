let JEMapFP = L.map('leafletwebmapFP').setView([29.9511, -90.0715], 8)

let JEColorMap1 = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(JEMapFP)
let JELightMap1 = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png').addTo(JEMapFP)
let JEDarkMap1 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(JEMapFP)

let myBasemaps = {
  'Color Basemap': JEColorMap1,
  'Light Basemap': JELightMap1,
  'Dark Basemap': JEDarkMap1
}

let JEMarkerIcon = L.icon({
  iconUrl: 'point.png',
  iconSize: [38, 95], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})

function createPopup (state, statelayer) {
  let age = state.properties.Auth
  statelayer.bindPopup('Zipcode ' + name + ': ' + age + '<br>National average: 38')
}

JEGeojsonStyle = function (state) {
  let ownership = state.properties.ownership
  let stateColor = 'blue'
  if (ownership== 'ARCH' ) {stateColor = 'pink'}
  let myStyle = {
    color: stateColor,
    weight: 1,
    }
    return myStyle
}


JEGeojsonOptions = {
  style: JEGeojsonStyle,
}

L.control.layers(myBasemaps).addTo(JEMapFP)
L.geoJSON(nolaschools, JEGeojsonOptions).addTo(JEMapFP)

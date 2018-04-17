let JEMap5 = L.map('leafletwebmap5').setView([29.9511, -90.0715], 8)

let JEColorMap1 = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(JEMap5)
let JELightMap1 = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png').addTo(JEMap5)
let JEDarkMap1 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(JEMap5)

let myBasemaps = {
  'Color Basemap': JEColorMap1,
  'Light Basemap': JELightMap1,
  'Dark Basemap': JEDarkMap1
}


JEGeojsonStyle = function (state) {
  let Auth = state.properties.Auth
  let stateColor = 'blue'
  if (Auth== 'Franchise' ) {stateColor = 'pink'}
  let myStyle = {
    color: stateColor,
    weight: 1,
    }
    return myStyle
}


JEGeojsonOptions = {
  style: JEGeojsonStyle,
}

L.control.layers(myBasemaps).addTo(JEMap5)
L.geoJSON(foodtruck, JEGeojsonOptions).addTo(JEMap5)

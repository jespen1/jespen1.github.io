let JEmap5 = L.map('leafletwebmap5').setView([29.9511, -90.0715], 8)

let JEColorMap1 = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}').addTo(JEMap5)
let JELightMap1 = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png').addTo(JEMap5)
let JEDarkMap1 = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}').addTo(JEMap5)

let myBasemaps = {
  'Color Basemap': JEColorMap1,
  'Light Basemap': JELightMap1,
  'Dark Basemap': JEDarkMap1
}


JEGeojsonStyle = function (state) {
  let Auth = state.properties.Auth
  let stateColor = 'red'
  if (auth== 'Franchise' ) {stateColor = 'Blue'}
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
L.geoJSON(foodtruck, myGeojsonOptions).addTo(JEmap5)

//let JEmap = L.map('leafletwebmap1').setView([29.854929,-89.990625], 12)
let JEmap = L.map('leafletwebmap1').setView([29.854929,-89.990625], 12)

let basemap = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

L.tileLayer(basemap).addTo(JEmap)

let marker = L.marker([29.854929,-89.990625]).addTo(JEmap)
let marker = L.line([29.9,-89.99]).addTo(JEmap)

let polygon = L.polygon([
  [29.851677, -89.982986],
  [29.887403, -89.975090],
  [29.813303, -90.026760]
]).addTo(JEmap);

polygon.bindPopup('Belle Chasse')
marker.bindPopup('Belle Chasse High School')

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
}
mymap.on('click', logCurrentCoordinates)

let JEMapFP = L.map('leafletwebmapFP').setView([29.9511, -90.0715], 8)

let JEColorMap1 = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(JEMapFP)
let JELightMap1 = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png').addTo(JEMapFP)
let JEDarkMap1 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(JEMapFP)

let myBasemaps = {
  'Color Basemap': JEColorMap1,
  'Light Basemap': JELightMap1,
  'Dark Basemap': JEDarkMap1
}

L.control.layers(myBasemaps).addTo(JEMapFP)


function createCustomIcon (feature, latlng) {
  let JEMarkerIcon = L.icon({
  iconUrl: 'point.png',
  iconSize: [38, 95], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  })

  return L.marker(latlng, { icon: JEMarkerIcon })
}

function createPopup (feature, layer) {
  let JEMarkerIcon = feature.properties.NAME
  layer.bindPopup('Name of school : ' + JEMarkerIcon)
}


JEGeojsonOptions = {
  onEachFeature: createPopup,
  pointToLayer: createCustomIcon
}

L.control.layers(myBasemaps).addTo(JEMapFP)
L.geoJSON(nolaschools, JEGeojsonOptions).addTo(JEMapFP)

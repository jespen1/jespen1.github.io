let JEmap3 = L.map('leafletwebmap3').setView([29.854929,-89.990625], 12)

let basemap = ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
L.tileLayer(basemap).addTo(JEmap3)

let JEMarkerIcon = L.icon({
  iconUrl: 'dogimage.jpg',
  iconSize: [38, 95], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})

let JEMarker = L.marker([29.854929,-89.990625], {icon: JEMarkerIcon}).addTo(JEmap3)

let JEPoint = [
  [29.851677, -89.982986],
  [29.887403, -89.975090],
  [29.813303, -90.026760] ]

let JEStyle = {
  color: 'pink',
  fillColor: 'black'
}

let polygon = L.polygon(JEPoint, JEStyle).addTo(JEmap3);

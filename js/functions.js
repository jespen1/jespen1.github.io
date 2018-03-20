let projectData = []

projectData[0] = {
  id: 1,
  url: 'http://arcg.is/2EOzxhz',
  title: 'Book Assignment 1',
  desc: 'Tour of Lakeview Louisiana, where I went to high school.',
  thumb: true,
  keywords: ['Lakeview', 'Louisiana', 'story map', 'tour']
}

projectData[1] = {
  id:2,
  url:'https://www.arcgis.com/apps/View/index.html?appid=dc4d335ae4d64fa7a596931fc7f673b2',
  title:'Book Assignment 2',
  desc:'4.5+ Magnitude Earthquakes around the world.',
  thumb: false,
  keywords: ['Earthquakes', 'USGS', 'ArcGIS']
}

function createTitle (title) {
  console.log('BookAssignment-' + title)
}
function createThumbnail (thumb, id) {
  if (thumb === true) {
    console.log('BookAssignment-' + id + '.png')
  } else {
    console.log('logo.png')
  }
}

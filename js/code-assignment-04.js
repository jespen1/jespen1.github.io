let projectArray1 = [
  1,
  'http://arcg.is/2EOzxhz',
  'Book Assignment 1',
  'Tour of Lakeview Louisiana, where I went to high school.',
  true
]

let projectObject1 = {
  id: 1,
  url: 'http://arcg.is/2EOzxhz',
  title: 'Book Assignment 1',
  desc: 'Tour of Lakeview Louisiana, where I went to high school.',
  thumb: true,
}

let projectArray2 = [
  2,
  'https://www.arcgis.com/apps/View/index.html?appid=dc4d335ae4d64fa7a596931fc7f673b2',
  'Book Assignment 2',
  '4.5+ Magnitude Earthquakes around the world.',
  true,
  ['BookAssignment2', 'Book', 'Assignment']
]

let projectObject2 = {
  id:2,
  url:'https://www.arcgis.com/apps/View/index.html?appid=dc4d335ae4d64fa7a596931fc7f673b2',
  title:'Book Assignment 2',
  desc:'4.5+ Magnitude Earthquakes around the world.',
  thumb: true,
  keywords: [
    'BookAssignment2',
    'Book',
    'Assignment'
  ]
}


console.log(projectArray1[1])
console.log(projectObject1.title)
console.log(projectObject1["Book Assignment 1"])

console.log(projectArray2[2])
console.log(projectObject2.title)
console.log(projectObject2["Book Assignment 2"])

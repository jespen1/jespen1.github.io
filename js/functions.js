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

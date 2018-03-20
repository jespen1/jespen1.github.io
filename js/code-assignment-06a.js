for (let i = 0; i < projectData.length; i++) {
  createTitle(projectData[i].id + '.png')
  if (projectData[i].thumb === true) {
  console.log('BookAssignment-' + projectData[i].id + '.png')
} else {
  console.log('logo.png')
  }


function createTitle (title) {
  console.log('BookAssignment-' + title)
}
function createThumbnail1 () {}

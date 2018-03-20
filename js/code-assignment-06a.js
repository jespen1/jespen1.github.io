for (let i = 0; i < projectData.length; i++) {
  createTitle(projectData[i].title)
createThumbnail1(projectData[i].thumb, projectsData[i].id)



function createTitle (title) {
  console.log('BookAssignment-' + title)
}
function createThumbnail1 (thumb, id) {
  if (thumb === true) {
    console.log('BookAssignment-' + id + '.png')
  } else {
    console.log('logo.png')
}

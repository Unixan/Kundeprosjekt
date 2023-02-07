function getProjects() {
    //TODO make this shit work
  //tråler gjennom model.pictures[index].projectId.number og returnerer alle som objekt med name og number
  const projectArray = [];
  let picture = model.pictures;
  projectArray.push(picture[0].projectId);
  for (let i = 0; i < picture.length; i++) {
  }
  console.log(projectArray, "liste med objekter av prosjekter");
}

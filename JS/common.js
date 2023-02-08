function getProjects() {
    //TODO make this shit work
  //tråler gjennom model.pictures[index].projectId.number og returnerer alle som objekt med name og number
  const projectArray = [];
  const numbers = [];
  let picture = model.pictures;
  for (let i = 0; i < picture.length; i++) {
    if(numbers.includes(picture[i].projectId.number)){
        console.log("trigg");
        continue;
    } else numbers.push(picture[i].projectId.number);
  }
  console.log(numbers, "liste over prosjektnummer");
  console.log(projectArray, "liste med objekter av prosjekter");
}

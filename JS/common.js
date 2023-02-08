function getProjects() {
    //TODO make this shit work
  //tråler gjennom model.pictures[index].projectNumber og .projectName
  //returnerer array med {projectName:"(...)", projectNumber:(...)}
  const numbers = [];
  const names = [];
  let picture = model.pictures;
  for (let i = 0; i < picture.length; i++) {
      if(numbers.includes(picture[i].projectNumber)){
          continue;
      } else numbers.push(picture[i].projectNumber);
      if(names.includes(picture[i].projectName)){
          continue;
      } else names.push(picture[i].projectName);
    }
    return makeProjectArray(names, numbers);
}

function makeProjectArray(name, number){
    const projectArray = [];
    for (let i = 0; i < name.length; i++){
        const projectObject = {
            projectName: name[i],
            projectNumber: number[i]
        }
        projectArray.push(projectObject);
    }
    return projectArray;
}
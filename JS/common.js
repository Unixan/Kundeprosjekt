function getProjects() {
  //tråler gjennom model.pictures[index].projectNumber og .projectName
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
    //returnerer array med [{projectName:"(...)", projectNumber:(...)}, {...}]
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

//Lager Social Media lenker til admin. 
function creatorSoMeLinks(){
    let html = '';
    const soMeCreator = model.creator.creatorSoMelinks.links;
    for(let i = 0; i < soMeCreator.length; i++){
            html += /*HTML*/`
            <a href="${soMeCreator[i].link}" target="_blank" rel="noopener noreferrer">
            <img src='${soMeCreator[i].logoimg}'/></a>
            `;
    }
    return html;
}

//Admin menu
function AdminMenuBar() {
    //tegner opp menyen til Admin
    menu = /*HTML*/ `
    <header>
      <nav class="menuBar">
           <ul class="menu">
            <li class="menuItem">
              <div onclick="changeToAdminView()" class="menuLink">Hjem</div>
            </li>
            <li class="menuItem">
              <div onclick="changeToAdminFilterView()" class="menuLink">Filter</div>
            </li>
            <li class="menuItem">
              <div onclick="changeToAddImageView()" class="menuLink">Legg til bilde</div>
            </li>
            <li class="menuItem">
              <div onclick="changeToAdminContactView()" class="menuLink">Kontakt</div>
            </li>
          </ul>
      </nav>
      <div class="hamburger" onclick="hamburgerActivate()">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </header>`;
  
    return menu;
  }

  function changeToAdminView(){
    model.state = "adminView";
    updateView();
  }

  function changeToAdminFilterView(){
    model.state = "adminFilterView";
    updateView();
  }

  function changeToAddImageView(){
    model.state = "addImageView";
    updateView();
  }

  function changeToAdminContactView(){
    model.state = "adminContactView";
    updateView();
  }
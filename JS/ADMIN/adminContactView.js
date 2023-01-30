// her skal admin kunne trykke "rediger" og kunne laste opp nytt profilbilde eller endre tekst og SoMeLinks

function updateAdminContactView(){
    let someHTML = "";
    document.getElementById('app').innerHTML = /*html*/ `
    <header>
  <nav class="menuBar">
 
        <ul class="menu">
          <li class="menuItem">
            <a href="#" class="menuLink">Filtrering</a>
          </li>
          <li class="menuItem">
            <a href="#" class="menuLink">Samarbeid</a>
          </li>
          <li class="menuItem">
            <a href="#" class="menuLink">Kontakt</a>
          </li>
        </ul>
    </nav>
  </header>
    <div><a onclick="backButton()"><img src=${model.backLogo}></a></div>
    <h1>${model.creator.name}</h1>
    <p>${model.creator.title}</p>
    <p><a href="mailto:${model.creator.email}">kontakt</a>
    <div>
    <img src=${model.creator.aboutPicture} alt="Profilbilde av Jarand Midtgaard">
    <div> <!--SoMe linker-->
    <div>${someHTML}
    </div>
    <p>${model.creator.aboutCreator}</p>
    `
    for(i = 0; i < model.creator.creatorSoMelinks.length; i ++){
        someHTML += `<div><a><img src=${model.creator.creatorSoMelinks[i].logoimg}></a></div>`
    }
}
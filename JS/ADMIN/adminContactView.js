// her skal admin kunne trykke "rediger" og kunne laste opp nytt profilbilde eller endre tekst og SoMeLinks
//Lage input
//Erwan Foxtail DOES it
function updateAdminContactView(){
    let someHTML = "";
    document.getElementById('app').innerHTML = /*html*/ `
    <header>
  <nav class="menuBar">
 
        <ul class="menu">
          <li class="menuItem">
            <a href="#" class="menuLink">Rediger filtrering</a>
          </li>
          <li class="menuItem">
            <a href="#" class="menuLink">Adminside</a>
          </li>
          <li class="menuItem">
            <a href="#" class="menuLink">Logg ut</a>
          </li>
        </ul>
    </nav>
  </header>
    <div><a onclick="adminBackButton()"><img src=${model.backLogo}></a></div>
    <h1>${model.creator.name}</h1>
    <p>${model.creator.title}</p>
    <p><a href="mailto:${model.creator.email}">kontakt</a><button onclick="editMail()">Rediger mail</button>
    <div>
    <img src=${model.creator.aboutPicture} alt="Profilbilde av Jarand Midtgaard"><button onclick="editProfilePic()">Rediger bilde</button>
    <div> <!--SoMe linker-->
    <div>${someHTML}
    </div>
    <p>${model.creator.aboutCreator}</p><button onclick="editAbout()">Rediger</button>
    `
    for(i = 0; i < model.creator.creatorSoMelinks.length; i ++){
        someHTML += `<div><a><img src=${model.creator.creatorSoMelinks[i].logoimg}></a> <button onclick="editSoMe(i)">Rediger</button></div>`
    }
}
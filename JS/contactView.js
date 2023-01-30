//Informasjonsside til Jarand med informasjon og kontaktinformasjon. 
/*TODO 
- profilbildet X
- navn og kontaktinformasjon X
- sosiale medier lenker til Jarand X
- tilbakeknapp X
- kontakt-lenke til epost X
- Legge til brødtekst? X
- Legge til link til SoMe*
- Legge til meny (se hvordan den er laget andre steder)*/ 
/*DOES IT: Erwan Foxtail*/
function updateContactView(){
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
    <div><a><img src=${model.creator.creatorSoMelinks[0].logoimg}></a></div>
        <div><a><img src=${model.creator.creatorSoMelinks[1].logoimg}></a></div>
        <div><a><img src=${model.creator.creatorSoMelinks[2].logoimg}></a></div>
        <div><a><img src=${model.creator.creatorSoMelinks[3].logoimg}></a></div>
    </div>
    <p>${model.creator.aboutCreator}</p>
    `
}
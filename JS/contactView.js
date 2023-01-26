//Informasjonsside til Jarand med informasjon og kontaktinformasjon. 
/*TODO 
- profilbildet X
- navn og kontaktinformasjon X
- sosiale medier lenker til Jarand X
- tilbakeknapp
- kontakt-lenke til epost*/
/*DOES IT: Erwan Foxtail*/
function updateContactView(){
    document.getElementById('app').innerHTML = /*html*/ `
    <div><a onclick="backButton()"><img src=${model.backLogo}></a></div>
    <h1>${model.creator.name}</h1>
    <p>${model.creator.title}</p>
    <p><a>kontakt</a>
    <div>
    <img src=${model.creator.aboutPicture} alt="Profilbilde av Jarand Midtgaard">
    <div> <!--SoMe linker-->
    <div><a><img src=${model.creator.creatorSoMelinks[0].logoimg}></a></div>
        <div><a><img src=${model.creator.creatorSoMelinks[1].logoimg}></a></div>
        <div><a><img src=${model.creator.creatorSoMelinks[2].logoimg}></a></div>
        <div><a><img src=${model.creator.creatorSoMelinks[3].logoimg}></a></div>
    </div>
    `
}
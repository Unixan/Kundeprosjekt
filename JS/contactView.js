//Informasjonsside til Jarand med informasjon og kontaktinformasjon. 
/*TODO 
- profilbildet
- navn og kontaktinformasjon
- sosiale medier lenker til Jarand
- tilbakeknapp
- kontakt-lenke til epost*/
/*DOES IT: Erwan Foxtail*/
function updateContactView(){
    document.getElementById('app').innerHTML = /*html*/ `
    <h1>${model.creator.name}</h1>
    <p>${model.creator.title}</p>
    <p><a>kontakt</a>
    <div>
    <img src=${model.creator.aboutPicture} alt="Profilbilde av Jarand Midtgaard">
    <div>
        <div><a><img src=${model.creator.creatorSoMelinks[0].logoimg}></a></div>
        <div><a><img src=${model.creator.creatorSoMelinks[1].logoimg}></a></div>
        <div><a><img src=${model.creator.creatorSoMelinks[2].logoimg}></a></div>
        <div><a><img src=${model.creator.creatorSoMelinks[3].logoimg}></a></div>
    </div>
    `
}
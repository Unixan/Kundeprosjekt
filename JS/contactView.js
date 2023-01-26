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
    <h1>Jarand Midtgaard</h1>
    <p>Lorem ipsum</p>
    <p><a>kontakt</a>
    <div>
    <img src=${model.creator.aboutPicture} alt="Profilbilde av Jarand Midtgaard">
    </div>
    `
}
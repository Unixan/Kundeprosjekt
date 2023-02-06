//Informasjonsside til Jarand med informasjon og kontaktinformasjon. 
/*TODO 
- profilbildet X
- navn og kontaktinformasjon X
- sosiale medier lenker til Jarand X
- tilbakeknapp X
- kontakt-lenke til epost X
- Legge til brødtekst? X
- Legge til link til SoMe X
- Legge til meny (se hvordan den er laget andre steder) X
- Lage for loop for SoMe links
*/ 
/*DOES IT: Erwan Foxtail*/
function updateContactView(){
    let someHTML = "";
    document.getElementById('app').innerHTML = /*html*/ `
    ${menuBar()}
    ${hamburger()}
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
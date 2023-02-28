// her skal admin kunne trykke "rediger" og kunne laste opp nytt profilbilde eller endre tekst(x) og SoMeLinks X
//Lage input X
//Collab view også lagt til X 
//Korte ned med hjelpevariabler X
//Skrive kommentarer
//Erwan Foxtail DOES it
function updateAdminContactView() {
  //hjelpevariabler
  const creator = model.creator;
  const editAdminProfile = model.inputs.admin.editProfile;
  const creatorsSOME = creator.creatorSoMelinks;
  const creatorsPicture = creator.aboutPicture;
  const aboutTheCreator = creator.aboutCreator;

  /*SoMe, Hva som vises er avhengig av om relevant editMode er aktiv eller ikke. 
  Hvis den er aktiv vil det vises frem inputfields med lagre og avbryt funksjon, 
  hvis ikke vil lenkene vises fram som symboler med en mulighet for å gå i redigeringsmodus*/
  let someHTML = "";
  let someHTMLedit = "";
  if (creatorsSOME.editMode === false) { //Viser frem symboler med hyperlink
    for (let i = 0; i < creatorsSOME.links.length; i++) {
      someHTML += `
      <div>
        <a 
          href="${creatorsSOME.links[i].link}" 
          target="_blank" 
          rel="noopener noreferrer">
            <img src=${creatorsSOME.links[i].logoimg}>
        </a>
      </div>
      `
    }
    //
    someHTML += `
    <button onclick="editSoMe()" style="margin-top: auto;">Rediger SoMe-link</button>`
  }
  else if (creatorsSOME.editMode === true) {
    for (let i = 0; i < creatorsSOME.links.length; i++) {
      someHTMLedit += `
      <div>
        <p>${creatorsSOME.links[i].media}</p>
          <input 
            type="text" 
            value="${editAdminProfile.creatorSoMeLink[i].link}" 
            onchange="changeSoMe(${i},this.value)">
      </div>
      <br/>
      `
    }
    someHTMLedit += `
    <button onclick="updateSoMe()">Lagre</button>
    <button onclick="cancelSoMe()">Avbryt</button>
    `
  }
  someHTML += /*html*/ `
  <div class="editSoMe">${someHTMLedit}</div>
  `

  //Info om skaperen, hva som vises kommer ann på om relevant editMode er aktiv.
  let aboutCreatorEdit = "";
  if (!aboutTheCreator.editMode) {
    aboutCreatorEdit = `
  <p>${aboutTheCreator.about}</p>
  <button onclick="editAbout()">Rediger</button>
  `
  }
  else if (aboutTheCreator.editMode === true) {
    aboutCreatorEdit = `
    <textarea 
    class="editAboutField" 
    oninput="changeAbout(this.value)"
    type="text" 
    >${editAdminProfile.aboutCreator
      }</textarea>
  <button onclick="updateAbout()">Lagre</button>
  <button onclick="cancelAbout()">Avbryt</button>
  ` }

  let adminPictureEdit = "";
  if (creatorsPicture.editMode === false) {
    adminPictureEdit = `
    <img 
      src=${creatorsPicture.picture} 
      alt="Profilbilde av Jarand Midtgaard"
      style="width: auto; height: 220px;">
    <button onclick="editProfilePic()">Rediger bilde</button>
    `
  }
  else if (creatorsPicture.editMode === true) {
    adminPictureEdit = `
    <input 
    type="file"
    oninput="adminUpLoadPicture(this)"
    accept="image/jpeg, image/png, image/jpg"
    >
    <br/>
    <button onclick="updateAdminPicture()">Lagre</button>
    <button onclick="cancelAdminPicture()">Avbryt</button>
    `
  }


  document.getElementById('app').innerHTML = /*html*/ `
    ${adminMenuBar()}
  <div class="collabInfo-box">
    <h1 class="collabTitle">${creator.name}</h1>
    <div class="creatorImg" style="justify-self: auto;">
    ${adminPictureEdit}
    </div>
    <div class="collab-SoMeLinks"> <!--SoMe linker-->
    ${someHTML}
    </div>
    <div class="collabInfo">
    <p style="font-weight: bold;">${creator.title}</p>
    <p class="contact-info">
      <a href="mailto:${creator.email}">${creator.email}</a><br/>
      <p>tlf: ${creator.tlf}</p>
    </p>
    <div class="collabInfoParagraph">
    ${aboutCreatorEdit}
    </div>
</div>
<div class="collabBanner" style="align-self: end; align-self: center;">${getBanner()}</div>
</div>
<div class="collabImageTop">${collabImages()}</div>
<footer class="footer footerSticky" style="position: fixed;">
©Copyright
</footer>
    `

}
// her skal admin kunne trykke "rediger" og kunne laste opp nytt profilbilde eller endre tekst og SoMeLinks 

function updateAdminContactView() {
  //hjelpevariabler
  const creator = model.creator;
  const editAdminProfile = model.inputs.admin.editProfile;
  const creatorsSOME = creator.creatorSoMelinks;
  const creatorsPicture = creator.aboutPicture;
  const aboutTheCreator = creator.aboutCreator;

  /*SoMe, Hva som vises er avhengig av om relevant editMode er aktiv eller ikke.*/
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
    //Redigeringsknapp. Aktiverer editMode
    someHTML += `
    <button onclick="editSoMe()" style="margin-top: auto;">Rediger SoMe-link</button>`
  }
  else if (creatorsSOME.editMode === true) {//Viser frem input felt
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
    //Lagre og avbrytknapper 
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

  //Viser info om skaperen med knapp for å redigere
  if (!aboutTheCreator.editMode) {
    aboutCreatorEdit = `
  <p>${aboutTheCreator.about}</p>
  <button onclick="editAbout()">Rediger</button>
  `
  }

  //Tekstfelt for å redigere info
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

  //Profilbilde. Hva som vises kommer ann på relevant editMode
  let adminPictureEdit = "";

  //viser frem profilbildet med knapp for å redigere
  if (creatorsPicture.editMode === false) {
    adminPictureEdit = `
    <img 
      src=${creatorsPicture.picture} 
      alt="Profilbilde av Jarand Midtgaard"
      style="width: auto; height: 220px;">
    <button onclick="editProfilePic()">Rediger bilde</button>
    `
  }

  //mulighet for å laste opp nytt bilde, lagre og avbryte
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

  //Collabs lagt til med resten av infoen
  document.getElementById('app').innerHTML = /*html*/ `
    
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
<div class="collabImageTop" style="padding-bottom: 150px;">${collabImages()}</div>
<footer class="footer footerSticky" style="position: fixed;">
©Copyright
</footer>
${adminMenuBar()}
    `

}
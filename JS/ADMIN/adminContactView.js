// her skal admin kunne trykke "rediger" og kunne laste opp nytt profilbilde eller endre tekst(x) og SoMeLinks X
//Lage input X
//Collab view også lagt til
//Korte ned med hjelpevariabler
//Skrive kommentarer
//Erwan Foxtail DOES it
function updateAdminContactView() {
  const editAdminProfile = model.inputs.admin.editProfile;
  const creatorsSOMEview = model.creator.creatorSoMelinks;
  const creatorsPicture = model.creator.aboutPicture;
  const aboutTheCreator = model.creator.aboutCreator;
  let someHTML = "";
  let someHTMLedit = "";
  if (creatorsSOMEview.editMode === false) {
    for (let i = 0; i < creatorsSOMEview.links.length; i++) {
      someHTML += `
      <div>
        <a 
          href="${creatorsSOMEview.links[i].link}" 
          target="_blank" 
          rel="noopener noreferrer">
            <img src=${creatorsSOMEview.links[i].logoimg}>
        </a>
      </div>
      `
    }
    someHTML += `
    <button onclick="editSoMe()" style="margin-top: auto;">Rediger SoMe-link</button>`
  }
  else if (creatorsSOMEview.editMode === true) {
    for (let i = 0; i < creatorsSOMEview.links.length; i++) {
      someHTMLedit += `
      <div>
        <p>${creatorsSOMEview.links[i].media}</p>
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
    <h1 class="collabTitle">${model.creator.name}</h1>
    <div class="creatorImg" style="justify-self: auto;">
    ${adminPictureEdit}
    </div>
    <div class="collab-SoMeLinks"> <!--SoMe linker-->
    ${someHTML}
    </div>
    <div class="collabInfo">
    <p style="font-weight: bold;">${model.creator.title}</p>
    <p class="contact-info">
      <a href="mailto:${model.creator.email}">${model.creator.email}</a><br/>
      <p>tlf: ${model.creator.tlf}</p>
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
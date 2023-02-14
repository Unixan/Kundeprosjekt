// her skal admin kunne trykke "rediger" og kunne laste opp nytt profilbilde eller endre tekst(x) og SoMeLinks
//Lage input X
//Collab view også lagt til
//Erwan Foxtail DOES it
function updateAdminContactView() {
  let someHTML = "";
  if (model.creator.creatorSoMelinks.editMode === false) {
    for (let i = 0; i < model.creator.creatorSoMelinks.links.length; i++) {
      someHTML += `
      <div>
        <a 
          href="${model.creator.creatorSoMelinks.links[i].link}" 
          target="_blank" 
          rel="noopener noreferrer">
            <img src=${model.creator.creatorSoMelinks.links[i].logoimg}>
        </a>
      </div>
    `
    }
    someHTML += `
    <button onclick="editSoMe()">Rediger SoMe-link</button>`
  }
  else if (model.creator.creatorSoMelinks.editMode === true) {
    for (let i = 0; i < model.creator.creatorSoMelinks.links.length; i++) {
      someHTML += `
      <div>
        <p>${model.creator.creatorSoMelinks.links[i].media}</p>
          <input 
            type="text" 
            value="${model.inputs.admin.editProfile.creatorSoMeLink[i].link}" 
            onchange="changeSoMe(${i},this.value)">
      </div>
      <br/>
      `
    }
    someHTML += `
    <button onclick="updateSoMe()">Lagre</button>
    <button onclick="twitter()">Avbryt</button>
    `
  }
  let aboutCreatorEdit = "";
  if (!model.creator.aboutCreator.editMode) {
    aboutCreatorEdit = `
  <p>${model.creator.aboutCreator.about}</p>
  <button onclick="editAbout()">Rediger</button>
  `
  }
  else if (model.creator.aboutCreator.editMode === true) {
    aboutCreatorEdit = `
  <input 
    type="text" 
    value="${model.inputs.admin.editProfile.aboutCreator}" 
    onchange="changeAbout(this.value)">
  <button onclick="updateAbout()">Lagre</button>
  <button onclick="cancelAbout()">Avbryt</button>
  ` }

  let adminPictureEdit = "";
  if (model.creator.aboutPicture.editMode === false) {
    adminPictureEdit = `
    <img 
      src=${model.creator.aboutPicture.picture} 
      alt="Profilbilde av Jarand Midtgaard"
      style="width: auto; height: 220px;">
    <button onclick="editProfilePic()">Rediger bilde</button>
    `
  }
  else if (model.creator.aboutPicture.editMode === true) {
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
    <p class="collabInfoParagraph">
    ${aboutCreatorEdit}
    </p>
</div>
<div class="collabBanner">${getBanner()}</div>
</div>
<div class="collabImageTop">${collabImages()}</div>
<footer class="footer footerSticky">
©Copyright
</footer>
    `

}
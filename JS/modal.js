//tegner opp modalen

function modal(n) {
  
  let pictureIndex = 1;
  let slidePics = model.modal.modalPictures;
  let modalView = "";
  if (n > slidePics.length) {
    model.modal.slideIndex = 1;
  }
  if (n < 1) {
    model.modal.slideIndex = slidePics.length;
  }
  modalView = /*HTML*/ `
    <div class="modal" id="modal">
    ${
      model.isAdmin
        ? '<button class="editPictureButton" onclick="editPictureFromModal()">Rediger bilde</button>'
        : ""
    }
        <div class="modalBackground" id="modalBackground" onclick="closeModal()"></div> 
        <div class="modalContent">
          <span>
            <img src="IMG/ICONS/close.png" style="height:20px" class="close" onclick="closeModal()"/>
          </span>
          <div class="slideShow" id="slideShow">`;
  showSlide = model.modal.slideIndex - 1;
  slidePics.forEach((picture, index) => {
    let img = picture.img;
    modalView += /*HTML*/ `
            <div class="${
              index === showSlide ? "pictureContainer show" : "pictureContainer"
            }">
              <img src=${img} class="slideShowPic"/>
              <div class="slideNumber ">${pictureIndex} / ${
      slidePics.length
    }       </div>
            </div>
          `;
    pictureIndex++;
  });
  modalView += /*HTML*/ `          
  <a class="prev" onclick="slidePictures(-1)">&#10094;</a>
  <a class="next" onclick="slidePictures(1)">&#10095;</a>
          </div>
          ${descriptionBox()}
          ${commentBox()}
          ${linkLine()}
        </div>
    </div>
  `;

  return modalView;
}

function slidePictures(n) {
  model.modal.slideIndex += n;
  updateView();
}

// Funksjon for å vise eller skjule kommentarfelt i modalen

function showComments() {
  document.querySelector(".commentBox").classList.toggle("show");
  model.modal.commentFieldOpen = !model.modal.commentFieldOpen;
}

function showDescription() {
  document.querySelector(".descriptionBox").classList.toggle("show");
  model.modal.descriptionFieldOpen = !model.modal.descriptionFieldOpen;
}

//Beskrivelse til hvert bilde

function descriptionBox() {
  let descriptionBox = /*HTML*/ `
  <div class="${
    model.modal.descriptionFieldOpen ? "descriptionBox show" : "descriptionBox"
  }">
    <div class="description">
      ${description()}
    </div>
  </div>
  `;
  return descriptionBox
}

//Kommentarboksen til hvert bilde

function commentBox() {
  let commentBox = /*HTML*/ `
  <div class="${
    model.modal.commentFieldOpen ? "commentBox show" : "commentBox"
  }">
    <div class="comments">
    ${comments() === undefined ? "Ingen kommentarer" : `${comments()}`}
    </div>
    <div>
      <div class="addCommentLink show" onclick="toggleAddComment()">
        Legg til kommentar
      </div>
      <button class="addCommentLink" style="float: right" onclick="submitComment()">
        Kommentèr
      </button>
      <button class="addCommentLink" onclick="toggleAddComment()">
          Avbryt
      </button>
      <div class="addComment">
        <div class="newComment">  
          <input 
            type="text" 
            placeholder="Skjermnavn" 
            value="${model.inputs.user.pictureComment.user}" 
            oninput="model.inputs.user.pictureComment.user = this.value"/>
          <input 
            type="email" 
            placeholder="E-Mail" 
            value="${model.inputs.user.pictureComment.email}" 
            oninput="model.inputs.user.pictureComment.email = this.value"/>
        </div>
        <div>
          <textarea 
          class="commentField" 
          oninput="model.inputs.user.pictureComment.comment = this.value"
          type="text" 
          placeholder="Kommentar">${
            model.inputs.user.pictureComment.comment
          }</textarea>
        </div>
      </div>
    </div>
  </div>`;
  return commentBox;
}

// Linker i bånn av modal

function linkLine() {
  let picture = model.modal.modalPictures[model.modal.slideIndex - 1];
  let links = /*HTML*/ `
    <div class="linkLine">
      <img title="Del bilde" src="IMG/ICONS/share.png"/>
      <img onclick="showDescription()" title="Beskrivelse" src="IMG/ICONS/info.png"/>
      <a href="mailto:fakeEmail@mail.com?subject=Prosjekt: ${picture.projectName} Tittel: ${picture.title}" target="_blank" rel="noopener noreferrer">
        <img title="Meld interesse" src="IMG/ICONS/email.png"/>
      </a> 
      <img onclick="showComments()" title="Se kommentarer" src="IMG/ICONS/comment.png"/>
    </div>`;
  return links;
}

function getCurrentPicture() {
  let pictureIndex = model.modal.slideIndex - 1;
  currentPicture = model.modal.modalPictures[pictureIndex];
  return currentPicture;
}

// Beskrivelse som blir lag til i descriptionBox()

function description() {
  model.modal.modalDescription = "";
  currentPictureDescription = getCurrentPicture().description;
  let picDescription = /*HTML*/`
    <div>
      ${currentPictureDescription}
    </div>
  `
  return picDescription
}

// Kommentarer som blir lagt til i commentBox()

function comments() {
  model.modal.modalComments = "";
  currentPicComments = getCurrentPicture().comments;
  if (currentPicComments.length !== 0) {
    let picComments = "";
    for (let x = currentPicComments.length - 1; x >= 0; x--) {
      let username = currentPicComments[x].user;
      let usercomment = currentPicComments[x].comment;
      let date = currentPicComments[x].date;
      picComments += /*HTML*/ `
      <div class="comment">
      ${
        model.isAdmin
          ? `<button onclick="removeComment(${x})" class="removeButton">Slett kommentar</button>`
          : ""
      }
        <div class="commentName">${date} | ${username} ></div> 
        <div class="commentText">${usercomment}</div>
       
      </div>      
      `;
    }
    return picComments;
  }
}

// Viser eller skjuler inputfield for egen kommentar

function toggleAddComment() {
  addCommentToggle = document.querySelectorAll(".addCommentLink");
  document.querySelector(".addComment").classList.toggle("show");
  addCommentToggle.forEach((linkClass) => {
    linkClass.classList.toggle("show");
  });
}

// Kontrollfunksjon og submit av kommentar til enkelt bilde

function submitComment() {
  let currentPictureIndex = model.pictures.indexOf(
    model.modal.modalPictures[model.modal.slideIndex - 1]
  );
  let isMailAddress =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (model.inputs.user.pictureComment.email.match(isMailAddress)) {
    if (model.inputs.user.pictureComment.user.replace(" ", "").length > 2) {
      if (
        model.inputs.user.pictureComment.comment.replace(" ", "").length > 5
      ) {
        let newComment = {
          email: model.inputs.user.pictureComment.email,
          user: model.inputs.user.pictureComment.user,
          comment: model.inputs.user.pictureComment.comment,
          date: getTodaysDate(),
        };
        model.pictures[currentPictureIndex].comments.push(newComment);
        updateView();
      } else {
        alert("Ugyldig kommentar");
      }
    } else {
      alert("Må ha minst 2 bokstaver i brukernavn");
    }
  } else {
    alert("Ugyldig Email adresse");
  }
}

// Funksjon for datomerking av kommentarer

function getTodaysDate() {
  let currentDate = "";
  let newDate = new Date();
  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear().toString().substring(2);
  currentDate = day + "/" + month + " - " + year;
  return currentDate;
}

// Adminfunksjon for å fjerne kommentar

function removeComment(index) {
  currentModalPicture = model.modal.modalPictures[model.modal.slideIndex - 1];
  pictureIndex = model.pictures.indexOf(currentModalPicture);
  if (confirm("Vil du slette kommentaren?")) {
    model.pictures[pictureIndex].comments.splice(index, 1);
  } else return;
  updateView();
}

// Adminfunksjon for å redigere eller slette bilde.

function editPictureFromModal() {
  currentModalPicture = model.modal.modalPictures[model.modal.slideIndex - 1];
  pictureIndex = model.pictures.indexOf(currentModalPicture);
  model.state = "addImageView";
  model.modal.showModal = false;
  updateView(pictureIndex);
}

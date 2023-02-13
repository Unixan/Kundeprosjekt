function modal(n) {
  //tegner opp modalen

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

function showComments() {
  document.querySelector(".commentBox").classList.toggle("show");
}

function commentBox() {
  let commentBox = /*HTML*/ `<div class="commentBox">
  <div class="comments">
   ${comments()}
  </div>
  <div class="addComment">
    <div class="commentID">  
      <input type="text" placeholder="Skjermnavn"/>
      <input type="email" placeholder="E-Mail"/>
    </div>
    <div>
      <textarea class="commentField" type="text" placeholder="Kommentar"></textarea>
    </div>
    </div>
  </div>`;
  return commentBox;
}

function linkLine() {
  let links = /*HTML*/ `
    <div class="linkLine">
      <img title="Del bilde" src="IMG/ICONS/share.png"/>
      <img title="Meld interesse" src="IMG/ICONS/email.png"/>
      <img onclick="showComments()" title="Se kommentarer" src="IMG/ICONS/comment.png"/>
    </div>`;
  return links;
}

function comments(){
  currentPictures = model.modal.modalPictures
  console.log(currentPictures)
  let picComments = /*HTML*/`

  `
}

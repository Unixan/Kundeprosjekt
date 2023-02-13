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
        </div>
      </div>
  `;

  return modalView;
}

function slidePictures(n) {
  model.modal.slideIndex += n;
  updateView();
}

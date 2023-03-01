//controllerfunksjonene til mainView

function changeToContactView() {
  model.state = "contactView";
  updateView();
}

function changeToFilterView() {
  model.filterMenu = true;
  document.getElementById("filterMenu").style.width = "200px";
}

function changeToMainView() {
  model.state = "mainView";
  updateView();
}

function openModal(index) {
  pictures = index;
  model.modal.modalPictures = generatePictureArray(index);
  model.modal.showModal = !model.modal.showModal;
  updateView();
}

function closeModal() {
  model.modal.showModal = !model.modal.showModal;
  model.modal.modalPictures = "";
  model.modal.commentFieldOpen = false;
  model.modal.slideIndex = 1;
  
  slideIndex = 1;
  updateView();
}

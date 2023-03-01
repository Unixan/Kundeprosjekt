//controllerfunksjonene til mainView

function changeToContactView() {
  model.state = "contactView";
  updateView();
}

function changeToFilterView() {
  document.getElementById("filterMenu").style.width = "200px";
}

function changeToMainView() {
  model.state = "mainView";
  updateView();
}

function openModal(index) {
  model.modal.modalPictures = generatePictureArray(index);
  model.modal.showModal = !model.modal.showModal;
  updateView();
}

function openSingleModal(x) {
  model.modal.modalPictures = model.inputs.user.userFilter;
  model.modal.showModal = !model.modal.showModal;
  model.modal.slideIndex = x + 1;
  updateView();
}

function closeModal() {
  model.modal.showModal = !model.modal.showModal;
  model.modal.modalPictures = "";
  model.modal.commentFieldOpen = false;
  model.modal.descriptionFieldOpen = false;
  model.modal.slideIndex = 1;

  slideIndex = 1;
  updateView();
}

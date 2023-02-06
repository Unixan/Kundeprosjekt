//controllerfunksjonene til mainView

function changeToContactView() {
  model.state = "contactView";
  updateView();
}

function changeToCollabView() {
  model.state = "collabView";
  updateView();
}

function changeToMainView() {
  model.state = "mainView";
  updateView();
}

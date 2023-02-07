//controllerfunksjonene til mainView

function changeToContactView() {
  model.state = "contactView";
  updateView();
}

function updateFilterView() {
  model.state = "filterView";
  updateView();
}

function changeToMainView() {
  model.state = "mainView";
  updateView();
}

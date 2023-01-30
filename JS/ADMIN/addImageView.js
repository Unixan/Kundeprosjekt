// addImageView skal brukes til å legge til bilder fra adminView når en trykker "+". Skal også kunne brukes til å redigere eksisterende bilder
//TODO everything. What you mean every- EEEEVEEERYYYTHIIING!
//ON THE CASE: Nikotron

/*TODO:
    skrive view for å kunne legge til:
         nytt bilde
         bildetittel
         beskrivelse av bilde
         hvilke tags bildet skal ha
         nye tags
    funksjonen trenger argument for å kunne velge allerede eksisterende bilde for redigering
    bildet skal legges til i model.pictures, eller endre model.pictures[argument]
    */
function updateAddImageView(index) {
  //skriver skjermbilde for endring eller redigering av bilder
  let html = "";
  if (!index) {
    //om det ikke er noen index, så lager vi nytt bilde med tomme verdier fra model.inputs
    model.inputs.admin.category = model.filter;
    //TODO kanskje legge til else if (index) for å hente vedrier fra bilde, og bruke includes for å checkbox-e kategorier.
    //her er det mye forbedringspotensiale, jobb med opplastning først
    let catecoryDiv = "";
    for (let i = 0; i < model.inputs.admin.category.length; i++) {
      //genererer categoribokser
      catecoryDiv += /*HTML*/ `
        <div> 
            <input 
                type="checkbox" 
                name="${model.inputs.admin.category[i].cat}"
                ${model.inputs.admin.category ? "" : "checked"} 
                onchange="model.inputs.admin.category[${i}].checked = !model.inputs.admin.category[${i}].checked"
            >
            <label for="${model.inputs.admin.category[i].cat}">
            ${model.inputs.admin.category[i].cat}
            </label> 
            <br>
        `;
    }
    html = /*HTML*/ `
    <h1>Legg til nytt bilde</h1>
    <div>
        <input type="text" placeholder="Skriv inn bildetittel" onchange="model.inputs.admin.addPic.title = this.value">
        <div> 
        ${
          //skjekker om det er et bilde i input TODO legge til bilde i input om en skal redigere
          //TODO fjern denne kommentaren hvis det funker, skriv om koden om det ikke funker
          model.inputs.admin.addPic.img != ""
            ? `<img src='${model.inputs.admin.addPic.img}'>`
            : "<p>does not virk</p>"
        }
        <!--knapp bruker kan trykke på for å laste opp bilder
        sender hele input-taggen med bildet som innhold til userUpload() i controller
        TODO skriv om litt så den ikke dukker opp hvis du bare redigerer bilde -->
          <input 
            type="file"
            oninput="userUpload(this)"
            accept="image/jpeg, image/png, image/jpg"
          >
        </div>
        <input 
          type="text" 
          placeholder="Skriv inn beskrivelse" 
          onchange="model.inputs.admin.addPic.description = this.value"
        >
        <div>
            ${catecoryDiv}
            //TODO fancy schmancy måte å legge til nye kategorier som jeg ikke har tid til nå
        </div>
    </div>
    `;
  }
  appDiv.innerHTML = html;
}

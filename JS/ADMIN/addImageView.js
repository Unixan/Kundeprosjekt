// addImageView skal brukes til å legge til bilder fra adminView når en trykker "+". Skal også kunne brukes til å redigere eksisterende bilder
//TODO everything. What you mean every- EEEEVEEERYYYTHIIING!
//ON THE CASE: Nikotron

/*TODO:
legge til bilde i input om en skal redigere
legge til back button
    skrive view for å kunne legge til:
         nytt bilde X ferdig, men kan endres om det gjør denklere å redigere nye bilder
         bildetittel X ferdig, men kan endres om det gjør denklere å redigere nye bilder
         beskrivelse av bilde X ferdig, men kan endres om det gjør denklere å redigere nye bilder
         hvilke tags bildet skal ha X ferdig, men kan endres om det gjør denklere å redigere nye bilder
         nye tags X ferdig, men kan endres om det gjør denklere å redigere nye bilder
    funksjonen trenger argument for å kunne velge allerede eksisterende bilde for redigering
    bildet skal legges til i model.pictures, eller endre model.pictures[argument]
    */
function updateAddImageView(index) {
  //skriver skjermbilde for endring eller redigering av bilder
  console.log(index);
  let html = "";
  model.inputs.admin.addPic.category = model.filter;
  if (index != null) {
    //setter kategorier på valgt bilde til å være "checked"
    model.inputs.admin.addPic.category.map((filterList) => {
      if (model.pictures[index].category.includes(filterList.cat))
        filterList.checked = true;
    });
  }
  let catecoryDiv = "";
  for (let i = 0; i < model.inputs.admin.addPic.category.length; i++) {
    //genererer categoribokser
    if (model.inputs.admin.addPic.category[i].cat) {
      catecoryDiv += /*HTML*/ `
            <input 
                type="checkbox" 
                name="${model.inputs.admin.addPic.category[i].cat}"
                ${
                  !model.inputs.admin.addPic.category[i].checked
                    ? ""
                    : "checked"
                } 
                onchange="model.inputs.admin.addPic.category[${i}].checked = !model.inputs.admin.addPic.category[${i}].checked"
            >
            <label for="${model.inputs.admin.addPic.category[i].cat}">
            ${model.inputs.admin.addPic.category[i].cat}
            </label> 
            <br>
        `;
    } else
      catecoryDiv += /*HTML*/ `
            <input
                type="text"
                placeholder= "Skriv inn kategorinavn"
                onchange="model.inputs.admin.addPic.category[${i}].temp = this.value"
                value="${model.inputs.admin.addPic.category[i].temp}"
            >
            <button onclick="pushCategory(${i})">Legg til</button>
            <button onclick="removeUnusedCategory(${i})">Fjern</button>
            <br>
        `;
  }
  html = /*HTML*/ `
    <h1>${
      index != null ? `${model.pictures[index].title}` : "Legg til nytt bilde"
    }</h1>
    <div>
        <input type="text" placeholder=${
          index != null
            ? `${model.pictures[index].title}`
            : "Skriv inn bildetittel"
        } onchange="model.inputs.admin.addPic.title = this.value">
        <div> 
        ${
          //om du redigerer eksisterende, vises bildet her
          index != null
            ? `<img src='${model.pictures[index].img}'>`
            : //ellers får du dette om du legger til nytt bilde
              /*HTML*/ `
        ${
          //skjekker om det er et bilde i input
          model.inputs.admin.addPic.img != ""
            ? `<img src='${model.inputs.admin.addPic.img}'>`
            : "<p>Legg til bilde</p>"
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
        >`
        }
        <div>
            ${catecoryDiv}
            <button onclick="addCategory()">Legg til kategori</button>
        </div>
    </div>
    `;
  appDiv.innerHTML = html;
}

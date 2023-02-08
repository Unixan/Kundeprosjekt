function modal() {
    //tegner opp modalen
    html = /*HTML*/ `
    <div class="modal" id="modal">
      <span>
        <img src="IMG/ICONS/close.png" style="height:20px" class="close" onclick="closeModal()"/>
      </span>
      <div class="modalBackground" id="modalBackground" onclick="closeModal()"></div>   
    </div>
    `;
  
    return html;
  }
  
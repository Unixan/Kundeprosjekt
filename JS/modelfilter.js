model.wordFilter = ["Hei", "Hallo", "Hade"];



//Heisann, jeg gjemte bare vekk noe kode her som jeg skal se på med Ståle på mandag
// function comments() {
//     model.modal.modalComments = "";
//     let currentPicture = "";
//     let pictureIndex = model.modal.slideIndex - 1;
//     currentPicture = model.modal.modalPictures[pictureIndex];
//     let currentPicComments = currentPicture.comments;
//     if (currentPicComments.length !== 0) {
//       let picComments = "";
//       for (let x = currentPicComments.length - 1; x >= 0; x--) {
//         let username = currentPicComments[x].user;
//         let usercomment = currentPicComments[x].comment;
//         let date = currentPicComments[x].date;
//         picComments += /*HTML*/ `
//         <div class="comment">
//         <div class="commentName">${date} | ${username} ></div>
//         <div class="commentText">${usercomment}</div>
//         ${model.isAdmin ? deleteComment(pictureIndex , x) : ""}
//         </div>
        
//         `;
//         console.log("pictureIndex i loop", pictureIndex)
//         console.log("commentIndex i loop", x)
        
//       }
//       return picComments;
//     }
//   }
  
//   function deleteComment(pictureChosen, commentIndex){
//     console.log("pictureIndex i DeleteComment", pictureChosen)
//     console.log("commentIndex i deleteComment", commentIndex)
//     return /*html*/`
//     <button onclick ="removeThisComment(${pictureChosen, commentIndex})">fjern kommentar</button>
//     `
//   }
  
//   function removeThisComment(picture, commentIndex){
//     console.log("pictureIndex i removeThisComment", picture)
//     console.log("commentIndex i removeThisComment", commentIndex)
//     //TODO areyousure
//     console.log(picture, "index I use now")
//     model.modal.modalPictures[picture].comments.splice(commentIndex, 1);
//     updateView();
//   }
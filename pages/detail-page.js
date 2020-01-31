// Add event handler
function submitComment() {
  // gather Data
  const inputField = document.getElementById("name");
  const name = inputField.value;
  const textArea = document.getElementById("msg");
  const msg = textArea.value;
  // create needed elements
  const comment = document.createElement("section");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  // adjust created elements
  h3.innerHTML = `${name} said:`;
  p.innerHTML = msg;
  comment.classList.add(`comment`);
  comment.appendChild(h3);
  comment.appendChild(p);
  // display elements on the page
  const commentSection = document.getElementById(`comments`);
  console.log(commentSection);
  commentSection.appendChild(comment);
  //reset values of the form
  inputField.value = null;
  textArea.value = null;
}

//function addParagraph() {
//  //create paragraph
//  //const paragraphContainer = document.createElement("div");
//  const newParagraph = document.createElement("p");
//  const paragraphDiv = document.getElementById("multipleParagraphs");
//  //paragraphContainer.classList.add("multipleParagraphs");
//  newParagraph.classList.add(`borderP`);
//  newParagraph.innerHTML = "Hi there it works Eureka Great Scott!";
//  paragraphDiv.appendChild(newParagraph);
//
//
//}
//

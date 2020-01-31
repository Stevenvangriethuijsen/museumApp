function submitComment() {
  // get name and store it
  const inputField = document.getElementById("name");
  const name = inputField.value;
  console.log(name);
  // get message of user and store it
  const textArea = document.getElementById("msg");
  const msg = textArea.value;
  console.log(msg);
  const comment = document.createElement("section");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  h3.innerHTML = `${name} said:`;
  p.innerHTML = msg;
  console.log(h3, p);
  comment.classList.add(`comment`);
  comment.appendChild(h3);
  comment.appendChild(p);
  console.log(comment);
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

function submitComment() {
  // get name and store it
  const inputField = document.getElementById("name");
  const name = inputField.value;
  console.log(name);
  // get message of user and store it
  const textArea = document.getElementById("msg");
  const msg = textArea.value;
  console.log(msg);
}

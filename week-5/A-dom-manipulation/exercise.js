/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var myElement = document.querySelector("#bgrChangeBtn");
myElement.addEventListener("click", sendMessage);
function sendMessage() {
  body.style.backgroundColor = "pink";
}
var body = document.querySelector("body");

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var myElement = document.querySelector("#alertBtn");
myElement.addEventListener("click", sendAlert);
function sendAlert() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var myElement = document.querySelector("#addTextBtn");
var myNewTextBox = document.createElement("p");
var myJumbotron = document.querySelector(".jumbotron");
myElement.addEventListener("click", sendMeAlert);
myJumbotron.appendChild(myNewTextBox);
function sendMeAlert() {
  myNewTextBox.innerText = "Read more below.";
}

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var myLargerLinksBtn = document.querySelector("#largerLinksBtn");
var allLinks = document.querySelectorAll("a");
myLargerLinksBtn.addEventListener("click", largeLinkSize);
function largeLinkSize() {
  for (var i = 0; i < allLinks.length; i++) {
    allLinks[i].style.fontSize = "50px";
  }
}

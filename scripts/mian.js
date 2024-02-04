/* let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World"; */


/* document.querySelector("html").addEventListener("click", function(){
    alert("别戳我，我怕疼");
}) */

let myImage = document.querySelector("img");
myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/leehom-wong-icon.png"){
        myImage.setAttribute("src", "images/leehom-wong-icon2.png");
    } else {
        myImage.setAttribute("src", "images/leehom-wong-icon.png");
    }
}

// change user information
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please input your name");
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla is amazing, " + myName;
    }
}

myButton.onclick = function () {
    setUserName();
}

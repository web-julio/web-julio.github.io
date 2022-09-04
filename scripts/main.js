
/*Change image when clicking on it*/
const myImage = document.querySelector('img');

myImage.onclick = function () {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/icon.png') {
        myImage.setAttribute('src', 'images/chip-transparent.png');
    } else {
        myImage.setAttribute('src', 'images/icon.png');
    }
}

/*Personalized welcome message*/
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName(){
    const myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName(); //if name does not exist run the function until it does
      } else {
    localStorage.setItem('name',myName)
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick =()=> {
    setUserName();
}
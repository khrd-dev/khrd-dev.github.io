var myImage = document.querySelector('img');
// Смена белочки и котенка
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/belka-foto.png') {
      myImage.setAttribute ('src','images/kotenok.png');
    } else {
      myImage.setAttribute ('src','images/belka-foto.png');
    }
}
//Добавление имени
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Введи свое имя');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Белочке нравится ' + myName;
}
//Проверка существует ли имя
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Белочке нравится ' + storedName;
}
//Активация кнопки
myButton.onclick = function() {
    setUserName();
  }
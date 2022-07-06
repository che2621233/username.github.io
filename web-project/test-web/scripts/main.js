let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/01.jpg'){
        myImage.setAttribute('src','images/huajia.jpg');
    }else{
        myImage.setAttribute('src','images/01.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading =document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem('name',myName);
        myHeading.textContent = '花嫁 houhui' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContemt = '花嫁 houhui，' +storedName;
}

myButton.onclick = function() {
    setUserName();
}
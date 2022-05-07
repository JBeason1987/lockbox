//Dom Exercise

document.getElementById('container');

document.querySelector('#container')

document.getElementsByClassName('second')

document.querySelector('ol .third');

let secHel = document.querySelector('#container')
secHel.innertext = "hello";

footer.classname += "main";

let footer = document.querySelector(".footer");
footer.classList.remove("main");

let newLi = document.createElement("li");

newLi.innertext = "four"

let list = document.querySelector("ul");
list.appendChild(newLi);

let liInOl = document.querySelectorAll("ol li");
for (let i = 0, i < liInOl.length, i++){
    liInOl[i].getElementsByClassName.backgroundColor = "green";
}

let footer = document.querySelector(".footer");
footer.remove();
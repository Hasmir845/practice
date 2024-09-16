const mainContainer = document.getElementById("main-container");
const addSection = document.createElement("section");
const title = document.createElement("h1");
title.innerText = "My Favourite Places";
addSection.appendChild(title);

const addUl = document.createElement("ul");

const addLi1 = document.createElement("li");
addLi1.innerText = "Bandarban";
addUl.appendChild(addLi1);

const addLi2 = document.createElement("li");
addLi2.innerText = "Bandarban";
addUl.appendChild(addLi2);

const addLi3 = document.createElement("li");
addLi3.innerText = "Bandarban";
addUl.appendChild(addLi3);

addSection.appendChild(addUl);
mainContainer.appendChild(addSection);

const sections = document.querySelectorAll("section");
for (const section of sections) {
  section.style.backgroundColor = "lightGray";
  section.style.padding = "10px";
  section.style.marginTop = "10px";
  section.style.borderRadius = "10px";
}
const foodList = document.getElementById("foods");
const addLi = document.createElement("li");
addLi.innerText = "Alu Vorta";
foodList.appendChild(addLi);

const secondLi = document.getElementById('second-li');
secondLi.style.color = 'darkBlue';
secondLi.style.fontSize = 'bold';
secondLi.style.listStyle = 'none';

const colors = document.getElementById('colors');
colors.style.backgroundColor = 'orange';

const titleSecond = document.getElementById('Title-2');
titleSecond.style.color = 'white';

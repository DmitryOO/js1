'use strict';

let menuItems = document.querySelectorAll('.menu-item');
let menu = document.querySelector('.menu');
let item3 = menuItems[1];
let item2 = menuItems[2];
let decision = prompt('отношение к технике apple?','');
let answer = document.getElementById('prompt');
menuItems[2].remove();
menuItems[1].remove();
menuItems[0].insertAdjacentElement("afterend", item2);
menuItems[2].insertAdjacentElement("afterend", item3);
let item5 = document.createElement('li');
item5.classList.add('menu-item');
item5.innerHTML = 'Пятый пункт';
menu.appendChild(item5);


console.log(item3);
let body = document.querySelector('body');
body.style.backgroundImage = 'url(img/apple_true.jpg)';
let title = document.getElementById('title');
title.textContent = 'Мы продаем только подлинную технику Apple';
document.querySelector('.adv').remove();
answer.textContent = decision;
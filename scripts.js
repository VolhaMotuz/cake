"use strict";

let navButton = document.getElementsByClassName('navigation-button');
let navList = document.getElementsByClassName('header__navigation-list');

navButton[0].addEventListener('click', function() {
    navList[0].classList.toggle('navigation-list_active');
});
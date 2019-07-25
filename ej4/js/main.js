'use strict';

const button = document.querySelector('.btn');

function mira(event){
    console.log(event);
}

button.addEventListener('click', mira);
'use strict';

const adalaber1 = {
    name: 'Susana',
    years: 34,
    profession: 'journalist'
}
const adalaber2= {
    name: 'Rocío',
    years: 25,
    profession: 'actress'
}

const title = document.querySelector ('.title');

title.innerHTML =  `
Mi nombre es ${adalaber1.name}, tengo ${adalaber1.years} años y soy ${adalaber1.profession}
`;

title.innerHTML = `
Mi nombre es ${adalaber2.name}, tengo ${adalaber2.years} años y soy ${adalaber2.profession}
`;
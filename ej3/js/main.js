'use strict';

// const adalaber1 = {
//     name : 'Susana',
//     years : 34,
//     profession : 'periodista',
//     run : () => console.log ('Estoy corriendo'),
//     showBio : () => console.log (`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.years} años y soy ${adalaber1.profession}`)
// };
// const adalaber2= {
//     name: 'Rocío',
//     years: 25,
//     profession: 'actress',
//     showBio : () => console.log (`Mi nombre es ${adalaber2.name}, tengo ${adalaber2.years} años y soy ${adalaber2.profession}`)
// };


const adalaber1 = {
    name : 'Susana',
    years : 34,
    profession : 'periodista',
    run : () => console.log ('Estoy corriendo'),
    showBio : function showBio () { 
        console.log (`Mi nombre es ${this.name}, tengo ${this.years} años y soy ${this.profession}`)}
};
const adalaber2= {
    name: 'Rocío',
    years: 25,
    profession: 'actress',
    showBio : function showBio () { 
        console.log (`Mi nombre es ${this.name}, tengo ${this.years} años y soy ${this.profession}`)}
};

adalaber1.run();
adalaber1.showBio();
adalaber2.showBio ();
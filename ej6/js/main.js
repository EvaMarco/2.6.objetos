'use strict';

const cestaPeras = {};

cestaPeras.minPeras = 3;
cestaPeras.masPeras = 10;
cestaPeras.currentValue = 5;
cestaPeras.initialValue = 3;

cestaPeras.add = function add(){
    if(cestaPeras.currentValue === cestaPeras.masPeras)
    {console.log('No se pueden añadir más peras a la cesta');
    cestaPeras.currentValue = cestaPeras.currentValue}
    else{
        cestaPeras.currentValue += 1;
        console.log(cestaPeras.currentValue);
    }
}

cestaPeras.remove = function remove(){
    if(cestaPeras.currentValue === cestaPeras.minPeras)
    {console.log('No se pueden quitar más peras a la cesta');
    cestaPeras.currentValue = cestaPeras.currentValue}
    else{
        cestaPeras.currentValue -= 1;
        console.log(cestaPeras.currentValue);
    }
}

cestaPeras.reset = () => cestaPeras.currentValue = cestaPeras.initialValue;
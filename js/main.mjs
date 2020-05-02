

import { buildings } from "./data.mjs";
console.log(buildings)
import { Bakery } from "./class/bakery.mjs";

const myBakery = new Bakery(),
get_bakery_h2 = document.querySelector('h2'),
get_bakery_span1 = document.querySelector('span'),
get_bakery_span2 = document.querySelectorAll('span');



get_bakery_h2.innerHTML = `${myBakery._name}'s Bakery`; 
get_bakery_span1.innerHTML = `${myBakery._cookiesPerClick}` ;
get_bakery_span2[1].innerHTML = `${myBakery._cookiesPerSecond}`;





let buildings_container = document.getElementById('buildings');
console.log(buildings_container)
console.log(buildings[0].name);
// let bulding_tuils = buildings_container.innerHTML += '<div id="building-cursor" class="locked disabled">'
//                                                   +'<div class="icon"></div>'
//                                                   +'<div class="name">'+ buildings[0].name +'</div>'
//                                                   +'<div class="cost">'+ buildings[0].cost +'</div>'
//                                                   +'<div class="number"></div>'
//                                                   +'</div> '




function addTuil(number) {
    buildings_container.innerHTML += 
    '<div id="building-'+buildings[number].name.toLowerCase()+'" class="locked disabled">' // L’id doit toujours être préfixé par building- et le nom du bâtiment doit être en minuscule.
    +'<div class="icon"></div>'
    +'<div class="name">'+ buildings[number].name +'</div>'//Dans la div avec la classe .name, le nom du bâtiment de production est affiché dynamiquement.
    +'<div class="cost">'+ buildings[number].cost +'</div>'//Dans la div avec la classe .cost, le coût du bâtiment de production est affiché dynamiquement.
    +'<div class="number"></div>'
         +'</div> '
}

addTuil(0);// ajoute la tuile cursor au html
addTuil(1);//ajoute la tuile Grandmere au html



/*AJOUT DES CLASSES VOiR CAHIER DES CHARCHES B. Les règles de l’interface ++ document css = > css/state/_buildingState.css*/























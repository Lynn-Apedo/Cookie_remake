

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
         +'</div>'
         
}

addTuil(0);// ajoute la tuile cursor au html
addTuil(1);//ajoute la tuile Grandmere au html



/*AJOUT DES CLASSES VOiR CAHIER DES CHARCHES B. Les règles de l’interface ++ document css = > css/state/_buildingState.css*/


// BUILDING CURSOR
let get_buildingCusor = document.getElementById('building-cursor');
console.log('get cursor',get_buildingCusor)

let get_number = document.getElementsByClassName('number');
console.log('get number', get_number)
get_number[0].innerHTML= 1;

// BUILDING GRANDMA
let get_buildingGrandma = document.getElementById('building-grandma');
console.log('get cursor',get_buildingGrandma)
let get_numberGrandma = document.getElementsByClassName('number');
console.log('get number', get_numberGrandma)
get_number[1].innerHTML= 4;

// BUILDING FARM
let get_buildingFarm = document.getElementById('building-farm');
console.log('get cursor',get_buildingFarm)
let get_numberFarm = document.getElementsByClassName('number');
console.log('get number', get_numberFarm)
get_number[2].innerHTML= 2;

// BUILDING MINE
let get_buildingMine = document.getElementById('building-mine')
console.log('get cursor',get_buildingMine)
let get_numberMine = document.getElementsByClassName('number');
console.log('get number', get_numberMine)
get_number[3].innerHTML= 1;

// BUILDING FACTORY
let get_buildingFactory = document.getElementById('building-factory')
console.log('get cursor',get_buildingFactory)
let get_numberFactory = document.getElementsByClassName('number');
console.log('get number', get_numberFactory)
get_number[4].innerHTML= 1;



















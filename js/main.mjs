

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
    buildings_container.innerHTML += '<div id="building-cursor" class="locked disabled">'
                                                  +'<div class="icon"></div>'
                                                  +'<div class="name">'+ buildings[number].name +'</div>'
                                                  +'<div class="cost">'+ buildings[number].cost +'</div>'
                                                  +'<div class="number"></div>'
                                                  +'</div> '
}

addTuil(0);
addTuil(1);



























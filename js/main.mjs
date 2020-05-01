import { Bakery } from "./class/bakery.mjs";


const myBakery = new Bakery(),
get_bakery_h2 = document.querySelector('h2'),
get_bakery_span1 = document.querySelector('span'),
get_bakery_span2 = document.querySelectorAll('span');



get_bakery_h2.innerHTML = `${myBakery._name}'s Bakery`; 
get_bakery_span1.innerHTML = `${myBakery._cookiesPerClick}` ;
get_bakery_span2[1].innerHTML = `${myBakery._cookiesPerSecond}`;



// let test = document.getElementById('game').innerHTML

// console.log(test);
// test = ' <div id="building-cursor" class="locked disabled">
// <div class="icon"></div>
// <div class="name">Cursor</div>
// <div class="cost">15</div>
// <div class="number"></div>
// </div> '
test = document.getElementById('game').innerHTML
test = document.createElement('div');
test.innerHTML = ' <div id="building-cursor" class="locked disabled">
<div class="icon"></div>
<div class="name">Cursor</div>
<div class="cost">15</div>
<div class="number"></div>
</div>'

console.log(test);
































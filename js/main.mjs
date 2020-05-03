

import { buildings } from "./data.mjs";
console.log(buildings)
import { Bakery } from "./class/bakery.mjs";

const myBakery = new Bakery(),
get_bakery_h2 = document.querySelector('h2'),
get_bakery_span1 = document.querySelector('span'),
get_bakery_span2 = document.querySelectorAll('span');



get_bakery_h2.innerHTML = `${myBakery._name}'s Bakery`; 
get_bakery_span1.innerHTML = `${myBakery._cookies}` ;
get_bakery_span2[1].innerHTML = `${myBakery._cookiesPerSecond}`;





let buildings_container = document.getElementById('buildings');




const iconPosition = ['-64px 0px',' -64px -64px','-64px -192px','-64px -256px','-64px -320px','-64px -384px','-64px -448px','-64px -512px','-64px -577px','-64px -642px','-64px -705px','-64px -768px','-64px -832px','-64px -896px','-64px -962px','-64px -1024px','-64px -1089px'] // position des icones 

function addTuil(number) {

    buildings_container.innerHTML += 
    '<div id="building-'+buildings[number].name.toLowerCase()+'" class="locked disabled">' // L’id doit toujours être préfixé par building- et le nom du bâtiment doit être en minuscule.
        +'<div class="icon"></div>'
            +'<div>'
                +'<div class="name">'+ buildings[number].name +'</div>'//Dans la div avec la classe .name, le nom du bâtiment de production est affiché dynamiquement.
                +'<div class="cost">'+ buildings[number].cost +'</div>'//Dans la div avec la classe .cost, le coût du bâtiment de production est affiché dynamiquement.
            +'</div>'
                +'<div class="number"></div>'
         +'<div/>'                                          // ======(1)
         
        document.getElementsByClassName('icon')[number].style.backgroundPosition=(iconPosition[number]); //(2)


}

//

addTuil(0);// *******ajoute la tuile cursor au html (1) et ajoute la position de l'icone (2)******
addTuil(1);//ajoute la tuile Grandmere au html
addTuil(2);
addTuil(3);
addTuil(4);



/*AJOUT DES CLASSES VOiR CAHIER DES CHARCHES B. Les règles de l’interface ++ document css = > css/state/_buildingState.css*/






let click_bigCookie = document.getElementById('bigCookie');
click_bigCookie.addEventListener('click', addClick)

function addClick() {
    get_bakery_span1.innerHTML = myBakery.bakeCookies()
}





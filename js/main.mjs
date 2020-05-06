//récupère les données d'un autre fichier
import { buildings } from "./data.mjs";
import { Building } from "./class/building.mjs";
import { Bakery } from "./class/bakery.mjs";

// const myBuilding = new Building(buildings[1].name);// instancie la class Building

const myBakery = new Bakery(), // instancie la class Bakery

// instancie la class Bakery et récupération des éléments
get_bakery_h2 = document.querySelector('h2'),
get_bakery_span1 = document.querySelector('span'),
get_bakery_span2 = document.querySelectorAll('span');

//modification de ces éléments avec une variable des propriété de l'objet myBakery
get_bakery_h2.innerHTML = `${myBakery._name}'s Bakery`;
get_bakery_span1.innerHTML = `${myBakery._cookies}` ;
get_bakery_span2[1].innerHTML = `${myBakery._cookiesPerSecond}`;




let buildings_container = document.getElementById('buildings');// récupère la div#buildings de la section store

console.log(myBakery.cookies,buildings[0].cost)

//tableau des coordonnées des silhouettes noires
const iconPosition = ['-64px 0px',' -64px -64px','-64px -192px','-64px -256px','-64px -320px','-64px -384px','-64px -448px','-64px -512px','-64px -577px','-64px -642px','-64px -705px','-64px -768px','-64px -832px','-64px -896px','-64px -962px','-64px -1024px','-64px -1089px'];

//tableau des coordonnées des silhouettes en couleur
const iconColorPosition = ['6px 0px',' 6px -64px','6px -192px','6px -256px','6px -320px','6px -384px','6px -448px','6px -512px','6px -577px','6px -642px','6px -705px','6px -768px','6px -832px','6px -896px','6px -962px','6px -1024px','6px -1089px'];


//crée les tuiles du store
function addTuil(number) {
    console.log('test1', myBakery._buildings[number])

    //ajoute les div ci-dessous en fonction du paramètre number(=index d'un building)
    buildings_container.innerHTML +=
    '<div id="building-'+myBakery._buildings[number]._name.toLowerCase()+'" class="locked disabled">'
        +'<div class="icon"></div>'
            +'<div>'
                +'<div class="name">'+ buildings[number].name +'</div>'
                +'<div class="cost">'+ buildings[number].cost +'</div>'
            +'</div>'
                +'<div class="number">'+ myBakery._buildings[number]._number +'</div>'
         +'<div/>'                                         
         

        //on assigne les coordonnées du tableau iconPosition selon le paramètre number
        document.getElementsByClassName('icon')[number].style.backgroundPosition=(iconPosition[number]);

        let get_building_number = document.getElementById("building-"+myBakery._buildings[number]._name.toLowerCase()+"");
    
    }
               

addTuil(0);//affiche la tuile Cursor
addTuil(1);//affiche la tuile Grandmere
addTuil(2);
addTuil(3);
addTuil(4);

//écoute la div#bigCookie et on lui donne un évènement click
let backery_bigCookie = document.getElementById('bigCookie');
backery_bigCookie.addEventListener('click', addClick)

//une boucle for itère chaque objet du tableau de données buildings
function addClick(event) {//A CHAQUE CLIQUE:
    for(let i = 0 ; i<buildings.length; i++){
        if(myBakery.cookies>buildings[i].cost){

            let get_building_tuils = document.getElementById("building-"+buildings[i].name.toLowerCase()+"");
            get_building_tuils.className = 'unlocked enabled';
            
            let colorIcon=document.getElementsByClassName('icon');
            colorIcon[i].style.backgroundPosition=(iconColorPosition[i]);
            
            }
    }
        

    //appelle la méthode myBakeryCookies() qui incrémente cookies par cookiesPerClick
    get_bakery_span1.innerHTML = myBakery.bakeCookies();

    //crée une div et on lui assigne un contenu et une position
    let create_divPlus = document.createElement('div');
    create_divPlus.innerHTML = '+1';
    create_divPlus.className = 'plus';
    create_divPlus.style.left = event.offsetX+ 'px';
   
    //ajoute la DIV.PLUS comme élément enfant de la div.bigCookie
    backery_bigCookie.appendChild(create_divPlus);
    
    //crée un élément audio | assignation de src | ajout à la div#bigCookie | activation du son
    let playSound = document.createElement('audio')
    playSound.src = `./assets/sounds/click${(Math.floor(Math.random() * 7) + 1)}.mp3`
    create_divPlus.appendChild(playSound)
    playSound.play()


    //animationend end s'exécute quand l'animation CSS +1 se termine
    //quand l'animation dans create_divPlus se termine, la div est supprimé
    create_divPlus.addEventListener('animationend', () => { 
    backery_bigCookie.removeChild(create_divPlus)
    });

}

console.log('first',myBakery._buildings)
console.log('second', myBakery._buildings[0].number)
console.log('third', "building-"+buildings[0].name.toLowerCase())


function clickTuils() {

    for (let i = 0; i < myBakery._buildings.length; i++) {
        let get_building_tuils = document.getElementById("building-"+buildings[i].name.toLowerCase());
        console.log('fourth', get_building_tuils)
        get_building_tuils.addEventListener('click',()=>{
          

            if(myBakery.cookies >= buildings[i].cost) {
                console.log('true')
                console.log('quel bâtiment',get_building_tuils)
                console.log('nombre de bâtiment en stock', myBakery._buildings[i].number)

                myBakery._buildings[i].buy();
                
                //incrémente le stock du bâtiment de la tuile sur laquelle on a cliqué
                let get_building_number = get_building_tuils.querySelector('.number');
                console.log('what is four', get_building_number)
                get_building_number.innerHTML =  myBakery._buildings[i].number;
                console.log('incrémentation du stock de bât', myBakery._buildings[i].number)
                console.log('nombre à mettre ds la div.number' ,get_building_number.innerHTML)
                console.log('get smth', get_building_number.innerHTML= myBakery._buildings[i].number)

                //incrémente le cost du bâtiment de la tuile sur laquelle on a cliqué
                let get_building_cost = get_building_tuils.querySelector('.cost');
                console.log('price', get_building_cost)
                get_building_cost.innerHTML = myBakery._buildings[i].cost;
                console.log('get price' , get_building_cost.innerHTML)

                //soustraire le stock de cookie par le cost de la tuile sur laquelle on a cliqué
                

                return get_building_number.innerHTML
            
            } else {
                console.log('false')
            } 
        });
            
    }
        
}


clickTuils();

let incparsecond = 0;
    let StockCookie = 0;
    let inc = 0;
    setInterval(function(){
        if (myBakery.cookies >= 1){ // si le nombre de cookies est supérieur ou égal à buildings[number].cost
            inc++;
            incparsecond =(myBakery.cookies * 0.1)*inc;// cookies augmentés * 0.1
            StockCookie = Math.floor((myBakery.cookies - buildings[0].cost)+incparsecond) 
            get_bakery_span1.innerHTML = `${StockCookie}` ;
            //get_bakery_span2[1].innerHTML =${variableaincrementarcursor} 

            console.log(incparsecond)
            let get_building_cookiesPerSecond = document.getElementById('cookiesPerSecond');
            get_building_cookiesPerSecond
            console.log('div.cookiesPerSec',get_building_cookiesPerSecond.innerHTML)
        }
    },1000);
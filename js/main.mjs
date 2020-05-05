import { buildings } from "./data.mjs"; //récupère le tableau contenant les données des buildings
import { Building } from "./class/building.mjs";// récupère la class Building
import { Bakery } from "./class/bakery.mjs";// récuèpere la class Bakery

// const myBuilding = new Building(buildings[1].name);// instancie la class Building
const myBakery = new Bakery(), // instancie la class Bakery

get_bakery_h2 = document.querySelector('h2'),// récupère le h2 de la section bakery
get_bakery_span1 = document.querySelector('span'),// récupère le span1 de la section bakery
get_bakery_span2 = document.querySelectorAll('span');// récupère le span2 de la section bakery


get_bakery_h2.innerHTML = `${myBakery._name}'s Bakery`; //on modifie le h2 de la section Bakery avec la variable name de l'objet myBakery
get_bakery_span1.innerHTML = `${myBakery._cookies}` ;//on modifie le span1 de la section Bakery avec la variable cookies de l'objet myBakery
get_bakery_span2[1].innerHTML = `${myBakery._cookiesPerSecond}`;//on modifie le span2 de la section Bakery avec la variable cookiesPerSecond de l'objet myBakery




let buildings_container = document.getElementById('buildings');// récupère la div#buildings de la section store


console.log(myBakery.cookies,buildings[0].cost)

const iconPosition = ['-64px 0px',' -64px -64px','-64px -192px','-64px -256px','-64px -320px','-64px -384px','-64px -448px','-64px -512px','-64px -577px','-64px -642px','-64px -705px','-64px -768px','-64px -832px','-64px -896px','-64px -962px','-64px -1024px','-64px -1089px'];
//tableau des coordonnées des silhouettes noires

const iconColorPosition = ['6px 0px',' 6px -64px','6px -192px','6px -256px','6px -320px','6px -384px','6px -448px','6px -512px','6px -577px','6px -642px','6px -705px','6px -768px','6px -832px','6px -896px','6px -962px','6px -1024px','6px -1089px'];
//tableau des coordonnées des silhouettes en couleur

function addTuil(number) {//fonction qui crée les tuiles du store
    console.log('test1', myBakery._buildings[number])

    buildings_container.innerHTML += //ajoute les div ci-dessous en fonction du paramètre number
    '<div id="building-'+myBakery._buildings[number]._name.toLowerCase()+'" class="locked disabled">' //crée un div ayant pour id "building-" + "une variable qui récupère les propriétés name du tableau buildings en fonction du paramètre number"
        +'<div class="icon"></div>'
            +'<div>'
                +'<div class="name">'+ buildings[number].name +'</div>'//le nom du bâtiment de production est affiché dynamiquement grâce à variable 'buildings[number].name'
                +'<div class="cost">'+ buildings[number].cost +'</div>'//le coût du bâtiment de production est affiché dynamiquemen grâce à variable 'buildings[number].cost'
            +'</div>'
                +'<div class="number">'+ myBakery._buildings[number]._number +'</div>'
         +'<div/>'                                         
         


        document.getElementsByClassName('icon')[number].style.backgroundPosition=(iconPosition[number]); //récupère la div.icon en fonction du paramètre number
        //on assigne les coordonnées du tableau iconPosition selon le paramètre number

        let get_building_number = document.getElementById("building-"+myBakery._buildings[number]._name.toLowerCase()+"");
    
        // get_building_number.addEventListener('click', ()=>{
        
        //     myBuilding.buy();
        // });
        

    
    
    }
               

addTuil(0);//affiche la tuile Cursor
addTuil(1);//affiche la tuile Grandmere
addTuil(2);
addTuil(3);
addTuil(4);

let backery_bigCookie = document.getElementById('bigCookie');// récupère la div#bigCookie
backery_bigCookie.addEventListener('click', addClick)//écoute la div#bigCookie et on lui donne un évènement click

function addClick(event) {//A CHAQUE CLIQUE:

    for(let i = 0 ; i<buildings.length; i++) //crée un boucle for qui itère chaque objet du tableau de données buildings
    if(myBakery.cookies>buildings[i].cost){// si le stock de cookies est supérieur au cost d'une propriété d'un objet[i] se trouvant dans le tableau de données des buildings 

    let get_building_tuils = document.getElementById("building-"+buildings[i].name.toLowerCase()+"");//récupère les div#"building-"+"buildings[i].name"
    get_building_tuils.className = 'unlocked enabled'//ajoute une class 'unlocked enabled'aux div#"building-"+"buildings[i].name"
    
    let colorIcon=document.getElementsByClassName('icon');//récuère les div.icon
    colorIcon[i].style.backgroundPosition=(iconColorPosition[i]);//on assigne les coordonnées du tableau inconColorPosition[i]

    }


    get_bakery_span1.innerHTML = myBakery.bakeCookies();//à chaque clique, on appelle la méthode myBakeryCookies() qui incrémente cookies par cookiesPerClick





    let create_divPlus = document.createElement('div');//crée une div
   
    create_divPlus.innerHTML = '+1'//ajoute +1 dans la div
    create_divPlus.className = 'plus';//assigne à la div une class 'plus'
    create_divPlus.style.left = event.offsetX+ 'px';//assigne une position à la DIV.PLUS
    
   
    backery_bigCookie.appendChild(create_divPlus);//ajoute la DIV.PLUS comme élément enfant de la div.bigCookie
    
    let playSound = document.createElement('audio')//crée un élément audio
    playSound.src = `./assets/sounds/click${(Math.floor(Math.random() * 7) + 1)}.mp3`//assigne une piste audio à l'attribut src de l'élément audio
    create_divPlus.appendChild(playSound)//ajoute l'élement audio comme enfant de la DIV.PLUS
    playSound.play()//active le son de la variable playSound


       
    

    create_divPlus.addEventListener('animationend', () => { //écoute la DIV.PLUS et on lui donne un évènement animationend (=qui exécute une fonction à la fin de l'animation sur l'élément DIV.PLUS)
    backery_bigCookie.removeChild(create_divPlus)//SUPPRIME LA DIV.PLUS
  
    
});



}

 







// const test = document.getElementById('buildings').childNodes;
// console.log(test.childNodes)

// test.forEach(tuils => tuils.addEventListener('click',click))

// function click(){
//     for(let i=0; i<buildings.length;i++){
//     let count = 0;
//     // if count = 0 => visibility hidden 

//     console.log('count')
//     if(myBakery.cookies >buildings[i].cost){
//     count++
//     document.getElementsByClassName('number')[i].innerHTML = count
    
//     }
// }
// }



// console.log(document.getElementsByClassName('number')[0])

// const test = document.getElementById('buildings').childNodes;
// console.log(test.childNodes)

// test.forEach(tuils => tuils.addEventListener('click',click))

// function click(){
//     for(let i=0; i<buildings.length;i++){
//     let count = 0;
//     // if count = 0 => visibility hidden 

//     console.log('count')
//     if(myBakery.cookies >buildings[i].cost){
//     count++
//     document.getElementsByClassName('number')[i].innerHTML = count
    
//     }
// }
// }



// console.log(document.getElementsByClassName('number')[0])


// let stock = 0;
//         let stocktotal = 0;

//         setInterval(function(){

//             if (myBakery._cookies > buildings[number].cost){

//                 stock = Math.floor(myBakery._cookies++ * 0.1);
//                 stocktotal = stock+myBakery._cookies;

//                 //stocktotal = myBakery._cookies++ - buildings[number].cost
//                 get_bakery_span1.innerHTML = ${stock} ;
//                 get_bakery_span2[1].innerHTML = ${stocktotal};
//                 console.log(stock)
//             }

//         },1000);




// function clickTuils() {
 
//     for(let prop in buildings) {
//         console.log('get number',prop)

//         let get_building_tuils = document.getElementById("building-"+buildings[prop].name.toLowerCase()+"");
//         get_building_tuils.addEventListener('click',()=>{

//             // let get_building_number = document.getElementsByClassName('number');
//             //alert('test click');
//             console.log('smt',myBuilding.buy());


//         });
//     }


// }
// clickTuils();


    
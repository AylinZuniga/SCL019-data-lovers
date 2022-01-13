//eventos del dom 


import { searchInput } from './data.js';
import data from './data/athletes/athletes.js'; // importamos la data desde athletes.js

import { genderFiler,medalFilter, allSport, allTeam, sportFilter,teamFilter} from "./data.js";



const infoAthletes = data.athletes;
const athletesProfil = document.getElementById('containerAthletes');
const inputSearch = document.getElementById('search'); //se crea la constante inputSearch




const dataAthletes = (newData) => {
    athletesProfil.innerHTML = '';
    newData.forEach((arrays) => {
        const card = document.createElement('div');
        card.classList.add('card'); //le agregue el stilo card es una tarjeta 
        card.innerHTML = `
    <div>
    <img src = ${arrays.gender === 'F'
                ? './imagenes/athletefemale.png'
                : './imagenes/athletemale.png'}
    width = 110 height = 110> 
    </div>

    <div class="cardAthlete">
    <h3 class="name-atlethe">${arrays.name}</h3>
    <p class = "age-atlethe">Age: ${arrays.age}</p>
    <p class = "gender-atlethe">gender: ${arrays.gender}</p>
    </div> 
    `;
  
   athletesProfil.appendChild(card);
});
};
dataAthletes(infoAthletes );

//console.log(dataAthletes, data);



//funcionalidad al selector id='sort'
const sortOption = document.querySelector('#sort'); //traigo el selector sort

const orderAZ = (order) => {
    const orderlyAZ = order.sort((a, b) => ((a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1)); //ordene a partir de la data que tiene
    return orderlyAZ;
  };

const orderZA = (order) => {
    const orderlyZA = order.sort((a, b) => ((a.name.toUpperCase() < b.name.toUpperCase()) ? 1 : -1));
    return orderlyZA;
  };

sortOption.addEventListener('change', (event) => { //escucho evento const sortOption
    
    const ordenSeleccionado = event.target.value;    //creo const que trae el valor de la seleccion para saber como se quiere ordenar 
    if (ordenSeleccionado === 'A-Z') {               // revisa cual es la manera de ordenar y llama al metodo que se creo arriba 
      const dataOrdenada = orderAZ(infoAthletes);   
      dataAthletes(dataOrdenada);// agrega la data al cuadro donde se ven los datos a partir de la aplicacion del metodo dataAthletes
    }
    if (ordenSeleccionado === 'Z-A') {
      const dataOrdenada = orderZA(infoAthletes);
      dataAthletes(dataOrdenada);
    }
  });


  //filtro por genero 

   const sortGender = document.querySelector('#gender');// obtener el selector por genero

   sortGender.addEventListener('change', (event) => { //escucho evento donde cambia la opcion escogida
    
    const dataOrdenada =  genderFiler(infoAthletes,event.target.value) // Utilizaste el metodo que exportaste y le entregaste como parametro la data de los atletas y el valor del selector
    dataAthletes(dataOrdenada);
  });


 //filtro por medalla

 const sortMedal = document.querySelector('#medals');// obtener el selector por genero

 sortMedal.addEventListener('change', (event) => { //escucho evento donde cambia la opcion escogida
  
  const dataOrdenada =  medalFilter(infoAthletes,event.target.value) // Utilizaste el metodo que exportaste y le entregaste como parametro la data de los atletas y el valor del selector
  dataAthletes(dataOrdenada);
});




 /* id: search, buscador por atleta */

    inputSearch.addEventListener('input', (e) => {
    const { value } = e.target;
    dataAthletes(searchInput(infoAthletes, value));
  });
 
  //llenado de select id sport con la data de js
const selectSport = document.getElementById("sport");
const uniqueSport = allSport(infoAthletes) //cree una variable para darle el resultado del metodo y  le doy un paramatro al metodo y lo ejecuto 

uniqueSport.forEach(element => {
  var option = document.createElement("option");
  option.value = element;
  option.text = element;

  selectSport.appendChild(option); //las opciones que se sacan de arriba las va sumando en el select 
});


//llenado de select id team con la data de js

const selectTeam = document.getElementById("team");
const uniqueTeam = allTeam(infoAthletes)

uniqueTeam.forEach(element => {
  var option = document.createElement("option");
  option.value = element;
  option.text = element;

  selectTeam.appendChild(option);
});


// filtro por sport

const sortSport = document.querySelector('#sport');// obtener el selector por genero

sortSport.addEventListener('change', (event) => { //escucho evento donde cambia la opcion escogida
 
 const dataOrdenada = sportFilter(infoAthletes,event.target.value) // Utilizaste el metodo que exportaste y le entregaste como parametro la data de los atletas y el valor del selector
 dataAthletes(dataOrdenada);
});


// filtro por Team

const sortTeam = document.querySelector('#team');// obtener el selector por genero

sortTeam.addEventListener('change', (event) => { //escucho evento donde cambia la opcion escogida
 
 const dataOrdenada = teamFilter(infoAthletes,event.target.value) // Utilizaste el metodo que exportaste y le entregaste como parametro la data de los atletas y el valor del selector
 dataAthletes(dataOrdenada);
});

//position pixed header

window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

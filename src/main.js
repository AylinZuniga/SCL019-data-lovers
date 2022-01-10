//eventos del dom 


import data from './data/athletes/athletes.js';
// importamos la data desde athletes.js

//import { filterData, statisticsData, orderData } from "./data.js";

const infoAthletes = data.athletes;
const athletesProfil = document.getElementById('containerAthletes');



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


//eventos del dom 


import data from './data/athletes/athletes.js'; // importamos la data desde athletes.js


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
import {searchInput, orderAZ, orderZA, genderFilter, medalFilter, sportFilter, teamFilter, allTeam, allSport} from '../src/data.js';


const data = [
  {
    "name": "Giovanni Abagnale",
    "gender": "M",
    "sport": "Rowing",
    "team": "Italy",
    "medal": "Bronze"
  },
  {
    "name": "Luc Abalo",
    "gender": "M",
    "sport": "Handball",
    "team": "France",
    "medal": "Silver",
  },

  {
    "name": "Nicola Virginia Adams",
    "gender": "F",
    "sport": "Boxing",
    "team": "Great Britain",
    "medal": "Gold",
  },
  {
    "name": "Patimat Abakarova",
    "gender": "F",
    "sport": "Taekwondo",
    "team": "Azerbaijan",
    "medal": "Bronze",
  }
]

//test de búsqueda por nombre de atleta
describe('función searchInput para buscar a los atletas por su nombre', () => {
  it('is a function', () => {
    expect(typeof searchInput).toBe('function'); 
  });

  it('Debe retornar a los atletas por su nombre', () => {

    let nameAthletes = searchInput(data, 'gio');

    
    expect(nameAthletes[0].name).toBe('Giovanni Abagnale');

  })
})


//test orden alfabetico
describe('Funcion orderAZ ordena alfabéticamente a los atletas', () => {
  it('is a function', () => {
    expect(typeof orderAZ).toBe('function');
  });

  it('Debería retornar los nombres de los atletas ordenados de la A-Z', () => {

    
    let orderAz = orderAZ (data);

    expect(orderAz[0].name).toBe('Giovanni Abagnale');
    expect(orderAz[1].name).toBe('Luc Abalo');
    expect(orderAz[2].name).toBe('Nicola Virginia Adams');
    expect(orderAz[3].name).toBe('Patimat Abakarova');

  });
});

describe('Funcion orderZA ordena alfabéticamente a los atletas', () => {
  it('is a function', () => {
    expect(typeof orderZA).toBe('function');
  });

  it('Debería retornar los nombres de los atletas ordenados de la A-Z', () => {

    
    let orderZa = orderZA (data);

    expect(orderZa[0].name).toBe('Patimat Abakarova');
    expect(orderZa[1].name).toBe('Nicola Virginia Adams');
    expect(orderZa[2].name).toBe('Luc Abalo');
    expect(orderZa[3].name).toBe('Giovanni Abagnale');
    

  });
});

//test de filtrado por género
describe('función genderFilter para ver el género de los atletas', () => {
  it('is a function', () => {
    expect(typeof genderFilter).toBe('function'); 
  });

  it('Debe retornar a los atletas con su género masculino', () => {

    let sortGender = genderFilter(data, 'M');

    
    expect(sortGender[0].gender).toBe('M');
    expect(sortGender[1].gender).toBe('M');
  })

  it('Debe retornar a los atletas con su género femenino', () => {

    let sortGender = genderFilter(data, 'F');

    expect(sortGender[0].gender).toBe('F');
    expect(sortGender[1].gender).toBe('F');
  })
})


//test medallas
describe('prueba para la funcion de filtro por medalla', () => {
  it('is a function', () => {
    expect(typeof medalFilter).toBe('function');
  });

  it('Debería retornar los nombres de los atletas que ganaron oro', () => {

    
    let medal= medalFilter (data,'Gold');

    expect(medal[0].name).toBe('Nicola Virginia Adams');
  });

  it('Debería retornar los nombres de los atletas que ganaron plata', () => {

    
    let medal= medalFilter (data,'Silver');

    expect(medal[0].name).toBe('Luc Abalo');
  });

  it('Debería retornar los nombres de los atletas que ganaron bronce', () => {

    
    let medal= medalFilter (data,'Bronze');

    expect(medal[0].name).toBe('Patimat Abakarova');
    expect(medal[1].name).toBe('Giovanni Abagnale');

  });
});


//test deporte

describe('prueba para la funcion de filtro por deporte', () => {
  it('is a function', () => {
    expect(typeof sportFilter).toBe('function');
  });

  it('Debería retornar a los atletas que practican Rowing ', () => {
 
    let sport= sportFilter (data,'Rowing');

    expect(sport[0].name).toBe('Giovanni Abagnale');
  });

  it('Debería retornar a los atletas que practican Handball ', () => {
 
    let sport= sportFilter (data,'Handball');

    expect(sport[0].name).toBe('Luc Abalo');
  });

  it('Debería retornar a los atletas que practican Boxing ', () => {
 
    let sport= sportFilter (data,'Boxing');

    expect(sport[0].name).toBe('Nicola Virginia Adams');
  });

  it('Debería retornar a los atletas que practican Taekwondo', () => {
 
    let sport= sportFilter (data,'Taekwondo');

    expect(sport[0].name).toBe('Patimat Abakarova');
  });
});


//filtrado por team

describe('función teamFilter para ver el género de los atletas', () => {
  it('is a function', () => {
    expect(typeof teamFilter).toBe('function'); 
  });

  it('Debe retornar a los atletas con el team Italy', () => {

    let sortTeam = teamFilter(data, 'Italy');

    expect(sortTeam[0].name).toBe('Giovanni Abagnale');
  })


  it('Debe retornar a los atletas con el team France', () => {

    let sortTeam = teamFilter(data, 'France');

    expect(sortTeam[0].name).toBe('Luc Abalo');
  })


  it('Debe retornar a los atletas con el team Great Britain', () => {

    let sortTeam = teamFilter(data, 'Great Britain');

    expect(sortTeam[0].name).toBe('Nicola Virginia Adams');
  })


  it('Debe retornar a los atletas con el team Azerbaijan', () => {

    let sortTeam = teamFilter(data, 'Azerbaijan');

    expect(sortTeam[0].name).toBe('Patimat Abakarova');
  })

})


describe('probando new set', () => {

  it('debe retornar string sin repetir el team', () => {
    let arrayTest = [{ "team": "Serbia" }, { "team": "Romania" }, { "team": "France" }, { "team": "France" }, { "team": "France" }];
    let result = allTeam(arrayTest)
    expect(result.size).toEqual(3)
    expect(result.has('Romania')).toBeTruthy()
  })

  it('debe retornar string sin repetir el sport', () => {
    let arrayTest = [{ "sport": "futbol" }, { "sport": "futbol" }, { "sport": "ballet" }, { "sport": "ballet" }, { "sport": "ballet" }];
    let result = allSport(arrayTest)
    expect(result.size).toEqual(2)
    expect(result.has('futbol')).toBeTruthy()
  })
  })

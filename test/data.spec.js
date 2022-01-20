import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { genderFiler, medalFilter, allTeam, allSport } from '../src/data.js';


// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

describe('prueba para la funcion genderFiler', () => {
  it('genderFiler debe retornar un array con el genero segun el valor que ingrese', () => {
    const input = [
      {
        name: 'Matteo Bisiani',
        gender: 'M',
      },
      {
        name: 'Nataliya Andrivna Burdeina',
        gender: 'F',
      },
      {
        name: 'Ilario Di Bu',
        gender: 'M',
      },
    ];
    const ouput = [
      {
        name: 'Nataliya Andrivna Burdeina',
        gender: 'F',
      },
    ];
    expect(genderFiler(input, 'F')).toEqual(ouput);
  });
});

// filtro medallas
describe('prueba para la funcion de filtro por medalla', () => {
  it('primera prueba unitaria: probar si filterMedalla devuelve un array con los atletas que tengan la medalla que indica el usuario', () => {
    const input = [
      {
        name: 'Matteo Bisiani',
        disciplinas: [{
          temporada: 'Summer',
          age: 2000,
          medalla: 'Gold',
        },
        {
          temporada: 'Summer',
          age: 2015,
          medalla: 'Gold',
        }],
      },
      {
        name: 'Nataliya Andrivna Burdeina',
      },
      {
        name: 'Ilario Di Bu',
        disciplinas: [{
          temporada: 'Summer',
          medalla: 'Silver',
        }],
      },
    ];
    const ouput2 = [
      {
        name: 'Matteo Bisiani',
        disciplinas: [{
          temporada: 'Summer',
          age: 2000,
          medalla: 'Gold',
        },
        {
          temporada: 'Summer',
          age: 2015,
          medalla: 'Gold',
        }],
      },
      {
        name: 'Matteo Bisiani',
        disciplinas: [{
          temporada: 'Summer',
          age: 2000,
          medalla: 'Gold',
        },
        {
          temporada: 'Summer',
          age: 2015,
          medalla: 'Gold',
        }],
      },
    ];
    expect(medalFilter(input, 'Gold')).toEqual(ouput2);
  });
});

describe('probando new set', () => {


  it('debe retornar string sin repetecion #1', () => {
    let arrayTest = [{ "team": "Serbia" }, { "team": "Romania" }, { "team": "France" }, { "team": "France" }, { "team": "France" }];
    let result = allTeam(arrayTest)
    expect(result.size).toEqual(3)
    expect(result.has('Romania')).toBeTruthy()

  })

  it('debe retornar string sin repetecion #2', () => {
    let arrayTest = [{ "sport": "futbol" }, { "sport": "futbol" }, { "sport": "ballet" }, { "sport": "ballet" }, { "sport": "ballet" }];
    let result = allSport(arrayTest)
    expect(result.size).toEqual(2)
    expect(result.has('ballet')).toBeTruthy()

  })
  
})






const data = [

  {
    "name": "Giovanni Abagnale",
      "gender": "M",
      "sport": "Rowing",
      "team": "Italy",
      "medal": "Bronze"
    },
    {
      "name": "Patimat Abakarova",
      "gender": "F",
      "sport": "Taekwondo",
      "team": "Azerbaijan",
      "medal": "Bronze"
    },
    {
      "name": "Luc Abalo",
      "gender": "M",
      "sport": "Handball",
      "team": "France",
      "medal": "Silver"
    },
    {
      "name": "Saeid Morad Abdevali",
      "gender": "M",
      "sport": "Wrestling",
      "team": "Iran",
      "medal": "Bronze"
    },
    {
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "sport": "Gymnastics",
      "team": "Russia",
      "medal": "Silver"
    },
]

describe('función genderFiler para ver el género de los atletas', () => {
  it('is a function', () => {
    expect(typeof genderFiler).toBe('function'); 
  });

  it('Debe retornar a los atletas con su género', () => {

  })
})
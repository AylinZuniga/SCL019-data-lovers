
import { genderFiler, medalFilter } from '../src/data.js';


/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/

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


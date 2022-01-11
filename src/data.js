// funcion de filtrado 

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

// // filtro por genero
export const genderFiler = (data, valor) => {
  const filterGenderArr = data.filter(items => (items.gender === valor || valor === 'All'));
  return filterGenderArr;
};

// // filtro por medalla
export const medalFilter = (data, valor) => {
  const filterMedalArr = data.filter(items => (items.medal === valor || valor === 'All')); //propiedades del item 
  return filterMedalArr;
};
// funcion de filtrado 

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };
  

//Búsqueda por atletas
export const searchInput = (infoAthletes, value) => {
  const buscador = infoAthletes.filter(el => el.name.toLowerCase().includes(value.toLowerCase()));
  return buscador;
};


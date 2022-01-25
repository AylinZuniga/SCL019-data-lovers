
//Búsqueda por atletas
export const searchInput = (infoAthletes, value) => {
  const buscador = infoAthletes.filter(el => el.name.toLowerCase().includes(value.toLowerCase()));
  return buscador;
};

//orden por alfabeto

export const orderAZ = (order) => {
    const orderlyAZ = order.sort((a, b) => ((a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1)); //ordene a partir de la data que tiene
    return orderlyAZ;
  };

export const orderZA = (order) => {
    const orderlyZA = order.sort((a, b) => ((a.name.toUpperCase() < b.name.toUpperCase()) ? 1 : -1));
    return orderlyZA;
  };


//filtro por genero
export const genderFilter = (data, valor) => {
  const filterGenderArr = data.filter(items => (items.gender === valor || valor === 'All'));
  return filterGenderArr;
};

//filtro por medalla
export const medalFilter = (data, valor) => {
  const filterMedalArr = data.filter(items => (items.medal === valor || valor === 'All')); //propiedades del item 
  return filterMedalArr;
};


//filtro por deporte 
export const sportFilter = (data, valor) => {
  const filterSportArr = data.filter(items => (items.sport === valor || valor === 'All')); //propiedades del item 
  return filterSportArr;

};

//filtro por team
export const teamFilter = (data, valor) => {
  const filterTeamArr = data.filter(items => (items.team === valor || valor === 'All')); //propiedades del item 
  return filterTeamArr ;

};


// función para que no se repita el sport

export const allSport = (data) => { 
  data = data.sort((a, b) => ((a.sport.toUpperCase() > b.sport.toUpperCase()) ? 1 : -1))

  const newArrSport = data.map(newData => {
    return newData.sport
  });

  return new Set(newArrSport);

}


// función para que no se repita el team



export const allTeam = (data) => {
  data = data.sort((a, b) => ((a.team.toUpperCase() > b.team.toUpperCase()) ? 1 : -1))

  const newArrTeam = data.map(newData => {
    return newData.team
  });
  return new Set(newArrTeam);
}

 
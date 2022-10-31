export const sortByFolio = ( array, filter ) => {
  const arrayOrdened = [...array].sort(( item1, item2 ) => {
    // Reordenar el array mediante la comparación de los datos
    return item1.folio - item2.folio;
  });

  // Retornar array en orden ascendente o descendente en función del filtro seleccionado
  if (filter === 'folio-asc') return arrayOrdened;
  if (filter === 'folio-des') return arrayOrdened.reverse();
};